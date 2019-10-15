<template>
  <div class="main-header">
    <button class="button saveCurrentButton" @click="generateTestCode">
      <i class="far fa-save fa-2x"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  methods: {
    generateTestCode() {
      this.$store.dispatch("generateTestCode");
      this.$eventHub.$emit("test-content-set");
    }
  }
};
</script>

<style>
.main-header {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  width: 35%;
}
.saveCurrentButton {
  border: none;
  background-color: #3c3c3c;
  color: #00e24d;
  height: 100%;
  width: 15%;
}
</style>
