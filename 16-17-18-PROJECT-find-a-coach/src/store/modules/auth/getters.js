export default {
	userId(state) {
		return state.userId;
	},
	token(state) {
		return state.token;
	},
	isAuthenticated(state) {
		return !!state.token;
	},
	apiKey(state) {
		return state.API_KEY;
	},
	didAutoLogout(state) {
		return state.didAutoLogout;
	}
};
