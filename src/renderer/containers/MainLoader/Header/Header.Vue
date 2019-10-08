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