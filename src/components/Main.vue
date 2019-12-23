<template>
  <el-row class="main" :gutter="20" type="flex">
    <el-col :span="4" v-for="image in imageList" v-bind:key="image.id">
      <div>
        <el-image :src="image.url" :fit="'scale-down'"></el-image>
      </div>
    </el-col>
  </el-row>
</template>

<script>
import serverSDK from '../tools/serverSDK.js';

export default {
  name: "Mian",
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
.main {
  flex-grow: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
}
.main .image-content {
  height: 100px;
  width: 300px;
  background-color: brown;
}
</style>