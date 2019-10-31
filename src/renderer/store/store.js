import Vue from 'vue';
import Vuex from 'vuex';
import TestCodeGenerator from './TestCodeGenerator';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    showFileExplorer: true,
    url: '',
    showWebsite: false,
    componentName: '',
    propsList: {
      keys: [],
      values: [],
    },
    testList: {},
    fileTree: null,
    filePath: null,
    selectedFilePath: null,
    fileContent: '',
    testFileContent: '',
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
      state.filePath = payload.filePath;
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
      state.testFileContent = TestCodeGenerator.generateTestCode(state.componentName, state.testList, state.propsList);
    },
    saveUrl(state, payload) {
      if (
        payload.url.slice(0, 7) !== "http://" &&
        payload.url.slice(0, 8) !== "https://"
      ) {
        state.url = "http://" + payload.url;
      }
    },
    changeShowWebsite(state, payload) {
      state.showWebsite = payload;
    },
    addProps(state) {
      state.propsList.values.push('');
    },
    deleteProps(state, payload) {
      state.propsList.keys.splice(payload, 1);
      state.propsList.values.splice(payload, 1);
    },
    addKeyToProp(state, payload) {
      state.propsList.keys[payload.id] = payload.propKey
    },
    addValueToProp(state, payload) {
      state.propsList.values[payload.id] = payload.propValue;
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
    setFilePath(context, filePath) {
      context.commit('updateFilePath', { filePath });
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
    },
    saveUrl(context, url) {
      context.commit('saveUrl', { url });
    },
    changeShowWebsite(context, bool) {
      context.commit('changeShowWebsite', { bool });
    },
    addProps(context) {
      context.commit("addProps");
    },
    deleteProps(context, id) {
      context.commit("deleteProps", id)
    },
    addKeyToProp(context, data) {
      context.commit("addKeyToProp", data)
    },
    addValueToProp(context, data) {
      context.commit("addValueToProp", data);
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
    getTestContent: state => state.testFileContent,
    getUrl: state => state.url,
    getShowWebsite: state => state.showWebsite,
    getPropsList: state => state.propsList
  }
})
