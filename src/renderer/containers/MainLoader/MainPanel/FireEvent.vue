<template>
  <div class="test-component">
    <form action class="eventForm">
      Event Type:
      <div class="inputAndDropDown">
        <input type="text" @input="saveFireEvent" v-model="eventType" class="eventInput" />
        Selector:
        <select
          name="query-variant"
          @change="saveFireEvent"
          v-model="selectorType"
          class="query-variant"
        >
          <option
            v-for="(selector, index) in this.$store.state.testList[testId]['testItems']"
            :key="index"
          >{{selector['selectorName']}}</option>
        </select>
      </div>
      <span @click="deleteItem"></span>
    </form>
    <button class="deleteEventButton">Delete Event</button>
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
<style scoped>
.test-component {
  margin-top: 3%;
  /* width: 1em; */
  height: 1em;
}
.eventForm {
  margin-left: 1.5%;
  height: 1em;
  display: flex;
  /* justify-content: ; */
  align-items: center;
}
.inputAndDropDown {
  width: 80%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 1em;
}
.query-variant {
  width: 10em;
  height: 40%;
  /* margin-left: 50%; */
  font-size: 12px;
  background-color: #3c3c3c;
  border: 1px solid #656565;
  color: white;
  border-radius: 12px;
  outline: none;
}
.eventInput {
  /* position: relative;
  top: 2px; */
  background-color: #3c3c3c;
  border: 1px solid #656565;
  border-radius: 6px;
  color: white;
  height: 17px;
  padding-left: 1%;
  outline: none;
  margin-left: 2%;
  margin-right: 3%;
}
.eventInput:focus {
  outline: none;
  border-color: rgb(85, 201, 240);
}
.deleteEventButton {
  margin-top: 2%;
  height: 20px;
  width: 30%;
  border: 1px solid #7b7a7a;
  background-color: #232323;
  border-radius: 12px;
  color: #838383;
}
.deleteEventButton:hover {
  outline: none;
  color: rgb(85, 201, 240);
  border-color: rgb(85, 201, 240);
}
</style>
