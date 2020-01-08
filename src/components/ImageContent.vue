<template>
  <el-card class="box-card" :body-style="{ padding: '0px' }">
    <el-image :src="image.url" :fit="'scale-down'"></el-image>
    <div class="image-info">
      <p><b>title: </b>{{ image.title }}</p>
    </div>
  </el-card>
</template>

<script>
  export default {
    name: "ImageContent",
    props: {
      image: {
        type: Object,
        default: function () { 
          return { };
        }
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
    border-bottom: 1px solid #EBEEF5;
  }
  .box-card .image-info {
    padding: 0 10px 0 10px;
  }
  .box-card .image-info p {
    font-size: 12px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
</style>
