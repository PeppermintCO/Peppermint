<template>
  <div class="mainPanel-container">
    <div class="componentName">
      <div id="componentInputTitle">Component Name</div>
      <input
        class="input componentNameInput"
        name="componentName"
        type="text"
        v-model="componentName"
        @input="saveComponentName"
      />
    </div>
    <div class="testForms">
      <button @click="addTest()" class="button addTestButton">Add Test</button>
      <div class="tests" v-for="(test, index) in tests" :key="index">
        <component v-bind:id="index" :is="test" :tests="tests" :testIndex="index"></component>
      </div>
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
      console.log(this.$store.getters.showTestList);
      this.tests.push("CreateTest");
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
  width: 50%;
  height: 100%;
  border-left: 1px #3c3c3c solid;
  border-right: 1px #3c3c3c solid;
  color: rgba(255, 255, 255, 0.742);
  display: flex;
  flex-direction: column;
  text-align: center;
}
.componentName {
  padding: 2%;
  margin-top: 2%;
  border-bottom: 1px solid #3c3c3c;
}

.componentNameInput {
  margin-top: 1%;
  width: 70%;
  height: 6%;
  align-self: center;
  background-color: #3c3c3c;
  border: 1px solid #656565;
  /* border-radius: 20px; */
  padding-left: 10px;
  color: white;
}
.componentNameInput:focus {
  outline: none !important;
  border-color: #00e24d;
}
.testForms {
  overflow: scroll;
  display: flex;
  flex-direction: column;
  height: 94%;
  padding: 2%;
}
.addTestButton {
  outline: none;
  min-height: 30px;
  width: 20%;
  height: 30px;
  border: 1px solid #7b7a7a;
  background-color: #232323;
  border-radius: 12px;
  color: #838383;
}
.addTestButton:hover {
  outline: none;
  color: #00e24d;
  border-color: #00e24d;
}
.tests {
  /* flex-basis: 40%; */
  min-height: 40%;
  margin-top: 3%;
  height: 40%;
  border: 1px solid rgb(41, 41, 41);
  border-radius: 30px;
  box-shadow: 0 0 10px rgb(18, 18, 18);
  overflow: scroll;
  padding: 1%;
}
</style>

