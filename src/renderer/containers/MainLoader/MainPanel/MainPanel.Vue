<template>
  <div class="mainPanel-container">
    <p>Im inside mainPanel</p>
    <button @click='addTest()'>Add Test</button>
    <button @click='addQuery()'>Add Query</button>
    <button @click='addEvent()'>Add Event</button>
    <br>
    Component Name <input name='componentName' type='text'/>
    <div v-for='(box, index) in boxes' :key='index'>
       <component :is=box></component>
       <span :id='index' @click='deleteBox(index)'>X</span>
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
    }
  },
  methods: {
    addTest() {
      this.boxes.push('CreateTest');
    },
    addQuery() {
      this.boxes.push('Query');
    },
    addEvent() {
      this.boxes.push('FireEvent');
    },
    deleteBox(index) {
      this.boxes.splice(index, 1);
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
