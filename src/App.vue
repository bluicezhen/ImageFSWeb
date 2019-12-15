<template>
  <div id="app">
    <input
      id="id-upload"
      type="file"
      accept="image/*"
      v-on:change="clickUploadFile($event.target.files)"
    />
    <TopBar />
    <Main />
  </div>
</template>

<script>
import TopBar from "./components/TopBar.vue";
import Main from "./components/Main.vue";
import Ajax from "./tools/Ajax.js";
import qiniu from "watermelon-qiniu";

export default {
  name: "app",
  methods: {
    async clickUploadFile(fileList) {
      if (fileList.length != 0) {
        let file = fileList[0];

        // Get Qiniu Upload Toekn
        let res = await Ajax("POST", "/file/", { body: { title: file.name } });
        let qiniu_upload_token = res.qiniu_upload_token;
        let qiniu_upload_key = res.id;

        // Upload
        try {
          await qiniu.upload(file, qiniu_upload_key, qiniu_upload_token);
        } catch (e) {
          console.log("err", e);
        }
      }
    }
  },
  components: { TopBar, Main }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  flex-direction: column;
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  display: flex;
}
#id-upload {
  display: none;
}
</style>
