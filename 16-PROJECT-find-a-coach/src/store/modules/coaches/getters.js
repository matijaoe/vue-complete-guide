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
	},
	shouldUpdate(state) {
		const lastFetch = state.lastFetch;
		if (!lastFetch) {
			return true;
		} else {
			const currentTimestamp = Date.now();
			// if it's more than minute ago
			return (currentTimestamp - lastFetch) / 1000 > 60;
		}
	}
};
