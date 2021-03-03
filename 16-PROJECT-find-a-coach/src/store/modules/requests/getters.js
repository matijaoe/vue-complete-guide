export default {
	requests(state, _, _2, rootGetters) {
		const coachId = rootGetters.userId;
		return state.requests.filter(req => req.coachId === coachId);
	},
	hasRequests(state, getters) {
		return getters.requests && getters.requests.length > 0;
	}
};
