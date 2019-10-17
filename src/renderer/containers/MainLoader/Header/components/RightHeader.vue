<template>
  <div class="right-header">
    <button class="show-file-content button" @click="displayFileContent">
      <i class="fas fa-code fa-2x"></i>
    </button>
    <button class="show-test-content button" @click="displayTestFile">
      <i class="fas fa-vial fa-2x"></i>
    </button>
    <button class="showWebView button" @click="viewWebsite">
      <i class="fab fa-chrome fa-2x"></i>
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
      <i class="fas fa-file-download fa-2x"></i>
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
      console.log("inside display File Content (RIGHTHEADER)");
      this.$store.dispatch("changeShowWebsite", false);
      this.$eventHub.$emit("file-content-set");
    },
    displayTestFile() {
      console.log("inside display Test File (RIGHTHEADER)");
      this.$store.dispatch("changeShowWebsite", false);
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
  color: rgb(85, 201, 240);
}

.button {
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
