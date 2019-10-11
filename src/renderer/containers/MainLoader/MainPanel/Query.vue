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
  </div>
</template>

<script>
export default {
  name: "Query",
  props: ["testId"],
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
        "selectorName"
      ] = this.selectorName;

      this.$store.state.testList[this.testId]["testItems"][this._uid][
        "queryVariant"
      ] = this.queryVariant;

      this.$store.state.testList[this.testId]["testItems"][this._uid][
        "queryType"
      ] = this.queryType;

      this.$store.state.testList[this.testId]["testItems"][this._uid][
        "textToMatch"
      ] = this.textToMatch;

      console.log(this.$store.state.testList);
    }
  }
};
</script>
