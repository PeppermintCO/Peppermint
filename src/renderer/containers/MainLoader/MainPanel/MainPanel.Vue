<template>
  <div class="mainPanel-container">
    <p>Im inside mainPanel</p>
    <button @click='addTest()'>Add Test</button>
    
    Component Name <input name='componentName' type='text'/>
    <div v-for='n in testBoxes'>
      <CreateTest />
    </div>

  </div>
</template>

<script>
import CreateTest from './CreateTest.vue';
import Query from './Query.vue';
import FireEvent from './FireEvent.vue';

export default {
  name: 'MainPanel',
  components: {
    CreateTest,
    Query,
    FireEvent
  },
  data () {
    return {
      testBoxes: 1
    }
  },
  methods: {
    addTest() {
      this.$set(this.testBoxes, this.testBoxes += 1);
    }
  }
}


</script>

<style>
  .mainPanel-container {
    grid-area: 2 / 2 / 6 / 3;
    border: 1px red solid;
  }
</style>
