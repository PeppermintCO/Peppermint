<template>
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
    }
  }
</script>

<style>
  .rightPanel-container {
    border: 1px red solid;
    width: 100%;
    height: 100%;
  }
  #editor-container {
    width:100%;
    height:100%;
    border: 1px blue solid;
  }

</style>