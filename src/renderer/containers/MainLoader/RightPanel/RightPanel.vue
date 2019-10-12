<template>
  <div class= "mainPanel-container" >
    <div id="editor-container">

    </div>
  </div>
</template>

<script>
  function loadMonacoEditor () {
    const nodeRequire = global.require

    const loaderScript = document.createElement('script')

    loaderScript.onload = () => {
      const amdRequire = global.require
      global.require = nodeRequire

      var path = require('path')

      function uriFromPath (_path) {
        var pathName = path.resolve(_path).replace(/\\/g, '/')

        if (pathName.length > 0 && pathName.charAt(0) !== '/') {
          pathName = '/' + pathName
        }

        return encodeURI('file://' + pathName)
      }

      amdRequire.config({
        baseUrl: uriFromPath(path.join(__dirname, '../../../../../node_modules/monaco-editor/min/'))
      })

      // workaround monaco-css not understanding the environment
      self.module = undefined

      // workaround monaco-typescript not understanding the environment
      self.process.browser = true

      amdRequire(['vs/editor/editor.main'], function () {
        this.monaco.editor.create(document.getElementById('editor-container'), {
          value: [
            'function x() {',
            '\tconsole.log("Hello world!");',
            '}'
          ].join('\n'),
          language: 'javascript'
        })
      })
    }

    loaderScript.setAttribute('src', '../node_modules/monaco-editor/min/vs/loader.js')
    document.body.appendChild(loaderScript)
  }
 
  export default {
    mounted: function() {
      loadMonacoEditor(this);
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