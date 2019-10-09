import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showFileExplorer: true,
  },
  mutations: {
    changeFileExplorer(state) {
      state.showFileExplorer = !state.showFileExplorer;
    },
  }, 
  actions: {
    toggleFileExplorer(context) {
      context.commit('changeFileExplorer');
    },
  },
  getters: {
    showFileExplorer: state => state.showFileExplorer,
  }
})