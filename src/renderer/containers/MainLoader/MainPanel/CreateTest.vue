<template>
  <div class="test-name test-component">
    <form action>
      Test Name
      <input name="testName" type="text" v-model="testName" @input="saveTestName" />
      <button @click="addQuery">Add Query</button>
      <button @click="addEvent">Add Event</button>
      <div v-for="(testItem, index) in testItems" :key="index">
        <component :is="testItem" v-bind:testId="_uid"></component>
        <span :id="index" @click="deleteItem(index)">X</span>
      </div>
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
  data() {
    return {
      testItems: ["Query"],
      testName: ""
    };
  },
  methods: {
    addQuery(e) {
      e.preventDefault();
      this.testItems.push("Query");
    },
    addEvent(e) {
      e.preventDefault();
      this.testItems.push("FireEvent");
    },
    deleteItem(index) {
      this.testItems.splice(index, 1);
    },
    saveTestName() {
      if (this.$store.state.testList.hasOwnProperty(this._uid)) {
        this.$store.state.testList[this._uid]["testName"] = this.testName;
      } else {
        this.$store.state.testList[this._uid] = {
          testName: this.testName
        };
      }
    }
  }
};
</script>

<style scoped>
</style>
