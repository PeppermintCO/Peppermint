<template>
  <div class="test-component">
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
  </div>
</template>

<script>
export default {
  name: "FireEvent",
  props: ["testId"],
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
    }
  }
};
</script>
