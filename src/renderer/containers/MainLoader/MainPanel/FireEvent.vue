<template>
  <div class="test-component">
    <div @click="deleteItem" class='delete'>X</div>

    <form action class="eventForm">
      <div class="row">
        <div class="event-input">
          <span>Event:</span>
          <input type="text" @input="saveFireEvent" v-model="eventType" class="eventInput" />
        </div>

        <div class="selector-input">
          <span>Selector:</span>
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
      </div>
    </form>
    <!-- <button @click="deleteItem" class="deleteEventButton">Delete Event</button> -->
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
  border-bottom: 1px white solid;
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
  /* border: 1px solid white; */
}

.event-input, .selector-input {
  display: flex;
  /* border: 1px lightblue solid; */
  width: 250px;
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

span {
  margin-right: 15px;
}

.delete {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 5px;
}

.delete:hover {
  outline: none;
  color: rgb(85, 201, 240);
  border-color: rgb(85, 201, 240);
  cursor: pointer;
}
</style>
