<template>
  <div>
      <codemirror v-model="code" :options="cmOptions"></codemirror>
  </div>
</template>

<script>
// require component
import { codemirror } from 'vue-codemirror'
  // language js
import '../../../../../node_modules/codemirror/mode/javascript/javascript.js'
// theme css
import '../../../../../node_modules/codemirror/theme/base16-light.css'
// more codemirror resources
// import 'codemirror/some-resource...'

export default {
  data () {
    return {
      code: '//Select a file to display...',
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: 'text/javascript',
        theme: 'base16-light',
        lineNumbers: false,
        line: true,
        // more codemirror options,  codemirror ...
      },
    }
  },
  created() {
    this.$eventHub.$on('file-content-set', this.onCmFileContentChange)
    this.$eventHub.$on('test-content-set', this.onCmTestContentChange)
  },
  beforeDestroy() {
    this.$eventHub.$off('file-content-set')
    this.$eventHub.$off('test-content-set')
  },
  components: {
    codemirror
  },
  methods: {
    onCmReady(cm) {
      console.log('the editor is readied!', cm)
    },
    onCmFocus(cm) {
      console.log('the editor is focus!', cm)
    },
    onCmFileContentChange() {
      // console.log('this is new file content code', this.$store.getters.getFileContent)
      console.log('fileContentChange executed')
      this.code = this.$store.getters.getFileContent
    },
    onCmTestContentChange() {
      console.log('testContentChange executed')
      console.log(this.$store.getters.getTestContent, '<-----')
      // console.log('this is new test content code', this.$store.getters.getTestContent)
      this.code = this.$store.getters.getTestContent
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror
    }
  },
}
</script>

<style>
  .vue-codemirror {
    background-color: #ffffff !important;
    overflow: scroll;
    border: 1px red solid;
    width: 50%;
    height: 100%;
  }

  .cm-s-base16-light {
    background-color: #ffffff !important;
  }

  .CodeMirror {
    height: 100%;
    width: 100%;
  }

 .CodeMirror-vscrollbar div, .CodeMirror cm-s-base16-light, .CodeMirror-code  {
    background-color: #ffffff !important;
    height: 100% !important;
    width: 100% !important;
  }

   .CodeMirror-vscrollbar {
     display: none;
   }

  .CodeMirror-scroll {
    display: flex;
  }
  .CodeMirror-sizer {
    /* position: absolute; */
    overflow: scroll !important;
    max-width: 100% !important;
    max-height: 100% !important;
    width: 100px !important;
    /* top: 100px !important; */
    margin-left: 30px !important;
  }

</style>
