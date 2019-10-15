<template>
  <div class="right-header">
    <button class="Button exportButton">
      <i class="fas fa-file-download fa-2x"></i>
    </button>
  </div>
</template>

<script>
export default {};
</script>

<style>
.right-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 40%;
}
.exportButton {
  border: none;
  background-color: #3c3c3c;
  color: #00e24d;
  height: 100%;
  width: 15%;
}
</style>