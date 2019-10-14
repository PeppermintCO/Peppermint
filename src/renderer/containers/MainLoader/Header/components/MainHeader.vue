<template>
  <div class="main-header">
    <button class="button saveCurrentButton" 
      :disabled="hasTestInput" 
      @click="displayTestFile">Save Current Test
    </button>
    {{hasTestInput}}
  </div>  
</template>

<script>
export default {
  methods: {
    displayTestFile() {
      this.$eventHub.$emit('test-content-set');
    }
  },
  computed: {
    hasTestInput() {
      return Object.keys(this.$store.getters.showTestList()).length === 0;
    }
  },
  watch: {
    hasTestInput(newState, oldState) {
      console.log(`Do you have input into test? ${newState}`);
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