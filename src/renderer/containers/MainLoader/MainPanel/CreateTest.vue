<template>
  <div class="test-name test-component">
    <form action class="inputForm">
      <div class="testNameWithButtons">
        <div class="buttons addEventAndQuery">
          <button @click="addQuery" class="button addQueryButton">Add Query</button>
          <button @click="addEvent" class="button addEventButton">Add Event</button>
        </div>Test Name
        <div style="width: 100%; height: 100%">
          <input
            name="testName"
            type="text"
            v-model="testName"
            @input="saveTestName"
            id="testNameInputField"
          />
        </div>
      </div>
      <div v-for="(testItem, index) in testItems" :key="index" class="queryOrEventForms">
        <component
          :is="testItem"
          v-bind:testId="_uid"
          v-bind:testItems="testItems"
          v-bind:testItemIndex="index"
        ></component>
      </div>
      <span @click="deleteTest()">
        <button class="deleteTestButton">Delete Test</button>
      </span>
    </form>
  </div>
</template>

<script>
import Query from "./Query.vue";
import FireEvent from "./FireEvent.vue";

export default {
  name: "CreateTest",
  components: {
    Query,
    FireEvent
  },
  props: ["tests", "testIndex"],
  mounted() {
    this.$store.dispatch("addTest", this._uid);
  },
  data() {
    return {
      testItems: ["Query"],
      testName: ""
    };
  },
  methods: {
    deleteTest() {
      this.tests.splice(this.testIndex, 1);
      this.$store.dispatch("deleteTest", this._uid);
    },
    addQuery(e) {
      e.preventDefault();
      this.testItems.push("Query");
    },
    addEvent(e) {
      e.preventDefault();
      this.testItems.push("FireEvent");
    },
    saveTestName() {
      this.$store.dispatch("saveTestName", {
        testName: this.testName,
        testId: this._uid
      });

      console.log(this.$store.state.testList);
    }
  }
};
</script>

<style scoped>
.test-component {
  height: 100%;
}
.test-name {
  padding: 10px;
}
.testNameWithButtons {
  /* position: relative; */
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  /* height: 40%; */
  /* bottom: 4%; */
}
.inputForm {
  height: 100%;
}
#testNameInputField {
  height: 40%;
  width: 50%;
  outline: none;
  border-radius: 12px;
  padding-left: 15px;
  background-color: #3c3c3c;
  border: 1px solid #656565;
  color: rgb(201, 198, 198);
  font-size: 13px;
}
#testNameInputField:focus {
  outline: none !important;
  border-color: #00e24d;
}
.addEventAndQuery {
  /* height:  */
  min-width: 278.08px;
  width: 50%;
  align-self: flex-end;
  display: flex;
  flex-direction: row;
  justify-self: flex-end;
  align-items: flex-end;
}
.button {
  outline: none;
  align-self: flex-end;
  min-height: 20px;
  width: 25%;
  height: 20px;
  border: 1px solid #7b7a7a;
  background-color: #232323;
  border-radius: 12px;
  color: #838383;
}
.button:hover {
  outline: none;
  color: #00e24d;
  border-color: #00e24d;
}
.addQueryButton {
  margin-left: 120px;
}
.queryOrEventForms {
  height: 50%;
}
.deleteTestButton {
  outline: none;
  min-height: 20px;
  width: 25%;
  height: 20px;
  border: 1px solid #7b7a7a;
  background-color: #232323;
  border-radius: 12px;
  color: #838383;
}
.deleteTestButton:hover {
  outline: none;
  color: #00e24d;
  border-color: #00e24d;
}
</style>
