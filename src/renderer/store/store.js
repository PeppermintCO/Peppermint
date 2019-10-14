import Vue from 'vue';
import Vuex from 'vuex';
import TestCodeGenerator from './TestCodeGenerator';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showFileExplorer: true,
    componentName: '',
    testList: {},
    fileTree: null,
    filePath: null,
    selectedFilePath: null,
    fileContent: '',
    testFileContent: ''
  },
  mutations: {
    changeFileExplorer(state) {
      if (!state.fileTree) return;
      state.showFileExplorer = !state.showFileExplorer;
    },
    saveComponentName(state, payload) {
      state.componentName = payload
    },
    addTest(state, payload) {
      state.testList[payload] = { 'testName': '', 'testItems': {} }
    },
    saveTestName(state, payload) {
      state.testList[payload.testId]['testName'] = payload.testName;
    },
    saveTestItem(state, payload) {
      if (
        !state.testList[payload.testId]["testItems"].hasOwnProperty(
          payload.testItemId
        )
      ) {
        state.testList[payload.testId]["testItems"][payload.testItemId] = {};
      }

      state.testList[payload.testId]["testItems"][payload.testItemId][
        "selectorName"
      ] = payload.selectorName;

      state.testList[payload.testId]["testItems"][payload.testItemId][
        "queryVariant"
      ] = payload.queryVariant;

      state.testList[payload.testId]["testItems"][payload.testItemId][
        "queryType"
      ] = payload.queryType;

      state.testList[payload.testId]["testItems"][payload.testItemId][
        "textToMatch"
      ] = payload.textToMatch;

    },
    saveFireEvent(state, payload) {
      if (
        !state.testList[payload.testId]["testItems"].hasOwnProperty(
          payload.testItemId
        )
      ) {
        state.testList[payload.testId]["testItems"][payload.testItemId] = {};
      }

      state.testList[payload.testId]["testItems"][payload.testItemId][
        "eventType"
      ] = payload.eventType;

      state.testList[payload.testId]["testItems"][payload.testItemId][
        "selectorType"
      ] = payload.selectorType;
    },
    deleteTest(state, payload) {
      delete state.testList[payload];
    },
    deleteTestItem(state, payload) {
      delete state.testList[payload.testId]['testItems'][payload.testItemId]
    },
    updateFilePath(state, payload) {
      state.filePath = payload.path;
    },
    updateFileTree(state, payload) {
      state.fileTree = payload.fileTree;
    },
    updateSelectedFilePath(state, payload) {
      state.selectedFilePath = payload.selectedFilePath;
    },
    updateFileContent(state, payload) {
      state.fileContent = payload.fileContent
    },
    generateTestFileContent(state) {
      state.testFileContent = TestCodeGenerator.generateTestCode(state.componentName, state.testList);
    }
  },

  actions: {
    toggleFileExplorer(context) {
      context.commit('changeFileExplorer');
    },
    saveCurrentTests(context) {
      context.commit('SaveCurrentTest');
    },
    saveComponentName(context, componentName) {
      context.commit('saveComponentName', componentName);
    },
    saveTestName(context, testName) {
      context.commit('saveTestName', testName);
    },
    saveTestItem(context, testItem) {
      context.commit('saveTestItem', testItem);
    },
    saveFireEvent(context, testItem) {
      context.commit('saveFireEvent', testItem);
    },
    deleteTest(context, testId) {
      context.commit('deleteTest', testId);
    },
    deleteTestItem(context, payload) {
      context.commit('deleteTestItem', payload);
    },
    addTest(context, testId) {
      context.commit('addTest', testId);
    },
    setFilePath(context, path) {
      context.commit('updateFilePath', { path });
    },
    createFileTree(context, fileTree) {
      context.commit('updateFileTree', { fileTree })
    },
    setSelectedFilePath(context, selectedFilePath) {
      context.commit('updateSelectedFilePath', { selectedFilePath })
    },
    setFileContent(context, fileContent) {
      context.commit('updateFileContent', { fileContent })
    },
    generateTestCode(context) {
      context.commit('generateTestFileContent');
    }
  },
  getters: {
    showFileExplorer: state => state.showFileExplorer,
    showComponentName: state => state.componentName,
    showTestList: state => state.testList,
    showFileExplorer: state => state.showFileExplorer,
    getFileTree: state => state.fileTree,
    getFilePath: state => state.filePath,
    getSelectedFilePath: state => state.selectedFilePath,
    getFileContent: state => state.fileContent,
    getTestContent: state => state.testFileContent
  }
})
