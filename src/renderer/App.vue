<template>
  <div id="app">
    <MainLoader />
  </div>
</template>

<script>
 import MainLoader from './containers/MainLoader/MainLoader.vue'
  export default {
    name: 'peppermint',
    components: {
      MainLoader
    }
  }
</script>

<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body {
    height: 100%;
  }

  #app {
    height: 100%;
  }

</style>
