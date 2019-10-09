<template>
  <div class="mainPanel-container">
    <p>Im inside mainPanel</p>
    <button @click='addTest()'>Add Test</button>
    <button @click='addQuery()'>Add Query</button>
    <button @click='addEvent()'>Add Event</button>
    <br>
    Component Name <input name='componentName' type='text'/>
    <div v-for='box in boxes'>
       <component :is="box"></component>
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
      boxes: ['CreateTest'],
      key: {
        'testName': eval('<CreateTest />')
      }
    }
  },
  methods: {
    addTest() {
      this.boxes.push('testName');
    },
    addQuery() {
      this.boxes.push('query');
    },
    addEvent() {
      this.boxes.push('fireEvent');
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
