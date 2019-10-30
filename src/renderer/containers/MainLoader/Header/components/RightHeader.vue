<template>
  <div class="right-header">
    <button class="show-file-content button" @click="displayFileContent">
      <img src="../../../../assets/images/code-display.png" title="Display File Content">
      <!-- <i class="fas fa-code fa-2x"></i> -->
    </button>
    <button class="show-test-content button" @click="displayTestFile">
      <img src="../../../../assets/images/current-test-code.png" title="Display Current Test">
      <!-- <i class="fas fa-vial fa-2x"></i> -->
    </button>
    <button class="showWebView button" @click="viewWebsite">
      <img src="../../../../assets/images/rendered-proj.png" title="View Website">
      <!-- <i class="fab fa-chrome fa-2x"></i> -->
    </button>
    <input
      name="url"
      type="text"
      placeholder="enter project url"
      v-model="url"
      @input="saveUrl"
      class="urlInput"
    />
    <button class="export-test-file button" @click="exportTest">
      <img src="../../../../assets/images/export.png" title="Download Test File">
      <!-- <i class="fas fa-file-download fa-2x"></i> -->
    </button>
  </div>
</template>

<script>
const { remote } = window.require("electron");
const electronFs = remote.require("fs");


const createFile = async (filePath, fileContent) => {
  await electronFs.writeFile(filePath, fileContent, err => {
    if (err) console.error(err);
    console.log(`created new test file!`);
  });
};

export default {
  data() {
    return {
      url: ""
    };
  },
  methods: {
    displayFileContent() {
      this.$store.dispatch("changeShowWebsite", false);
      //emit 'file-content-set' to RightPanel.vue
      this.$eventHub.$emit("file-content-set");
    },
    displayTestFile() {
      this.$store.dispatch("changeShowWebsite", false);
      //emit 'test-content-set' to RightPanel.vue
      this.$eventHub.$emit("test-content-set");
    },
    exportTest() {
      if (
        !this.$store.getters.getFilePath ||
        !this.$store.getters.showComponentName ||
        !this.$store.getters.getTestContent
      )
        return;
      console.log("exporting...");
      const componentName = this.$store.getters.showComponentName;
      const filePath = this.$store.getters.getFilePath;
      const directoryName = "__tests__";
      const directoryPath = `${filePath}/${directoryName}`;
      const fileContent = this.$store.getters.getTestContent;
      const testFilePath = `${filePath}/${directoryName}/${componentName}.js`;

      if (electronFs.existsSync(directoryPath)) {
        createFile(testFilePath, fileContent);
        this.$eventHub.$emit("refresh-fileExplorer");
      } else {
        try {
          electronFs.mkdirSync(directoryPath);
          console.log("created new directory called __tests__");
          createFile(testFilePath, fileContent);
          this.$eventHub.$emit("refresh-fileExplorer");
        } catch (err) {
          console.error(err);
        }
      }
    },
    saveUrl() {
      this.$store.dispatch("saveUrl", this.url);
      console.log(this.$store.getters.getUrl);
    },
    viewWebsite() {
      console.log('hi')
      this.$store.dispatch("changeShowWebsite", true);
      this.$eventHub.$emit("website-content-set");
    }
  }
};
</script>

<style>
.show-file-content {
  margin-left: 6%;
}
.right-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
  width: 40%;
  /* border: 1px red solid; */
  color: rgb(85, 201, 240);
}

.button {
  outline: none;
  border: none;
  /* justify-self: flex-end; */
  background-color: #3c3c3c;
  color: rgb(85, 201, 240);
  height: 100%;
  width: 15%;
}
.urlInput {
}
</style>
