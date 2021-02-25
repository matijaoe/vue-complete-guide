import mutations from './mutations';
import actions from './actions';
import getters from './getters';
import shortid from 'shortid';

export default {
  namespaced: true,
  state() {
    return {
      requests: [
        {
          id: shortid.generate(),
          userEmail: 'matija.osrecki@gmail.com',
          message: 'dicks out for max'
        }
      ]
    };
  },
  mutations,
  actions,
  getters
};
