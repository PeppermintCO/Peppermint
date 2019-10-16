<template>
  <div class="right-header">
   <input name="url" type="text" placeholder='enter project url' v-model="url" @input="saveUrl"/>
   <button className="show-website button" @click="viewWebsite">View Website</button>
   <button className="show-file-content button" @click="displayFileContent">View File Content</button>
   <button className="show-test-content button" @click="displayTestFile">View Test Code</button>
   <button className="export-test-file button" @click="exportTest"> Export Test</button>
  </div>
</template>

<script>
const { remote } = window.require('electron');
const electronFs = remote.require('fs');

const createFile = async (filePath, fileContent) => {
  await electronFs.writeFile(filePath, fileContent, (err) => {
   if (err) console.error(err);
   console.log(`created new test file!`)
  })
}

  export default {
    methods: {
      displayFileContent() {
        console.log('inside display File Content (RIGHTHEADER)')
        this.$store.dispatch("changeShowWebsite", false);
        this.$eventHub.$emit('file-content-set')
      },
      displayTestFile() {
        console.log('inside display Test File (RIGHTHEADER)')
        this.$store.dispatch("changeShowWebsite", false);
        this.$eventHub.$emit('test-content-set')
      },
      exportTest() {
        if (!this.$store.getters.getFilePath
            || !this.$store.getters.showComponentName
            || !this.$store.getters.getTestContent) return;
        console.log('exporting...')
        const componentName = this.$store.getters.showComponentName
        const filePath = this.$store.getters.getFilePath
        const directoryName = '__tests__'
        const directoryPath = `${filePath}/${directoryName}`;
        const fileContent = this.$store.getters.getTestContent;
        const testFilePath = `${filePath}/${directoryName}/${componentName}.js`

       if (electronFs.existsSync(directoryPath)) {
         createFile(testFilePath, fileContent);
         this.$eventHub.$emit('refresh-fileExplorer')
       } else {
         try {
           electronFs.mkdirSync(directoryPath);
           console.log('created new directory called __tests__');
           createFile(testFilePath, fileContent)
           this.$eventHub.$emit('refresh-fileExplorer')
         } catch (err) {
           console.error(err)
         }
       }
     },
     saveUrl() {
       if (this.url.slice(0, 7) !== 'http://' && this.url.slice(0, 8) !== 'https://') {
         this.url = 'http://' + this.url;
       }

       this.$store.dispatch("saveUrl", this.url);
     },
     viewWebsite() {
       this.$store.dispatch("changeShowWebsite", true);
       this.$eventHub.$emit('website-content-set');
     }
    }
  }

</script>

<style>
 .right-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px red dotted;
    height: 100%;
    width: 40%;
  }
</style>
