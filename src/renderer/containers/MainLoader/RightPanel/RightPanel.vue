<template>
<<<<<<< HEAD
  <div class="rightPanel-container">
    content...: {{displayedContent}}
    <div id="editor-container">


    </div>
  </div>
</template>

<script>
  function requireMonacoEditor (amdRequire, thisEditor) {
    console.log('in requireMonacoEditor')
    var path = require('path')
    function uriFromPath (_path) {
      var pathName = path.resolve(_path).replace(/\\/g, '/')

      if (pathName.length > 0 && pathName.charAt(0) !== '/') {
        pathName = '/' + pathName
      }

      return encodeURI('file://' + pathName)
    }

    thisEditor.amdRequire.config({
      baseUrl: uriFromPath(path.join(__dirname, '../../../../../node_modules/monaco-editor/min/'))
    })

    // workaround monaco-css not understanding the environment
    self.module = undefined

    // workaround monaco-typescript not understanding the environment
    self.process.browser = true

    thisEditor.amdRequire(['vs/editor/editor.main'], function () {
      this.monaco.editor.create(document.getElementById('editor-container'), {
        value: thisEditor.displayedContent || '//Open File Content',
        language: 'javascript'
      })
      // thisEditor.monaco = this.monaco

      // const editorContainer = document.getElementById('editor')
      // thisEditor.editor = this.monaco.editor.create(editorContainer, {
      //   wordWrap: 'on'
      // })

      // function updateDimensions () {
      //   thisEditor.editor.layout()
      // }

      // window.addEventListener('resize', updateDimensions)
      // editorContainer.addEventListener('resize', updateDimensions)

      // thisEditor.editorModel = this.monaco.editor.createModel(thisEditor.content, 'markdown')
      // thisEditor.editorModel.onDidChangeContent(e => {
      //   thisEditor.content = thisEditor.editorModel.getValue()
      // })

      // thisEditor.editor.onDidChangeCursorSelection(e => {
      //   thisEditor.selection = e.selection
      // })

      // thisEditor.editor.setModel(thisEditor.editorModel)
    })
  }

  function loadMonacoEditor (thisEditor) {
    if(!thisEditor.amdRequire) {
      const nodeRequire = global.require
      const loaderScript = document.createElement('script')

      loaderScript.onload = () => {
        const amdRequire = global.require
        global.require = nodeRequire

        thisEditor.amdRequire = amdRequire;
    
        requireMonacoEditor(thisEditor.amdRequire, thisEditor)
      }
      loaderScript.setAttribute('src', '../node_modules/monaco-editor/min/vs/loader.js')
      document.body.appendChild(loaderScript)
    } else {
      console.log('this.amdRequire is defined', thisEditor.amdRequire)
      requireMonacoEditor(thisEditor.amdRequire, thisEditor)
    }
  }
  // const fileContent = this.$store.getters.getFileContent;
  export default {
    data() {
      return {
        amdRequire: undefined,
        displayedContent: this.$store.getters.getFileContent,
      }
    },
    created() {
      this.$eventHub.$on('update-editor', this.updateContent)
    },
    mounted: function() {
      loadMonacoEditor(this);
    },
    methods: {
      updateContent() {
        console.log('hi');
        console.log(this.$store.getters.getFileContent);
        this.displayedContent = this.$store.getters.getFileContent;
        loadMonacoEditor(this);
      }
=======
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
        lineNumbers: false,
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
    // mounted() {
    //   console.log('this is current codemirror object', this.codemirror)
    //   // you can use this.codemirror to do something...
    // },
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
>>>>>>> a0845a392c5f7b6c41dfcddaa8a2fe189e585d05
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