export default {
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
  testAuth(state, getters, rootState) {
    // gotta use root state to step out of local scope
    return rootState.isLoggedIn;
  }
};
