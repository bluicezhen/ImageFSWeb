<template>
  <el-row id="main" :gutter="20" type="flex">
    <el-col :span="4" v-for="image in imageList" v-bind:key="image.id">
      <el-card class="box-card" :body-style="{ padding: '0px' }">
        <div class="image-content">
          <el-image :src="image.url" :fit="'scale-down'"></el-image>
        </div>
      </el-card>
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
#main {
  flex-grow: 100;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
}
#main .el-col {
  height: 16.66667vw;
  padding: 10px;
}
#main .el-col .el-card .image-content {
  width: 100%;
  height: 214.656px;  
}
#main .el-col .el-card .image-content .el-image {
  width: 100%;
  height: 100%;
}
</style>