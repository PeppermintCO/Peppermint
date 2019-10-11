<template>
  <ul>
    <li :style="indent">{{ fileName }}</li>
    <file-folder
       v-for="(file, index) in files"
       :key="index" 
       :fileName="file.fileName"
       :files="file.files"
       :depth="depth + 1" 
        >

    </file-folder>
  </ul>
</template>

<script>
export default {
  name: 'file-folder',
  props: ['fileName', 'files', 'depth'],
  computed: {
    indent() {
      return { 
        transform: `translate(${this.depth * 50}px)`,
        "list-style": `none`
        }
    }
  }
}
</script>



