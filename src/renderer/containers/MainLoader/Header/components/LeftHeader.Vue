<template>
  <div class="left-header">
    <button class="button fileExplorerButton" @click="$store.dispatch('toggleFileExplorer')">File Explorer</button>
    <button class="button openProjectButton">Open Project</button>
  </div>
</template>

<script>
export default {
  
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