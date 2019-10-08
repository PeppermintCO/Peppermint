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

