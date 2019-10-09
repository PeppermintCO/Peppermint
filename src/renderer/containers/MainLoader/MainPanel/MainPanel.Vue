<template>
  <div class="mainPanel-container">
    <p>Im inside mainPanel</p>
    Component Name <input name='componentName' type='text'/>

    <CreateTest />
    <Query />
    <FireEvent />
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
}

</script>
