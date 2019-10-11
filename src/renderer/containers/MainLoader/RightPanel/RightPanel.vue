<template>
  <div class= "mainPanel-container" @click="test">
      <MonacoEditor class="editor" v-model="code" language="javascript" />
  </div>
</template>

<script>
  import MonacoEditor from 'vue-monaco'
  export default {
    components: {
      MonacoEditor
    },

    data() {
      return {
        code: 'const noop = () => {}'
      }
    },
    methods: {
      test() {
        console.log(MonacoEditor)
        console.log(this.$store.getters.getSelectedFilePath)
      }
    }
  }
</script>

<style>
  .rightPanel-container {
    border: 1px red solid;
    width: 50%;
    height: 100%;
  }
  .editor {
    width: 300px;
    height: 400px;
    border: 1px red solid;
  }

</style>