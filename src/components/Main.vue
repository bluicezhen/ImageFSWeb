<template>
  <div class="main">
    <el-button v-on:click="buttonOnClick()">Upload</el-button>
  </div>
</template>

<script>
export default {
  name: "Mian",
  methods: {
    buttonOnClick: function() {
      document.getElementById('id-upload').click()
    }
  }
};
</script>

<style>
.main {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-grow: 1;
  height: 100vh;
}
</style>