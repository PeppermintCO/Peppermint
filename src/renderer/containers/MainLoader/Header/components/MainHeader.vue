<template>
  <div class="main-header">
    <!-- <button class="button saveCurrentButton" @click="generateTestCode">
      <i class="far fa-save fa-2x"></i>
    </button> -->
    <!-- <div class="text Title">peppermint</div> -->
  </div>
</template>

<script>
export default {
  name: "MainHeader",
  methods: {
    // generateTestCode() {
    //   this.$store.dispatch("generateTestCode");
    //   this.$eventHub.$emit("test-content-set");
    // }
  }
};
</script>

<style>
.main-header {
  display: flex;
  align-items: center;
  height: 100%;
  width: 50%;
  /* border: 1px white solid; */
}
/* .saveCurrentButton {
  border: none;
  background-color: #3c3c3c;
  color: rgb(85, 201, 240);
  height: 100%;
  width: 15%;
  /* margin-left: %; */
  
/* .Title {
  color: rgb(85, 201, 240);
  font-size: 30px;
  justify-self: center;
  font-family: "Ubuntu", sans-serif;
  letter-spacing: 2.5px;
  margin-left: 22%;
} */
</style>
