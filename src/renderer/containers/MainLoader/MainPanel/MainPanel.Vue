<template>
  <div class="mainPanel-container">
    <p>Im inside mainPanel</p>
    <button @click="addTest()">Add Test</button>
    <br />Component Name
    <input
      name="componentName"
      type="text"
      v-model="componentName"
      @input="saveComponentName"
    />
    <div v-for="(test, index) in tests" :key="index">
      <component v-bind:id="index" :is="test" :tests="tests" :index="index"></component>
    </div>
  </div>
</template>

<script>
import CreateTest from "./CreateTest.vue";

export default {
  name: "MainPanel",
  components: {
    CreateTest
  },
  props: ["index"],
  data() {
    return {
      tests: ["CreateTest"],
      componentName: ""
    };
  },
  methods: {
    addTest() {
      this.tests.push("CreateTest");

      this.$store.state.testLength += 1;
    },
    deleteTest(index) {},
    deleteTestFromStore(testId) {
      console.log(testId);
    },
    saveComponentName() {
      console.log(this.$store.getters.showComponentName);
      this.$store.dispatch("saveComponentName", this.componentName);
    }
  }
};
</script>

<style>
.mainPanel-container {
  grid-area: 2 / 2 / 6 / 3;
  border: 1px red solid;
  width: 50%;
  height: 100%;
}
</style>
