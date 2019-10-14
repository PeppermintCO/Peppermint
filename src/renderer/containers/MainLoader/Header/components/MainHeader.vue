<template>
  <div class="main-header">
    <button class="button saveCurrentButton" @click="displayTestFile">Save Current Test
    </button>
    <!-- {{disableButton}} -->
  </div>  
</template>

<script>
export default {
  // data() {
  //   return {
  //     disableButton: true
  //   }
  // },
  methods: {
    displayTestFile() {
      this.$eventHub.$emit('test-content-set');
    }
  },
  // computed: {
  //   hasTestInput() {
  //     return Object.keys(this.$store.getters.showTestList).length === 0;
  //   }
  // },
  // watch: {
  //   hasTestInput(newState, oldState) {
  //     console.log(`Do you have input into test? ${newState}`);
  //     if(newState === false) {
  //       this.disableButton = false;
  //     }
  //   }
  // }
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