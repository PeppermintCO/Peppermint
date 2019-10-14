<template>
  <div class="right-header">
    
   <button className="show-file-content button" @click="displayFileContent">View File Content</button>
   <button className="show-test-content button" @click="displayTestFile">View Test Code</button>
   <button> Export Test</button>
  </div>
</template>

<script>
  export default {
    methods: {
      displayFileContent() {
        console.log('inside display File Content (RIGHTHEADER)')
        this.$eventHub.$emit('file-content-set')
      },
      displayTestFile() {
        console.log('inside display Test File (RIGHTHEADER)')
        this.$eventHub.$emit('test-content-set')
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