<template>
  <el-row id="main" :gutter="20" type="flex">
    <el-col :span="4" v-for="image in imageList" v-bind:key="image.id">
      <ImageContent v-bind:image="image"></ImageContent>
    </el-col>
  </el-row>
</template>

<script>
import serverSDK from '../tools/serverSDK.js';
import ImageContent from './ImageContent.vue';

export default {
  name: "Mian",
  components: { ImageContent },
  data: function() {return {
    imageList: []
  }},
  beforeCreate: async function(){
    let res = await serverSDK.fileListGet();
    this.$data.imageList = res.results;
  }
};
</script>

<style>
#main {
  flex-grow: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
}
#main .el-col {
  padding: 10px;
}
</style>