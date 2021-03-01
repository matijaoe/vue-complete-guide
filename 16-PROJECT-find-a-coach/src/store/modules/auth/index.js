import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state() {
    return {
      //   userId: 'UssYdJQPk', // mamic,
      userId: null,
      token: null,
      tokenExpiration: null
    };
  },
  mutations,
  actions,
  getters
};
