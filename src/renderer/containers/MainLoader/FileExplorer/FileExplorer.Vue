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
          if(fileTree.files.length > 0) {
            fileTreeStr += `<ul><li><button @click="toggleShowSubfolder">${fileTree.fileName}</button></li>`;
            for(let i = 0; i < fileTree.files.length; i++) {
              traverseFileTree(fileTree.files[i]);
            }
          } else {
            fileTreeStr += `<ul><li><button @dblclick="displayCode">${fileTree.fileName}</button></li>`;
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
    }, 
    toggleShowSubFolder() {
      console.log('toggling folders.....')
    },
    displayCode() {
      console.log('displaying your code........')
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