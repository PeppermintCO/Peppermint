import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showFileExplorer: true,
    componentName: '',
    testList: {},
    testLength: 0,

  },
  mutations: {
    changeFileExplorer(state) {
      state.showFileExplorer = !state.showFileExplorer;
    },
    saveComponentName(state) {

    },
    saveCurrentTests(state) {

      // for (let i = 0; i < testLength; i++) {

      // }
    }
  },
  actions: {
    toggleFileExplorer(context) {
      context.commit('changeFileExplorer');
    },
    saveCurrentTests(context) {
      context.commit('SaveCurrentTest');
    }
  },
  getters: {
    showFileExplorer: state => state.showFileExplorer,
  }
})