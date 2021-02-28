import mutations from './mutations';
import actions from './actions';
import getters from './getters';

// import shortid from 'shortid';

export default {
  namespaced: true,
  state() {
    return {
      lastFetch: null,
      coaches: []
    };
  },
  mutations,
  actions,
  getters
};
