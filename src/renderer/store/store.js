import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showFileExplorer: true,
    fileTree: null,
    filePath: null
  },
  mutations: {
    changeFileExplorer(state) {
      state.showFileExplorer = !state.showFileExplorer;
    },
    updateFilePath(state, payload) {
      state.filePath = payload.path;
    }, 
    updateFileTree(state, payload) {
      state.fileTree = payload.fileTree;
    }, 
  }, 
  actions: {
    toggleFileExplorer(context) {
      context.commit('changeFileExplorer');
    },
    setFilePath(context, path) {
      context.commit('updateFilePath', { path })
    },
    createFileTree(context, fileTree) {
      context.commit('updateFileTree', { fileTree })
    }
  },
  getters: {
    showFileExplorer: state => state.showFileExplorer,
    getFileTree: state => state.fileTree,
    getFilePath: state => state.filePath,
  }
})