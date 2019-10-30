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
        <button class="tooltip tipComponent">
          i
          <span class="toolTipText">Name of component to test</span>
        </button>
      </div>
      <button class="button saveCurrentButton" @click="generateTestCode">Display Test</button>
    </div>
    <div class="testForms">
      <div class="button addPropsAndTests">
        <button @click="addTest()" class="button addTestButton">Add Test</button>
        <button class="addProp" @click="addProps()">Add Props</button>
      </div>
      <div class="props" v-for="(props,indexForProps) in propsList" :key="indexForProps">
        <div class="componentName">
          <div>
            Key:
            <input
              class="inputProps"
              @input="addPropKey(indexForProps)"
              v-model="propKeys[indexForProps]"
            />
            <button class="tooltip">
              i
              <span class="toolTipText">Name of prop</span>
            </button>
          </div>
          <div class='prop-value'>
            Value:
            <input
              class="inputProps"
              @input="addPropValue(indexForProps)"
              v-model="propValues[indexForProps]"
            />
            <button class="tooltip variableTip">
              i
              <span class="toolTipText">Value of prop</span>
            </button>
          </div>
          <span class="deleteProp" @click="deleteProps(indexForProps)">X</span>
        </div>
      </div>
      <div class="tests" v-for="(test, index) in tests" :key="index+100">
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
      componentName: "",
      propsList: [],
      propKeys: [],
      propValues: []
    };
  },
  methods: {
    addTest() {
      // console.log(this.$store.getters.showTestList);
      this.tests.push("CreateTest");
    },
    deleteTest(index) {},
    deleteTestFromStore(testId) {
      // console.log(testId);
    },
    saveComponentName() {
      // console.log(this.$store.getters.showComponentName);
      this.$store.dispatch("saveComponentName", this.componentName);
    },
    generateTestCode() {
      this.$store.dispatch("generateTestCode");
      //emit 'test-content-set' to RightPanel.vue
      this.$eventHub.$emit("test-content-set");
    },
    addProps() {
      this.propsList.push({});
      this.propKeys.push("");
      this.propValues.push("");
      this.$store.dispatch("addProps");
    },
    deleteProps(id) {
      this.propsList.splice(id, 1);
      this.propKeys.splice(id, 1);
      this.propValues.splice(id, 1);
      this.$store.dispatch("deleteProps");
    },
    addPropKey(id) {
      // this.propsList.
      // console.log(this.$store.getters.getPropsList);
      console.log(this.propKeys[id]);
      this.$store.dispatch("addKeyToProp", {
        id: id,
        propKey: this.propKeys[id]
      });
    },
    addPropValue(id) {
      this.$store.dispatch("addValueToProp", {
        id: id,
        propValue: this.propValues[id]
      });
    },
    toolTipDefault(event) {
      event.preventDefault;
    }
  },
  updated() {
    console.log("hi");
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
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2%;
  border-bottom: 1px solid #3c3c3c;
  height: 12%;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2px;
}

.componentNameInput {
  /* margin-left: 40px; */
  /* margin-top: 1%; */
  width: 70%;
  height: 38%;
  align-self: center;
  background-color: #3c3c3c;
  border: 1px solid #656565;
  border-radius: 4px;
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
  height: 94%;
  padding: 2%;
}
.addPropsAndTests {
  align-self: flex-start;
  height: 30px;
  width: 210px;
  display: flex;
  justify-content: space-between;
  background-color: #232323;
}
.addProp {
  outline: none;
  min-height: 30px;
  width: 100px;
  height: 30px;
  border: 1px solid #7b7a7a;
  background-color: #232323;
  border-radius: 12px;
  color: #838383;
}
.addProp:hover {
  outline: none;
  color: rgb(85, 201, 240);
  border-color: rgb(85, 201, 240);
}
.props {
  margin-top: 10px;
  padding-left: 55px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.inputProps {
  background-color: #3c3c3c;
  border: 1px solid #656565;
  color: white;
  width: 150px;
  height: 20px;
  border-radius: 4px;
  /* padding-left: 1%; */
  outline: none;
  margin-left: 10px;
}

.prop-value {
  padding-left: 50px;
}

.deleteProp {
  outline: none;
  width: 40px;
  height: 20px;
  background-color: #232323;
  color: #838383;
  font-size: 15px;
}
.deleteProp:hover {
  outline: none;
  color: rgb(85, 201, 240);
  border-color: rgb(85, 201, 240);
}
.addTestButton {
  outline: none;
  min-height: 30px;
  width: 100px;
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
  margin-top: 3%;
  border: 1px solid rgb(41, 41, 41);
  border-radius: 30px;
  box-shadow: 0 0 10px rgb(18, 18, 18);
  padding: 1%;
}

.saveCurrentButton {
  border: none;
  border-radius: 30px;
  width: 20%;
  height: 20px;
  align-self: flex-start;
}

.saveCurrentButton:hover {
  cursor: pointer;
  background-color: dodgerblue;
  color: black;
}

.componentInputContainer {
  display: flex;
  width: 70%;
}

#componentInputTitle {
  width: 70%;
}
/* tooltips */
.tipComponent {
  margin-left: 10px;
  margin-top: 2px;
  outline: none;
  width: 20px !important;
}
.tooltip {
  height: 15px;
  width: 15px;
  border: 1px solid rgb(92, 92, 92);
  border-radius: 50%;
  background: transparent;
  color: rgb(92, 92, 92);
  outline: none;
  position: relative;
  /* text-align: center; */
}
.tooltip .toolTipText {
  visibility: hidden;
  position: absolute;
  width: 180px;
  background-color: #555;
  color: #fff;
  text-align: center;
  padding: 2px;
  border-radius: 5px;
  z-index: 1;
  opacity: 0;
  transition: opacity 0.6s;
}
.tooltip:hover .toolTipText {
  visibility: visible;
  opacity: 1;
  margin-bottom: 5px;
}
.tooltip .toolTipText {
  width: 120px;
  bottom: 100%;
  left: 50%;
  margin-left: -60px;
}
.tooltip .toolTipText:after {
  content: " ";
  position: absolute;
  top: 100%; /* At the bottom of the tooltip */
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}
</style>
