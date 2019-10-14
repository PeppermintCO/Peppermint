<template>
  <div class="main-header">
    <button class="button displayTestButton" @click='generateTestCode'>Display Test Code</button>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  methods: {
    generateTestCode() {
      this.$store.dispatch("generateTestCode");
      this.$eventHub.$emit('test-content-set');
    }
  }
}
</script>

<style>
 .main-header {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px red dotted;
    height: 100%;
    width: 40%;
  }
</style>
