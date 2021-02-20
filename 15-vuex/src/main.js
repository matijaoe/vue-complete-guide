import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

// manage state application wide (instead of provide/project in complex apps)
const store = createStore({
  state() {
    return {
      counter: 0,
      isLoggedIn: false
    };
  },
  mutations: {
    increment(state) {
      // VERY BAD PRACTICE DOING ASYNCHRONUS CODE HERE, just modify state
      state.counter++;
    },
    increase(state, payload) {
      // payload is our argument (any type)
      state.counter += payload.value;
    },
    // login(state) {
    //   state.isLoggedIn = true;
    // },
    // logout(state) {
    //   state.isLoggedIn = false;
    // }
    setAuth(state, payload) {
      console.log(payload);
      state.isLoggedIn = payload.isAuth;
    }
  },
  actions: {
    // best to always use actions as a middleman to mutations
    // it can be same name, doesnt matter
    increment(context) {
      console.log('Context: ', context);
      setTimeout(() => {
        context.commit('increment');
      }, 2000);
    },
    increase(context, payload) {
      console.log('Context: ', context);
      // console.log(payload)
      context.commit('increase', payload);
      // never manipulate the state direcly, use mutations (commit) for that
    },
    login({ commit }) {
      commit('setAuth', { isAuth: true });
    },
    logout({ commit }) {
      commit('setAuth', { isAuth: false });
    }
  },
  getters: {
    finalCounter(state) {
      return state.counter * 2;
    },
    normalizedCounter(_, getters) {
      // _ means that I have to get that argument but won't use it
      const finalCounter = getters.finalCounter;
      if (finalCounter < 0) {
        return 0;
      } else if (finalCounter > 100) {
        return 100;
      } else {
        return finalCounter;
      }
    },
    userIsAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
