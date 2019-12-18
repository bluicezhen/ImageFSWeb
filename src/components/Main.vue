<template>
  <div class="main">
    <span>Main Area</span>
  </div>
</template>

<script>
import serverSDK from '../tools/serverSDK.js';

export default {
  name: "Mian",
  beforeCreate: async function(){
    let res = await serverSDK.fileListGet();
    console.log(res);
  }
};
</script>

<style>
.main {
  align-items: center;
  justify-content: center;
  display: flex;
  flex-grow: 100;
}
</style>