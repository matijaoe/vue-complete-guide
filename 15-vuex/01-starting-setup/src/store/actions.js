export default {
  login({ commit }) {
    commit('setAuth', { isAuth: true });
  },
  logout({ commit }) {
    commit('setAuth', { isAuth: false });
  }
};
