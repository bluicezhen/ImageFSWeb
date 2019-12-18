<template>
  <el-header>
    <span>Image FS</span>
    <el-button v-on:click="buttonOnClick()">Upload Image</el-button>
  </el-header>
</template>

<script>
export default {
  name: "TopBar",
  methods: {
    buttonOnClick: function() {
      document.getElementById('id-upload').click()
    }
  }
};
</script>

<style>
.el-header {
  align-items: center;
  height: 50px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6
}
span {
  margin-left: 10px
}
</style>