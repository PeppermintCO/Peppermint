<template>
  <div class="rightPanelContainer">
    <ShowWebsite v-if="this.$store.getters.getShowWebsite" />
    <codemirror v-else v-model="code" :options="cmOptions"></codemirror>
  </div>
</template>

<script>
// require component
import { codemirror } from "vue-codemirror";
// language js
import "../../../../../node_modules/codemirror/mode/javascript/javascript.js";
// theme css
import "../../../../../node_modules/codemirror/theme/base16-light.css";
import ShowWebsite from "./ShowWebsite.vue";
// more codemirror resources
// import 'codemirror/some-resource...'

export default {
  data() {
    return {
      code: "//Select a file to display...",
      cmOptions: {
        // codemirror options
        tabSize: 4,
        mode: "text/javascript",
        theme: "base16-light",
        lineNumbers: false,
        line: true
        // more codemirror options,  codemirror ...
      }
    };
  },
  created() {
    this.$eventHub.$on("file-content-set", this.onCmFileContentChange);
    this.$eventHub.$on("test-content-set", this.onCmTestContentChange);
  },
  beforeDestroy() {
    this.$eventHub.$off("file-content-set");
    this.$eventHub.$off("test-content-set");
  },
  components: {
    codemirror,
    ShowWebsite
  },
  methods: {
    onCmReady(cm) {
      console.log("the editor is readied!", cm);
    },
    onCmFocus(cm) {
      console.log("the editor is focus!", cm);
    },
    onCmCodeChange() {
      console.log("this is new code", this.$store.getters.getFileContent);
      this.code = this.$store.getters.getFileContent;
    },
    onCmFileContentChange() {
      // console.log('this is new file content code', this.$store.getters.getFileContent)
      console.log("fileContentChange executed");
      this.code = this.$store.getters.getFileContent;
    },
    onCmTestContentChange() {
      console.log("testContentChange executed");
      console.log(this.$store.getters.getTestContent, "<-----");
      // console.log('this is new test content code', this.$store.getters.getTestContent)
      this.code = this.$store.getters.getTestContent;
    }
  },
  computed: {
    codemirror() {
      return this.$refs.myCm.codemirror;
    }
  }
};
</script>

<style>
.rightPanelContainer {
  width: 50%;
  min-width: 40%;
}

.vue-codemirror {
  background-color: #1b1c1b !important;
  overflow: scroll;

  width: 100%;
  height: 100%;
}

.cm-s-base16-light {
  background-color: #1b1c1b !important;
}

.CodeMirror {
  height: 100%;
  width: 100%;
}

/* .CodeMirror-vscrollbar div, */
.CodeMirror cm-s-base16-light,
.CodeMirror-code {
  background-color: #1b1c1b !important;
  height: 100%;
  width: 100%;
}
.CodeMirror-code {
  color: #0d983b;
  font-size: 16px;
}

.CodeMirror-vscrollbar {
  max-height: 0%;
}

.CodeMirror-scroll {
  display: flex;
  height: 100%;
  width: 100%;
}
.CodeMirror-sizer {
  overflow: scroll !important;
  width: 100%;
  height: 100% !important;
  bottom: 100px !important;
  margin-left: 30px !important;
  padding: 0 3% 3% 3%;
}
</style>
