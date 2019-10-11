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
    saveComponentName(state, payload) {
      state.componentName = payload
    },
    saveTestName(state, payload) {
      console.log(state.testList)
      state.testList[payload.testId] = {
        testName: payload.testName
      };
    },
    saveTestItem(state, payload) {

      if (state.testList.hasOwnProperty(payload.testId)) {
        if (
          !state.testList[payload.testId].hasOwnProperty("testItems")
        )
          state.testList[payload.testId]["testItems"] = {};
      } else {
        state.testList[payload.testId] = {
          testItems: {}
        };
      }

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
      if (state.testList.hasOwnProperty(payload.testId)) {
        if (
          !state.testList[payload.testId].hasOwnProperty("testItems")
        )
          state.testList[payload.testId]["testItems"] = {};
      } else {
        state.testList[payload.testId] = {
          testItems: {}
        };
      }

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
    addTest(state, payload) {
      state.testList[payload] = {}
    },
    deleteTest(state, payload) {
      console.log(payload);
      delete state.testList[payload];
    },

  },
  actions: {
    toggleFileExplorer(context) {
      context.commit('changeFileExplorer');
    },
    saveCurrentTests(context) {
      context.commit('SaveCurrentTest');
    },
    saveComponentName(context, componentName) {
      context.commit('saveComponentName', componentName)
    },
    saveTestName(context, testName) {
      context.commit('saveTestName', testName)
    },
    saveTestItem(context, testItem) {
      context.commit('saveTestItem', testItem)
    },
    saveFireEvent(context, testItem) {
      context.commit('saveFireEvent', testItem)
    },
    deleteTest(context, testId) {
      context.commit('deleteTest', testId)
    },
    addTest(context, testId) {
      context.commit('addTest', testId)
    }

  },
  getters: {
    showFileExplorer: state => state.showFileExplorer,
    showComponentName: state => state.componentName,
    showTestList: state => state.testList
  }
})
