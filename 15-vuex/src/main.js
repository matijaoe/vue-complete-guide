import { createApp } from 'vue';
import { createStore } from 'vuex';

import App from './App.vue';

const store = createStore({
  state() {
    return {
      counter: 0
    };
  },
  mutations: {
    increment(state) {
      // VERY BAD PRACTICE DOING ASYNCHRONUS CODE HERE
      state.counter++;
    },
    increase(state, payload) {
      // payload is our argument (any type)
      state.counter += payload.value;
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
    }
  }
});

const app = createApp(App);
app.use(store);
app.mount('#app');
