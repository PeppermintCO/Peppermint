<template>
  <div class="right-header">
    
   <button className="show-file-content button" @click="displayFileContent">View File Content</button>
   <button className="show-test-content button" @click="displayTestFile">View Test Code</button>
   <button className="export-test-file button" @click="exportTest"> Export Test</button>
  </div>
</template>

<script>
const { remote } = window.require('electron');
const electronFs = remote.require('fs');

  export default {
    methods: {
      displayFileContent() {
        console.log('inside display File Content (RIGHTHEADER)')
        this.$eventHub.$emit('file-content-set')
      },
      displayTestFile() {
        console.log('inside display Test File (RIGHTHEADER)')
        this.$eventHub.$emit('test-content-set')
      },
      exportTest() {
        if (!this.$store.getters.getFilePath 
            || !this.$store.getters.showComponentName 
            || !this.$store.getters.getTestContent) return;
        console.log('exporting...')
        const componentName = this.$store.getters.showComponentName
        const filePath = this.$store.getters.getFilePath
        const directoryName = '__test__'
        const directoryPath = `${filePath}/${directoryName}`;
        const fileContent = this.$store.getters.getTestContent;
        const testFilePath = `${filePath}/${directoryName}/${componentName}.js`
        
       if (electronFs.existsSync(directoryPath)) {
         electronFs.writeFile(testFilePath, fileContent, (err) => {
           if (err) console.error(err);
           console.log(`created new test file!`)
         })
       } else {
         try {
           electronFs.mkdirSync(directoryPath);
           console.log('created new directory called __test__');

           electronFs.writeFile(testFilePath, fileContent, (err) => {
           if (err) console.error(err);
           console.log(`created new test file!`)
           })  
         } catch (err) {
           console.error(err)
         }
       }
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