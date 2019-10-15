<template>
  <div class="test-component">
    Event
    <form action>
      Event Type
      <input type="text" @input="saveFireEvent" v-model="eventType" />
      Selector
      <select name="query-variant" @change="saveFireEvent" v-model="selectorType">
        <option
          v-for="(selector, index) in this.$store.state.testList[testId]['testItems']"
          :key="index"
        >{{selector['selectorName']}}</option>
      </select>
    </form>
    <span @click="deleteItem">
      <button>X</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "FireEvent",
  props: ["testId", "testItems", "testItemIndex"],
  data() {
    return {
      eventType: "",
      selectorType: ""
    };
  },
  methods: {
    saveFireEvent() {
      this.$store.dispatch("saveFireEvent", {
        eventType: this.eventType,
        selectorType: this.selectorType,
        testId: this.testId,
        testItemId: this._uid
      });
    },
    deleteItem(e) {
      e.preventDefault();

      this.testItems.splice(this.testItemIndex, 1);
      this.$store.dispatch("deleteTestItem", {
        testId: this.testId,
        testItemId: this._uid
      });
    }
  }
};
</script>
