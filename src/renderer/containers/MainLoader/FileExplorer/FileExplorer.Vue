<template>
  <div v-if="$store.getters.getFileTree" class="fileExplorer-container" v-html="generateFileTreeHtml(this.$store.getters.getFileTree)">

  </div>
</template>

<script>

  export default {
    methods: {
      generateFileTreeHtml(fileTreeArray) {
        let fileTreeStr = '';
        
        function traverseFileTree(fileTree) {
          fileTreeStr += `<ul><li>${fileTree.fileName}</li>`;
          for(let i = 0; i < fileTree.files.length; i++) {
            traverseFileTree(fileTree.files[i]);
          }
          fileTreeStr += `</ul>`;
        };


        for(let i = 0; i < fileTreeArray.length; i++) {
          if (fileTreeArray[i]) {
            traverseFileTree(fileTreeArray[i]);
          }
        }
        
        return fileTreeStr;
      }
    }
  }
    // template: `<div class="fileExplorer-container">${generateFileTreeHtml(this.$store.getters.getFileTree)}</div>`
  
</script>

<style> 
  .fileExplorer-container {
    border: 1px red solid;
    width: 25%;
    height: 100%;
    overflow: scroll;
  }
</style>