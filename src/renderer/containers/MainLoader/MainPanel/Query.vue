<template>
  <div class="test-component">
    Query
    <form action>
      Selector Name
      <input type="text" @input="saveTestItem" v-model="selectorName" />

      <select name="queryVariant" @change="saveTestItem" v-model="queryVariant">
        <option value="getBy">getBy</option>
        <option value="findBy">findBy</option>
        <option value="queryBy">queryBy</option>
        <option value="getAllBy">getAllBy</option>
        <option value="findAllBy">findAllBy</option>
        <option value="queryAllBy">queryAllBy</option>
      </select>

      <select name="queryType" @change="saveTestItem" v-model="queryType">
        <option value="LabelText">LabelText</option>
        <option value="PlaceholderText">PlaceholderText</option>
        <option value="Text">Text</option>
        <option value="DisplayValue">DisplayValue</option>
        <option value="AltText">AltText</option>
        <option value="Title">Title</option>
        <option value="Role">Role</option>
        <option value="TestId">TestId</option>
      </select>
      <input type="text" @input="saveTestItem" v-model="textToMatch" />
    </form>
    <span @click="deleteItem">
      <button>X</button>
    </span>
  </div>
</template>

<script>
export default {
  name: "Query",
  props: ["testId", 'testItems', 'testItemIndex'],
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
      this.$store.dispatch("deleteTestItem", { testId: this.testId, testItemId: this._uid });
    },
  }
};
</script>
