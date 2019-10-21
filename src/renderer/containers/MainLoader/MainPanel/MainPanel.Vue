<template>
  <div class="mainPanel-container">
    <div class="componentName">
      <div class="componentInputContainer">
        <p id="componentInputTitle">Component Name</p>
        <input
          class="input componentNameInput"
          name="componentName"
          type="text"
          v-model="componentName"
          @input="saveComponentName"
        />
      </div>
      <button class="button saveCurrentButton" @click="generateTestCode">
         <!-- <i class="far fa-save fa-2x"></i> -->
         Display Test
       </button>
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
    },
    generateTestCode() {
      this.$store.dispatch("generateTestCode");
      //emit 'test-content-set' to RightPanel.vue
      this.$eventHub.$emit("test-content-set");
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
  /* margin-left: 20px; */
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* flex-direction: column; */
  padding: 2%;
  border-bottom: 1px solid #3c3c3c;
  height: 12%;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2px;
}

.componentNameInput {
  margin-left: 20px;
  margin-top: 1%;
  width: 70%;
  height: 38%;
  align-self: center;
  background-color: #3c3c3c;
  border: 1px solid #656565;
  border-radius: 12px;
  padding-left: 12px;
  color: white;
  font-size: 13px;
}
.componentNameInput:focus {
  outline: none !important;
  border-color: rgb(85, 201, 240);
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
  color: rgb(85, 201, 240);
  border-color: rgb(85, 201, 240);
}
.tests {
  /* flex-basis: 40%; */
  /* min-height: 45%; */
  margin-top: 3%;
  /* height: 40%; */
  border: 1px solid rgb(41, 41, 41);
  border-radius: 30px;
  box-shadow: 0 0 10px rgb(18, 18, 18);
  /* overflow: scroll; */
  
  padding: 1%;
}

.saveCurrentButton {
  /* border: 1px red solid; */
  border: none;
  border-radius: 30px;
  width: 20%;
  /* background-color: #232323; */
  /* color: rgb(85, 201, 240); */
  height: 20px;
  align-self: flex-start;
  /* margin-left: 30px;
  width: 20px; */
  /* margin-left: %; */
}

.saveCurrentButton:hover {
  cursor: pointer;
  background-color: lightblue;
  color: black;
}

.componentInputContainer {
  display: flex;
  width: 70%;
}

#componentInputTitle {
  width: 70%
}


/* .test-component {
  height: 12%;
} */
</style>

