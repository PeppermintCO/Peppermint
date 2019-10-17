<template>
  <div id="app">
    <MainLoader v-if="this.$store.getters.getFileTree" />
    <ProjectLoader v-else />
  </div>
</template> 

<script>
<<<<<<< HEAD
import MainLoader from "./containers/MainLoader/MainLoader.vue";
export default {
  name: "peppermint",
  components: {
    MainLoader
=======
import MainLoader from './containers/MainLoader/MainLoader.vue'
import ProjectLoader from './containers/ProjectLoader/ProjectLoader.vue' 
  
  export default {
    name: 'peppermint',
    components: {
      MainLoader,
      ProjectLoader
    },
>>>>>>> 3de60b7fa02fa2b6dcb5923fd0558698cce69f89
  }
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
html,
body {
  height: 100%;
  width: 100% !important;
  /* max-height: 100%; */
  overflow: hidden !important;
}

#app {
  /* overflow: hidden !important; */
  height: 100%;
  width: 100%;
  background-color: #232323;
}
</style>
