<template>
  <div class="test-name test-component">
    <form action>
      Test Name
      <input name="testName" type="text" v-model="testName" @input="saveTestName" />
      <button @click="addQuery">Add Query</button>
      <button @click="addEvent">Add Event</button>
      <div v-for="(testItem, index) in testItems" :key="index">
        <component :is="testItem"></component>
        <span :id="index" @click="deleteItem(index)">
          <button>X</button>
        </span>
      </div>
    </form>
    <span @click="deleteTest(_uid)">
      <button>Delete Test</button>
    </span>
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
  props: ["tests", "index"],
  mounted() {
    this.$store.dispatch("addTest", this._uid);
    console.log(this.$store.getters.showTestList);
  },
  data() {
    return {
      testItems: ["Query"],
      testName: ""
    };
  },
  methods: {
    deleteTest() {
      this.tests.splice(this.index, 1);
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
    deleteItem(index) {
      this.testItems.splice(index, 1);
    },
    saveTestName() {
      this.$store.dispatch("saveTestName", {
        testName: this.testName,
        testId: this._uid
      });
    }
  }
};
</script>

<style scoped>
</style>
