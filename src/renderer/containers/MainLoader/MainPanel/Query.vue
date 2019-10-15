<template>
  <div class="test-component">
    <form action class="query">
      <div class="selectorQueries">
        Selector Query:
        <select
          name="queryVariant"
          @change="saveTestItem"
          v-model="queryVariant"
          class="queryVariant"
        >
          <option value="getBy">getBy</option>
          <option value="findBy">findBy</option>
          <option value="queryBy">queryBy</option>
          <option value="getAllBy">getAllBy</option>
          <option value="findAllBy">findAllBy</option>
          <option value="queryAllBy">queryAllBy</option>
        </select>
      </div>

      <div class="labels">
        Matcher:
        <select
          name="queryType"
          @change="saveTestItem"
          v-model="queryType"
          class="queryType"
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
        <div>
          <input type="text" @input="saveTestItem" v-model="textToMatch" />
        </div>
      </div>
      <div>
        Query:
        <input type="text" @input="saveTestItem" v-model="selectorName" />
        <span @click="deleteItem">
          <button>X</button>
        </span>
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
    }
  }
};
</script>
<style scoped>
.query {
  height: 100%;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
.queryVariant {
  width: 30%;
  height: 20%;
  margin-left: 5%;
  font-size: 12px;
}
.selectorQueries {
  width: 80%;
  display: flex;
  justify-content: center;
}
.test-component {
  margin-top: 2%;
  height: 100%;
  border-top: 1px solid rgb(50, 50, 50);
}
.labels {
  width: 100%;
  display: flex;
  justify-content: space-around;
}
</style>
