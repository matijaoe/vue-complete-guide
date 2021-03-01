import mutations from './mutations';
import actions from './actions';
import getters from './getters';

export default {
  state() {
    return {
      userId: null,
      token: null,
      tokenExpiration: null,
      API_KEY: 'AIzaSyDjWvr2HzvuRpm-7H7FN53SjqaZZ4yKvcc'
    };
  },
  mutations,
  actions,
  getters
};
