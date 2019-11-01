<template>
  <div class="test-component">
    <div class="delete">
      <span @click="deleteItem">X</span>
    </div>

    <form action class="eventForm">
      <div class="row">
        <div class="event-input">
          <span>Event:</span>
          <input
            type="text"
            @input="saveFireEvent"
            v-model="eventType"
            class="eventInput"
            role="event-input"
          />
          <button class="tooltip variableTip" :disabled="true">
            i
            <span class="toolTipText">Event you will use on your DOM element</span>
          </button>
        </div>

        <div class="selector-input">
          <span>Selector:</span>
          <select
            name="selector-dropdown"
            @change="saveFireEvent"
            v-model="selectorType"
            class="selector-dropdown"
            role="selector-dropdown"
          >
            <option
              v-for="(selector, index) in this.$store.state.testList[testId]['testItems']"
              :key="index"
            >{{selector['selectorName']}}</option>
          </select>
          <button class="tooltip variableTip" :disabled="true">
            i
            <span class="toolTipText">Name of selector you will execute your event on</span>
          </button>
        </div>
      </div>
    </form>
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
  border-bottom: 1px #7b7a7a solid;
  font-family: "Ubuntu", sans-serif;
}

.eventForm {
  height: 3em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.row {
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 1em;
  margin: auto;
}

.event-input,
.selector-input {
  display: flex;
  width: 250px;
}
.selector-input {
  margin-left: 5px;
}
select {
  width: 150px;
  height: 20px;
  font-size: 12px;
  background-color: #3c3c3c;
  border: 1px solid #656565;
  color: white;
  border-radius: 12px;
  outline: none;
}

input {
  background-color: #3c3c3c;
  border: 1px solid #656565;
  border-radius: 4px;
  color: white;
  height: 103%;
  padding-left: 5%;
  outline: none;
  width: 150px;
  height: 20px;
  font-size: 12px;
}

input:focus {
  border-color: rgb(85, 201, 240);
}

.eventForm span {
  margin-right: 15px;
}

.delete {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5px;
}

.delete span:hover {
  outline: none;
  color: rgb(85, 201, 240);
  border-color: rgb(85, 201, 240);
  cursor: pointer;
}
.variableTip {
  /* margin-left: 5px;*/
  margin-top: 3px; 
}
</style>
