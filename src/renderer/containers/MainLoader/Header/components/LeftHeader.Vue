<template>
  <div class="left-header">
    <button class="button fileExplorerButton" @click="$store.dispatch('toggleFileExplorer')">File Explorer</button>
    <button class="button openProjectButton" @click="openProject">Open Project</button>
  </div>
</template>

<script>
const { remote } = window.require('electron');
const electronFs = remote.require('fs');
const { dialog } = remote

 const handleOpenFolder = () => {
    const directory = dialog.showOpenDialog({
      properties: ['openDirectory'],
      filters: [
        { name: 'Javascript Files', extensions: ['js', 'jsx'] },
        { name: 'Style', extensions: ['css'] },
        { name: 'Html', extensions: ['html'] },
      ],
    });
    return directory
 }


export default {
  name: "leftHeader",
  methods: {
    openProject() {
     console.log(handleOpenFolder())
    }
  }
}
</script>

<style>
  .left-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px red dotted;
    height: 100%;
    width: 20%;
  }
</style>