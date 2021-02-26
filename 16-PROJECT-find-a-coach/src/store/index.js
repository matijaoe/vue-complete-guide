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
      userId: shortid.generate(),
      //   userId: 'eWRhpRV',
      databaseUrl: 'https://find-a-coach-3f555-default-rtdb.firebaseio.com'
    };
  },
  mutations: {},
  getters: {
    userId(state) {
      return state.userId;
    },
    databaseUrl(state) {
      return state.databaseUrl;
    }
  }
});

export default store;
