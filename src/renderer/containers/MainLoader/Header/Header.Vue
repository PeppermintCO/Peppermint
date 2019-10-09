<template>
  <div class="header-container">
    <LeftHeader />
    <MainHeader />
    <RightHeader />
  </div>
</template>

<script>
import LeftHeader from './components/LeftHeader.vue';
import MainHeader from './components/MainHeader.vue';
import RightHeader from './components/RightHeader.vue';
export default {
  components: {
    LeftHeader, MainHeader, RightHeader
  }
}
</script>

<style>
  .header-container {
    grid-area: 1 / 1 / 2 / 4;
    border: 1px red solid;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

</style>