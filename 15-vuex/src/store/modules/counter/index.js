import counterMutations from './mutations.js';
import counterActions from './actions.js';
import counterGetters from './getters.js';

// local module state
export default {
  namespaced: true, // now entire module detached from store, no potential nameclashes
  state() {
    return {
      counter: 0
    };
  },
  mutations: counterMutations,
  actions: counterActions,
  getters: counterGetters
};
