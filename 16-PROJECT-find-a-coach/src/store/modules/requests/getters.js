export default {
  requests(state) {
    return state.requests;
  },
  hasRequests(state) {
    return state.requests && state.requests.length > 0;
  }
};
