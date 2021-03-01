export default {
  userId(state) {
    return state.userId;
  },
  apiKey(state) {
    return state.API_KEY;
  },
  token(state) {
    return state.token;
  },
  isAuthenticated(state) {
    return !!state.token;
  }
};
