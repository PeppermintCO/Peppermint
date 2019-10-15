<template>
  <div class="right-header">
    <button class="show-file-content button" @click="displayFileContent">View File Content</button>
    <button class="show-test-content button" @click="displayTestFile">View Test Code</button>
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
  methods: {
    displayFileContent() {
      console.log("inside display File Content (RIGHTHEADER)");
      this.$eventHub.$emit("file-content-set");
    },
    displayTestFile() {
      console.log("inside display Test File (RIGHTHEADER)");
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
      const directoryName = "__test__";
      const directoryPath = `${filePath}/${directoryName}`;
      const fileContent = this.$store.getters.getTestContent;
      const testFilePath = `${filePath}/${directoryName}/${componentName}.js`;

      if (electronFs.existsSync(directoryPath)) {
        createFile(testFilePath, fileContent);
      } else {
        try {
          electronFs.mkdirSync(directoryPath);
          console.log("created new directory called __test__");

          createFile(testFilePath, fileContent);
        } catch (err) {
          console.error(err);
        }
      }
    }
  }
};
</script>

<style>
.right-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 40%;
}
.exportButton {
  border: none;
  background-color: #3c3c3c;
  color: #00e24d;
  height: 100%;
  width: 15%;
}
</style>