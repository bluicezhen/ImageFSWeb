<template>
  <el-row id="main" type="flex">
    <el-col :span="4" v-for="image in imageList" v-bind:key="image.id">
      <ImageContent v-bind:image="image"></ImageContent>
    </el-col>
    <el-pagination
      background
      layout="prev, pager, next"
      :total="imageCount"
      page-size="12">
    </el-pagination>
  </el-row>
</template>

<script>
import serverSDK from '../tools/serverSDK.js';
import ImageContent from './ImageContent.vue';

export default {
  name: "Mian",
  components: { ImageContent },
  data: function() {return {
    imageList: [],
    imageCount: 0,
    pageSize: 12,
  }},
  beforeCreate: async function(){
    let res = await serverSDK.fileListGet();
    this.$data.imageList = res.results;
    this.$data.imageCount = res.count;
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