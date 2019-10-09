<template>
  <div class="mainPanel-container">
    <p>Im inside mainPanel</p>
    <button @click='addTest()'>Add Test</button>
    <br>
    Component Name <input name='componentName' type='text'/>
    <div v-for='(test, index) in tests' :key='index'>
       <component :is=test></component>
       <span :id='index' @click='deleteTest(index)'>X</span>
    </div>
  </div>
</template>

<script>
import CreateTest from './CreateTest.vue';

export default {
  name: 'MainPanel',
  components: {
    CreateTest
  },
  data () {
    return {
      tests: ['CreateTest'],
    }
  },
  methods: {
    addTest() {
      this.tests.push('CreateTest');
    },
    deleteTest(index) {
      this.tests.splice(index, 1);
    }
  }
}
</script>

<style>
  .mainPanel-container {
    grid-area: 2 / 2 / 6 / 3;
    border: 1px red solid;
    width: 50%;
    height: 100%;
  }
</style>
