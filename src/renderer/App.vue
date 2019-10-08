<template>
  <div id="app">
    Hi!
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
  /* CSS */
</style>
