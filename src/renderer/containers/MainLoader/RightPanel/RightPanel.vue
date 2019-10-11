<template>
  <div class= "mainPanel-container">
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
    }
  }
</script>

<style>
  .rightPanel-container {
    border: 1px red solid;
    width: 50%;
    height: 100%;
  }

</style>