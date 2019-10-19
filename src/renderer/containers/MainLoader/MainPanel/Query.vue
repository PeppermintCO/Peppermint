<template>
  <div class="test-component">
    <form action class="query">
      <div class="selectorQueries">
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

      <div class="labels">
        <div class="typeQuereContainer">
          <p class="typeQuery"> Type:</p>
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
    <button @click="deleteItem" class="DeleteQuery Button">Delete Query</button>
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
  /* margin-right: 3%; */
  display: flex;
  justify-content: space-between;
  /* justify-content: center; */
  /* margin-left: -2.5%; */
}
.selectorQuery {
  display: flex;
  margin-right: 44px;
}
.queryTitle {
  /* position: relative;
  bottom: 8px; */
  margin-right: 20px;
}
.queryVariant {
  /* width: 80%; */
  height: 110%;
  /* margin-left: 50%; */
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
.labels {
  display: flex;
  justify-content: space-between;
  margin-left: 20px;
  margin-top: -3%;
  width: 89%;
  display: flex;
}
.matcher {
  display: flex;
  /* width: 100%; */
  justify-content: space-around;
}
.QueryInput {
  display: flex;
  /* margin-left: 20px; */
  /* width: 60%; */
}
.queryInputBox {
  background-color: #3c3c3c;
  border: 1px solid #656565;
  border-radius: 6px;
  color: white;
  height: 100%;
  padding-left: 5%;
  outline: none;
  /* margin-left: 8%; */
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
/* .InputQuery {
  margin-left: 1.5%;
  width: 100%;
  display: flex;
  justify-content: space-around;
} */
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

.typeQuereContainer {
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
}
</style>
