<template>
  <div v-if="$store.getters.getFileTree" class="fileExplorer-container">
    <FileFolderItem v-for="(file, index) in $store.getters.getFileTree" :key="index" :fileName="file.fileName" :files="file.files">
    </FileFolderItem>
  </div>
</template>

<script>
  import FileFolderItem from './FileFolderItem.vue';
  export default {
    name: 'fileExplorer',
    components: {
      FileFolderItem,
    }
  }
  
</script>

<style> 
  .fileExplorer-container {
    border: 1px red solid;
    width: 25%;
    height: 100%;
    overflow: scroll;
  }
</style>