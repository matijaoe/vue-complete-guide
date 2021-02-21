export default {
  setAuth(state, payload) {
    console.log(payload);
    state.isLoggedIn = payload.isAuth;
  }
};
