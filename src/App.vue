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
import qiniu from "watermelon-qiniu";
import serverSDK from "./tools/serverSDK";

export default {
  name: "app",
  methods: {
    async clickUploadFile(fileList) {
      if (fileList.length != 0) {
        let file = fileList[0];

        // Get Qiniu Upload Toekn
        let [fileID, qiniuUploadToken] = await serverSDK.fileCreate(file.name);

        // Upload
        try {
          await qiniu.upload(file, fileID, qiniuUploadToken);
          await serverSDK.fileUpdateIsUploadQiniu(fileID);
          this.$message({ message: "Image Upload Success", type: "success" });
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
