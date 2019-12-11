<template>
  <div id="app">
    <input id="id-upload" type="file" accept="image/*" v-on:change="clickUploadFile($event.target.files)"/>
    <TopBar/>
    <Main/>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue';
import Main from './components/Main.vue'

export default {
  name: 'app',
  methods: {
    clickUploadFile(fileList) {
      if (fileList.length != 0) {
        let file = fileList[0];
        console.log(file);
      }
    }
  },
  components: { TopBar, Main }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  flex-direction: column;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  display: flex;
}
#id-upload {
  display: none;
}
</style>
