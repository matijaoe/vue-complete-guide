export default {
  coaches(state) {
    return state.coaches;
  },
  hasCoaches(state, getters) {
    return getters.coaches && getters.coaches.length > 0;
  },
  isCoach(state, getters, rootState, rootGetters) {
    const coaches = getters.coaches;
    const userId = rootGetters.userId;
    return coaches.some(coach => coach.id === userId);
  }
};
