<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <el-image :src="imageURL" :fit="'scale-down'">
    </el-image>
  </el-card>
</template>

<script>
  export default {
    name: "ImageContent",
    props: {
      imageURL: {
        type: String,
        default: "https://www.baidu.com/img/bd_logo1.png"
      }
    },
    mounted: function () {
      // Set the image container to equal width and height.
      let imageE = this.$el.getElementsByClassName("el-image")[0];
      imageE.style.height = imageE.offsetWidth + "px";
    },
    methods: {}
  }
</script>

<style>
  .box-card {
    padding: 0px;
  }
  .box-card .el-image {
    display: block;
    width: 100%;
  }
</style>
