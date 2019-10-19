<template>
  <ul v-if="files.length > 0">
    <li :style="indent" :class="{ active: hover }" @mouseover="hover = true" @mouseleave="hover = false" @click="toggleChildren">{{ fileName }}</li>
    <file-folder
       v-for="(file, index) in files"
       v-if="showChildren"
       :key="index" 
       :fileName="file.fileName"
       :files="file.files"
       :depth="depth + 1" 
       :filePath="file.filePath"
        >
    </file-folder>
  </ul>
  <ul v-else>
    <li :style="indent" :class="{ active: hover }" @mouseover="hover = true" @mouseleave="hover = false" @dblclick ="displayFileContent(filePath)">{{ fileName }}</li>
  </ul>
</template>

<script>
const { remote } = window.require('electron');
const electronFs = remote.require('fs');

export default {
  name: 'file-folder',
  props: ['fileName', 'files', 'depth', 'filePath'],
  data() {
    return {
      showChildren: false,
      hover: false
    }
  },
  computed: {
    indent() {
      return { 
        transform: `translate(${this.depth * 20}px)`,
        "list-style": `none`,
        "color": 'skyblue',
        'padding-top': '3px',
        'padding-bottom': '3px',
        'letter-spacing': '2px',
        'word-spacing': '3px',
        'font-family': '"Ubuntu", sans-serif',
        'font-size': '13.5px',
        }
    }
  },
  methods: {
    toggleChildren() {
      this.showChildren = !this.showChildren;
    },
    displayFileContent(filePath) {
      this.$store.dispatch('setSelectedFilePath', filePath)
      electronFs.readFile(filePath, 'utf-8', (err, data) => {
        if (err) {
          console.log(err);
          return;
        }
        this.$store.dispatch('setFileContent', data);
        console.log(typeof this.$store.getters.getFileContent)
        this.$eventHub.$emit('file-content-set')
      })

    }
  }
}
</script>

<style>
  .active {
    background-color: rgb(90, 154, 175);
    cursor: pointer;
    color: black !important; 
  }
</style>

