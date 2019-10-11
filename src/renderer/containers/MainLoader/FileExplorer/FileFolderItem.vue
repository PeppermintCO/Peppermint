<template>
  <ul>
    <li>{{ fileName }}</li>
    <file-folder v-for="(file, index) in files" :key="index" :fileName="file.fileName" :files="file.files">

    </file-folder>
  </ul>
</template>

<script>
export default {
  name: 'file-folder',
  props: ['fileName', 'files'],
}
</script>