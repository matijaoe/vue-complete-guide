export default {
  registerCoach(state, payload) {
    state.coaches.unshift(payload);
  },
  setCoaches(state, payload) {
    state.coaches = payload;
  }
};
