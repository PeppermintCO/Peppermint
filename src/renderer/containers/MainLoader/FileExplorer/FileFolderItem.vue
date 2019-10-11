<template>
  <ul v-if="files.length > 0">
    <li :style="indent" @click="toggleChildren">{{ fileName }}</li>
    <file-folder
       v-if="showChildren"
       v-for="(file, index) in files"
       :key="index" 
       :fileName="file.fileName"
       :files="file.files"
       :depth="depth + 1" 
        >
    </file-folder>
  </ul>
  <ul v-else>
    <li :style="indent" @dblclick="displayFileContent">{{ fileName }}</li>
  </ul>
</template>

<script>
export default {
  name: 'file-folder',
  props: ['fileName', 'files', 'depth'],
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
    displayFileContent() {
      console.log('diplaying your contents!!!!!!')
    }
  }
}
</script>



