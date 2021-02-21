import { createStore } from 'vuex';

import counterModule from './modules/counter/index';
import rootMutations from './mutations.js';
import rootActions from './actions.js';
import rootGetters from './getters.js';

// manage state application wide (instead of provide/project in complex apps)
const store = createStore({
  modules: {
    // everything is merged into store object (except with namspace)
    numbers: counterModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: rootMutations,
  actions: rootActions,
  getters: rootGetters
});

export default store;
