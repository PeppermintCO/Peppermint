<template>
  <div class="left-header">
    <button class="button fileExplorerButton" @click="$store.dispatch('toggleFileExplorer')">
      <img src="../../../../assets/images/file-explorer.png" title="Toggle file view">
    </button>
    <button class="button openProjectButton" @click="openProject">
      <img src="../../../../assets/images/folder.png" title="Open project directory">
    </button>
  </div>
</template>

<script>
const { remote } = window.require("electron");
const electronFs = remote.require("fs");
const { dialog } = remote;

function generateFileTreeObject(directoryPath) {
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
    };
    //get the stats/data of current file
    const fileStats = electronFs.statSync(file.filePath);
    //check if its a directory , .git, node_modules
    if (fileName !== ".git" && fileName !== "node_modules" && fileName !== ".DS_Store") {
      //if directory
      if (fileStats.isDirectory()) {
        //make recursive call with current fileObject.filePath and save to fileObject.files
        file.files = generateFileTreeObject(file.filePath);
      }
      //return fileObject
      return file;
    }
  });

  //output will be fileArray(will contain fileObjects)
  return fileArray.filter(file => typeof file === "object");
}



export default {
  name: "leftHeader",
  created() {
    this.$eventHub.$on("refresh-fileExplorer", this.refreshProject);
  },
  beforeDestroy() {
    this.$eventHub.$off("refresh-fileExplorer");
  },
  methods: {
    openProject() {
      const directory = dialog.showOpenDialog({
        properties: ["openDirectory"],
        filters: [
          { name: "Javascript Files", extensions: ["js"] },
          { name: "Vue Files", extensions: ["vue"] },
          { name: "Style", extensions: ["css"] },
          { name: "Html", extensions: ["html"] }
        ]
      });

      if (directory && directory[0]) {
        const directoryPath = directory[0];
        this.$store.dispatch("setFilePath", directoryPath);
        this.$store.dispatch("createFileTree", generateFileTreeObject(directoryPath));
      }
    },
    refreshProject() {
      this.$store.dispatch("createFileTree", generateFileTreeObject(this.$store.getters.getFilePath));
    }
  }
};
</script>

<style>
.left-header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100%;
  width: 12%;
}
.fileExplorerButton {
  outline: none;
  background-color: #3c3c3c;
  height: 100%;
  width: 35%;
  margin-left: 5%;
  color: rgb(85, 201, 240);
}
.openProjectButton {
  outline: none;
  border: none;
  background-color: #3c3c3c;
  height: 100%;
  width: 35%;
  margin-right: 7%;
  color: rgb(85, 201, 240);
}
</style>
