<template>
  <div class="mainLoader-container">
    <Header />
    <FileExplorer />
    <MainPanel />
    <RightPanel />
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
    display: grid;
    grid-template-columns: 20% repeat(2, 1fr) repeat(2, 0);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 0px;
    grid-row-gap: 0px;
  }
</style>

