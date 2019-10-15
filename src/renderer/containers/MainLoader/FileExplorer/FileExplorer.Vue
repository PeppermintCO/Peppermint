<template>
  <div v-if="$store.getters.getFileTree" class="fileExplorer-container">
    <FileFolderItem
      v-for="(file, index) in $store.getters.getFileTree"
      :key="index"
      :fileName="file.fileName"
      :files="file.files"
      :filePath="file.filePath"
      :depth="0"
    ></FileFolderItem>
  </div>
</template>

<script>
import FileFolderItem from "./FileFolderItem.vue";
export default {
  name: "fileExplorer",
  components: {
    FileFolderItem
  }
};
</script>

<style>
.fileExplorer-container {
  width: 25%;
  height: 100%;
  background-color: #232323;
  /* background-color: #888888; */
  overflow: scroll;
}
</style>