import { createStore } from 'vuex';

import cartModule from './modules/cart';
import productsModule from './modules/products';

const store = createStore({
  modules: {
    prods: productsModule,
    cart: cartModule
  },
  state() {
    return {
      isLoggedIn: false
    };
  },
  mutations: {
    authentificate(state, loginStatus) {
      state.isLoggedIn = loginStatus;
    }
  },
  actions: {
    login({ commit }) {
      commit('authentificate', true);
    },
    logout({ commit }) {
      commit('authentificate', false);
    }
  },
  getters: {
    isAuthenticated(state) {
      return state.isLoggedIn;
    }
  }
});

export default store;
