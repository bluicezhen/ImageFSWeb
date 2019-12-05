<template>
  <div id="app">
    <TopBar/>
  </div>
</template>

<script>
import TopBar from './components/TopBar.vue'

export default {
  name: 'app',
  components: {
    TopBar
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
}
</style>
