<template>
  <div class="test-component">
    <form action>
      Event Type
      <input type="text" @input="saveTestItem" v-model="eventType" />
      Selector
      <select name="query-variant" @change="saveTestItem" v-model="selectorType">
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
    saveTestItem() {
      if (this.$store.state.testList.hasOwnProperty(this.testId)) {
        if (
          !this.$store.state.testList[this.testId].hasOwnProperty("testItems")
        )
          this.$store.state.testList[this.testId]["testItems"] = {};
      } else {
        this.$store.state.testList[this.testId] = {
          testItems: {}
        };
      }

      if (
        !this.$store.state.testList[this.testId]["testItems"].hasOwnProperty(
          this._uid
        )
      ) {
        this.$store.state.testList[this.testId]["testItems"][this._uid] = {};
      }

      this.$store.state.testList[this.testId]["testItems"][this._uid][
        "eventType"
      ] = this.eventType;

      this.$store.state.testList[this.testId]["testItems"][this._uid][
        "selectorType"
      ] = this.selectorType;
      console.log(this.$store.state.testList);
    }
  }
};
</script>
