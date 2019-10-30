<template>
  <div class="test-component">
    <div class="delete">
      <span @click="deleteItem">X</span>
    </div>

    <form action class="query">
      <div class="top-row">
        <div class="QueryInput">
          <p class="nameQuery">Name:</p>
          <input
            type="text"
            @input="saveTestItem"
            v-model="selectorName"
            class="queryInputBox"
            role="name-input"
          />
          <button class="tooltip variableTip" :disabled="true">
            i
            <span class="toolTipText">Name you will save your DOM element to</span>
          </button>
        </div>
        <div class="selectorQuery">
          <div class="queryTitle">
            <p class="variantQuery">Variant:</p>
          </div>
          <select
            name="queryVariant"
            @change="saveTestItem"
            v-model="queryVariant"
            class="queryVariant"
            role="variant-dropdown"
          >
            <option value="getBy">getBy</option>
            <option value="findBy">findBy</option>
            <option value="queryBy">queryBy</option>
            <option value="getAllBy">getAllBy</option>
            <option value="findAllBy">findAllBy</option>
            <option value="queryAllBy">queryAllBy</option>
          </select>
          <button class="tooltip variableTip" :disabled="true">
            i
            <span class="toolTipText">Search variant to find DOM element</span>
          </button>
        </div>
      </div>

      <div class="bottom-row">
        <div class="typeQueryContainer">
          <p class="typeQuery">Type:</p>
          <select
            name="queryType"
            @change="saveTestItem"
            v-model="queryType"
            class="queryType"
            role="type-dropdown"
          >
            <option value="LabelText">LabelText</option>
            <option value="PlaceholderText">PlaceholderText</option>
            <option value="Text">Text</option>
            <option value="DisplayValue">DisplayValue</option>
            <option value="AltText">AltText</option>
            <option value="Title">Title</option>
            <option value="Role">Role</option>
            <option value="TestId">TestId</option>
          </select>
          <button class="tooltip variableTip" :disabled="true">
            i
            <span class="toolTipText">Search type to find DOM element</span>
          </button>
        </div>
        <div class="matcher">
          <p class="matcherQuery">Matcher:</p>
          <input
            type="text"
            @input="saveTestItem"
            v-model="textToMatch"
            class="selectorInput"
            role="matcher-input"
          />
          <button class="tooltip variableTip" :disabled="true">
            i
            <span class="toolTipText">Matching text on your DOM element</span>
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "Query",
  props: ["testId", "testItems", "testItemIndex"],
  data() {
    return {
      selectorName: "",
      queryVariant: "",
      queryType: "",
      textToMatch: ""
    };
  },
  methods: {
    saveTestItem() {
      this.$store.dispatch("saveTestItem", {
        selectorName: this.selectorName,
        queryVariant: this.queryVariant,
        queryType: this.queryType,
        textToMatch: this.textToMatch,
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
    },
    toolTipDefault(event) {
      event.preventDefault;
    }
  }
};
</script>
<style scoped>
.test-component {
  border-bottom: 1px #7b7a7a solid;
  font-family: "Ubuntu", sans-serif;
}

.top-row,
.bottom-row {
  /* border: 1px white solid; */
  display: flex;
  justify-content: space-around;
  width: 90%;
  height: 1em;
  margin: auto;
}

.query {
  height: 6em;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}

.QueryInput {
  display: flex;
  /* border: 1px lightblue solid; */
  width: 250px;
}

.selectorQuery {
  display: flex;
  /* border: 1px lightblue solid; */
  width: 250px;
}

.typeQueryContainer {
  display: flex;
  /* border: 1px lightblue solid; */
  width: 250px;
}

.matcher {
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

input:focus {
  border-color: rgb(85, 201, 240);
}

.nameQuery,
.matcherQuery {
  margin-right: 15px;
}

.variantQuery,
.typeQuery {
  margin-right: 20px;
}

.typeQuery {
  margin-left: 3px;
}

.variantQuery {
  margin-left: 3px;
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
  cursor: pointer;
}

.variableTip {
  margin-left: 8px;
  margin-top: 3px;
}
</style>
