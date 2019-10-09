<template>
  <div v-if="$store.getters.showFileExplorer" class="mainLoader-container">
    <Header />
    <div class="mainLoader">
      <FileExplorer />
      <MainPanel />
      <RightPanel />
    </div>
  </div>
  <div v-else class="mainLoader-container-f">
    <Header />
    <div class="mainLoader">
      <MainPanel />
      <RightPanel />
    </div>
  </div>
</template>

<script>
  import Header from './Header/Header.vue'
  import FileExplorer from './FileExplorer/FileExplorer.vue'
  import MainPanel from './MainPanel/MainPanel.vue'
  import RightPanel from './RightPanel/RightPanel.vue'
 
 export default {
   name: 'mainLoader',
   components: {
     Header, FileExplorer, MainPanel, RightPanel
   }
 }
</script>

<style>
  .mainLoader-container {
    height: 100%;
    border: 1px red solid;
    
  }

  .mainLoader-container-f {
    height: 100%;
  }

  .mainLoader {
    display: flex;
    height: 100%;
  }
</style>

