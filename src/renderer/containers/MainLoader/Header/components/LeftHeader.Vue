<template>
  <div class="left-header">
    <button class="button fileExplorerButton" @click="$store.dispatch('toggleFileExplorer')">File Explorer</button>
    <button class="button openProjectButton" @click="openProject">Open Project</button>
  </div>
</template>

<script>
const { remote } = window.require('electron');
const electronFs = remote.require('fs');
const { dialog } = remote

 function handleOpenFolder(){
    const directory = dialog.showOpenDialog({
      properties: ['openDirectory'],
      filters: [
        { name: 'Javascript Files', extensions: ['js'] },
        { name: 'Vue Files', extensions: ['vue']},
        { name: 'Style', extensions: ['css'] },
        { name: 'Html', extensions: ['html'] },
      ],
    });
    
    if (directory && directory[0]) {
      const directoryPath = directory[0];
      this.$store.dispatch(setFilePath(directoryPath));
      this.$store.dispatch(createFileTree({}))
    }

    console.log(this.$store.getters.getFilePath, '<--- Path')
    console.log(this.$store.getters.getFileTree, '<--- Tree')

 }

  //  console.log(electronFs.readdirSync(directoryPath));
 function generateFileTreeObject(directoryPath){

    //input path (string)
    //output array of objects. Each object will have filepath, filename, and files (if folder)
    //fileObject = (keys for the object: filepath, filename, files(array))


    //create an array(fileArray) to store fileObjects
    const fileArray = electronFs.readdirSync(directoryPath).map(fileName => {
      //For each file in the input directory path, get fileName, get current file's filepath and create files (array)
      const file = {
        fileName,
        filePath: `${directoryPath}/${fileName}`,
        files: []
      }
    //get the stats/data of current file
    const fileStats = electronFs.statSync(file.filePath)
    //check if its a directory , .git, node_modules
    if (fileName !== '.git' && fileName !== 'node_modules') {
      //if directory 
      if (fileStats.isDirectory()) {
        //make recursive call with current fileObject.filePath and save to fileObject.files
        file.files = generateFileTreeObject(file.filePath)
      }
      //return fileObject
        return file;
     }
    })

return fileArray.filter(file => typeof file === 'object')



    //output will be fileArray(will contain fileObjects)
 }


export default {
  name: "leftHeader", 
  methods: {
    openProject() {
    //  console.log(handleOpenFolder())
     const directory = dialog.showOpenDialog({
      properties: ['openDirectory'],
      filters: [
        { name: 'Javascript Files', extensions: ['js'] },
        { name: 'Vue Files', extensions: ['vue']},
        { name: 'Style', extensions: ['css'] },
        { name: 'Html', extensions: ['html'] },
      ],
    });
    
    if (directory && directory[0]) {
      const directoryPath = directory[0];
      const testObj = {'/User/me': 'hellooo'}
      this.$store.dispatch('setFilePath', directoryPath);
      this.$store.dispatch('createFileTree', generateFileTreeObject(directoryPath));
    }
    // const filePath2 = this.$store.getters.getFilePath;
    // const test = generateFileTreeObject(filePath2);
    // console.log(test)
    console.log(this.$store.getters.getFileTree, '<---- fileTree')
      // console.log(this.$store.getters.getFilePath, '<--- Path')
      // const test = this.$store.getters.getFileTree['/User/me']
      // console.log(test , '<--- test')
    }
  }
}
</script>

<style>
  .left-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px red dotted;
    height: 100%;
    width: 20%;
  }
</style>