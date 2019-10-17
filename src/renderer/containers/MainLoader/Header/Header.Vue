<template>
  <div class="header-container">
    <LeftHeader />
    <MainHeader />
    <RightHeader />
  </div>
</template>

<script>
import LeftHeader from "./components/LeftHeader.vue";
import MainHeader from "./components/MainHeader.vue";
import RightHeader from "./components/RightHeader.vue";
export default {
  components: {
    LeftHeader,
    MainHeader,
    RightHeader
  }
};
</script>

<style scoped>
.header-container {
  display: flex;
  height: 8%;
  background: #3c3c3c;

  border-bottom: 1px solid rgb(24, 24, 24);
}
</style>