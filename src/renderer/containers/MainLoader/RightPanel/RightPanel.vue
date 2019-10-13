<template>
  <codemirror v-model="code" :options="cmOptions"></codemirror>
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
        lineNumbers: true,
        line: true,
        // more codemirror options,  codemirror ...
      }
    }
  },
  created() {
    this.$eventHub.$on('file-content-set', this.onCmCodeChange)
  },
  beforeDestroy() {
    this.$eventHub.$off('file-content-set')
  },
    mounted() {
      console.log('this is current codemirror object', this.codemirror)
      // you can use this.codemirror to do something...
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
    onCmCodeChange() {
      console.log('this is new code', this.$store.getters.getFileContent)
      this.code = this.$store.getters.getFileContent
    },
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
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px red solid;
    width: 100%;
    height: 100%;
  }

  .CodeMirror cm-s-base16-light {
    height:100%;
    width: 100%;
  }

</style>