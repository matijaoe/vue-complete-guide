export default {
	addRequest(state, payload) {
		state.requests.unshift(payload);
	},
	setRequests(state, payload) {
		state.requests = payload;
	}
};
