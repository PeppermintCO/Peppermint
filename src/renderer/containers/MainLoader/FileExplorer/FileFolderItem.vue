<template>
  <ul v-if="files.length > 0">
    <li :style="indent" @click="toggleChildren">{{ fileName }}</li>
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
    <li :style="indent" @dblclick="displayFileContent(filePath)">{{ fileName }}</li>
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
      showChildren: false
    }
  },
  computed: {
    indent() {
      return { 
        transform: `translate(${this.depth * 20}px)`,
        "list-style": `none`
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
        console.log(this.$store.getters.getFileContent)
      })

    }
  }
}
</script>



