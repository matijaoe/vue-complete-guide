import mutations from './mutations';
import actions from './actions';
import getters from './getters';

// import shortid from 'shortid';

export default {
  namespaced: true,
  state() {
    return {
      coaches: []
    };
  },
  mutations,
  actions,
  getters
};
