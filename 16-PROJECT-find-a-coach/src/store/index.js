import { createStore } from 'vuex';
import coachesModule from './modules/coaches/index';
import requestsModule from './modules/requests/index';

import shortid from 'shortid';

const store = createStore({
  modules: {
    coaches: coachesModule,
    requests: requestsModule
  },
  state() {
    return {
      userId: shortid.generate()
    };
  },
  mutations: {},
  getters: {
    userId(state) {
      return state.userId;
    }
  }
});

export default store;
