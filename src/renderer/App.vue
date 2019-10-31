<template>
  <div id="app">
    <MainLoader v-if="this.$store.getters.getFileTree" />
    <ProjectLoader v-else />
  </div>
</template>

<script>
import MainLoader from "./containers/MainLoader/MainLoader.vue";
import ProjectLoader from "./containers/ProjectLoader/ProjectLoader.vue";

export default {
  name: "peppermint",
  components: {
    MainLoader,
    ProjectLoader
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
  overflow: hidden !important;
}

#app {
  height: 100%;
  width: 100%;
  background-color: #232323;
}

button {
  cursor: pointer;
}
</style>
