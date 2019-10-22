<template>
  <div class="test-component">
    <div @click="deleteItem" class='delete'>X</div>

    <form action class="query">
      <div class="top-row">
        <div class="QueryInput">
          <p class="nameQuery">Name:</p>
          <input
            type="text"
            @input="saveTestItem"
            v-model="selectorName"
            class="queryInputBox"
          />
        </div>
        <div class="selectorQuery">
          <div class="queryTitle"><p class="variantQuery">Variant:</p></div>
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
      </div>

      <div class="bottom-row">
        <div class="typeQueryContainer">
          <p class="typeQuery">Type:</p>
          <select name="queryType" @change="saveTestItem" v-model="queryType" class="queryType">
            <option value="LabelText">LabelText</option>
            <option value="PlaceholderText">PlaceholderText</option>
            <option value="Text">Text</option>
            <option value="DisplayValue">DisplayValue</option>
            <option value="AltText">AltText</option>
            <option value="Title">Title</option>
            <option value="Role">Role</option>
            <option value="TestId">TestId</option>
          </select>
        </div>
        <div class="matcher">
          <p class="matcherQuery">Matcher:</p>
          <input type="text" @input="saveTestItem" v-model="textToMatch" class="selectorInput" />
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
    }
  }
};
</script>
<style scoped>

.test-component {
  border-bottom: 1px white solid;
  font-family: "Ubuntu", sans-serif;
}

.top-row, .bottom-row {
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

.nameQuery, .matcherQuery {
  margin-right: 15px;
}

.variantQuery, .typeQuery {
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

.delete:hover {
  outline: none;
  color: rgb(85, 201, 240);
  border-color: rgb(85, 201, 240);
  cursor: pointer;
}

/*------------------ */
/* .query {
  height: 6em;
  padding: 1%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
}
.selectorQueries {
  display: flex;
  width: 90%;
  height: 1em;
  margin-left: 20px;
  display: flex;
  justify-content: space-between;
}
.selectorQuery {
  display: flex;
  margin-right: 44px;
}
.queryTitle {
  margin-right: 20px;
}
.queryVariant {
  height: 110%;
  font-size: 12px;
  background-color: #3c3c3c;
  border: 1px solid #656565;
  color: white;
  border-radius: 12px;
  outline: none;
}

.test-component {
  margin-top: 2%;
  height: 100%;
  border-top: 1px solid rgb(50, 50, 50);
}
.bottom-row {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: -3%;
  width: 89%;
  display: flex;
}
.matcher {
  display: flex;
  justify-content: space-around;
}
.QueryInput {
  display: flex;
}
.queryInputBox {
  background-color: #3c3c3c;
  border: 1px solid #656565;
  border-radius: 6px;
  color: white;
  height: 100%;
  padding-left: 5%;
  outline: none;
}
.queryInputBox:focus {
  outline: none;
  border-color: rgb(85, 201, 240);
}
.queryType {
  background-color: #3c3c3c;
  border: 1px solid #656565;
  color: white;
  border-radius: 12px;
  outline: none;
}
.selectorInput {
  background-color: #3c3c3c;
  border: 1px solid #656565;
  border-radius: 6px;
  color: white;
  height: 103%;
  padding-left: 5%;
  outline: none;
}
.selectorInput:focus {
  outline: none;
  border-color: rgb(85, 201, 240);
}
.DeleteQuery {
  height: 20px;
  width: 30%;
  border: 1px solid #7b7a7a;
  background-color: #232323;
  border-radius: 12px;
  color: #838383;
}
.DeleteQuery:hover {
  outline: none;
  color: rgb(85, 201, 240);
  border-color: rgb(85, 201, 240);
}

.typeQueryContainer {
  display: flex;
}

.nameQuery {
  margin-right: 20px;
}

.typeQuery {
  margin-right: 25px;
}

.matcherQuery {
  margin-right: 20px;
} */
</style>
