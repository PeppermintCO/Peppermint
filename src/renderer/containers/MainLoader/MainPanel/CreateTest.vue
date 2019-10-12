<template>
  <div class="test-name test-component">
    <form action>
      Test Name
      <input name="testName" type="text" v-model="testName" @input="saveTestName" />
      <button @click="addQuery">Add Query</button>
      <button @click="addEvent">Add Event</button>
      <div v-for="(testItem, index) in testItems" :key="index">
        <component :is="testItem" v-bind:testId='_uid' v-bind:testItems='testItems' v-bind:testItemIndex='index'></component>
      </div>
    </form>
    <span @click="deleteTest()">
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
    }
  }
};
</script>

<style scoped>
</style>
