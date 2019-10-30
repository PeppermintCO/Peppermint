<template>
  <div class="projectLoader">
    <div class="projectLoader-header">
      <div class="projectLoader-title">
        <img src="../../../../build/icons/pepperming-logo.png">
        <h1 class="projectLoaderH1">Peppermint</h1>
      </div>
    </div>
    <div class="projectLoader-main">
      <div class="main-left">
        <div>
          <h4>01</h4>
          <p>Enter test site's URL</p>
        </div>
        <input placeholder="ex: localhost:3000" @input="saveUrl" v-model="url" />
      </div>
      <div class="main-right">
        <div>
          <h4>02</h4>
          <p>Select your application</p>
        </div>
        <button @click="openProject">Open Project</button>
      </div>
    </div>
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
  name: "projectLoader",
  data() {
    return {
      url: ""
    };
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
        console.log(directoryPath, "directoryPath");
        this.$store.dispatch("setFilePath", directoryPath);
        this.$store.dispatch(
          "createFileTree",
          generateFileTreeObject(directoryPath)
        );
      }

      console.log(this.$store.getters.getFileTree, "<----");
    },
    saveUrl() {
      this.$store.dispatch("saveUrl", this.url);
    }
  }
};
</script>

<style scoped>
.projectLoader {
  display: flex;
  height: 100vh;
  flex-direction: column;
}

.projectLoader-header {
  color: white;
  background-color: rgb(105, 173, 196);
  font-size: 2rem;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  height: 50%;
}

.projectLoader-title {
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2.5px;
  margin-bottom: 20px;
  width: 35%;
}

.projectLoader-main {
  display: flex;
  justify-content: center;
  height: 50%;
}
.main-left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  height: 70%;
  width: 50%;
}

.main-left div {
  margin-right: 70px;
  display: flex;
}
.main-left input {
  margin-right: 50px;
  height: 20px;
  width: 200px;
}

.main-right {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 70%;
  width: 50%;
}

.main-right div {
  display: flex;
  margin-left: 70px;
}

h4 {
  font-weight: 700;
  letter-spacing: 1.5px;
  font-family: "Ubuntu", sans-serif;
  color: lightblue;
  margin-right: 10px;
}

p {
  font-size: 13px;
  font-weight: 300;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 1px;
  color: lightblue;
}

input {
  margin-top: 10px;
  padding-left: 1rem;
  font-size: 12px;
  width: 250px;
  color: grey;
}

button {
  margin-left: 65px;
  height: 20px;
  width: 200px;
  margin-top: 10px;
  padding-left: 1rem;
  font-size: 12px;
  color: grey;
}

img {
  height: 80px;
}
</style>