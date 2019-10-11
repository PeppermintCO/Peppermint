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
      <component v-bind:id="index" :is="test"></component>
      <span :id="index" @click="deleteTest(index)">X</span>
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
      // this.$store.state.testList.push(newTest);
      this.tests.push("CreateTest");

      this.$store.state.testLength += 1;
      // console.log(this.$store.state.testLength);
      // console.log(this.$store.state.componentName);
    },
    deleteTest(index) {
      this.tests.splice(index, 1);
    },
    saveComponentName() {
      this.$store.state.componentName = this.componentName;
      console.log(this.$store.state.componentName);
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
