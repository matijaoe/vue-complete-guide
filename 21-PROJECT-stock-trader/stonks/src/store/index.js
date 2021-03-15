import { createStore } from 'vuex';
import stocksModule from './stocks/index.js';

const store = createStore({
	modules: { stocksModule },
	state() {
		return {
			funds: 10000,
		};
	},
	mutations: {
		spendFunds(state, payload) {
			const { cost } = payload;
			if (state.funds - cost >= 0) {
				state.funds -= cost;
			}
		},
	},
	actions: {
		spendFunds(context, payload) {
			const { cost } = payload;
			if (context.getters.funds - cost >= 0) {
				context.commit('spendFunds', payload);
			}
		},
	},
	getters: {
		funds(state) {
			return state.funds || 0;
		},
		formattedFunds(state, getters) {
			return getters.funds.toLocaleString();
		},
		hasFunds(state) {
			return state.funds > 0;
		},
	},
});

export default store;
