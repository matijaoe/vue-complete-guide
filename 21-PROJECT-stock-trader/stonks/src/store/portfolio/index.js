export default {
	namespaced: true,
	state() {
		return {
			funds: 10000,
			stocksValue: 0,
			stocks: [],
		};
	},
	mutations: {
		buyStock(state, payload) {
			const { ticker, cost, qnt } = payload;
			state.funds -= cost;

			const stock = state.stocks.find((stock) => stock.ticker === ticker);

			if (stock) {
				stock.qnt += qnt;
			} else {
				state.stocks.push({
					ticker,
					qnt: qnt,
				});
			}
		},
		sellStock(state, payload) {
			const { ticker, cost, qnt } = payload;
			state.funds += cost;

			const stock = state.stocks.find((stock) => stock.ticker === ticker);
			stock.qnt -= qnt;
			if (stock.qnt <= 0) {
				state.stocks = state.stocks.filter(
					(stock) => stock.ticker !== ticker
				);
			}
		},
	},
	actions: {
		buyStock(context, payload) {
			const { cost } = payload;
			if (context.getters.funds - cost >= 0) {
				context.commit('buyStock', payload);
			}
		},
		sellStock(context, payload) {
			context.commit('sellStock', payload);
		},
	},
	getters: {
		funds(state) {
			return state.funds || 0;
		},
		stocksValue(state) {
			return state.stocksValue || 0;
		},
		formattedFunds(state, getters) {
			return getters.funds.toLocaleString();
		},
		hasFunds(state) {
			return state.funds > 0;
		},
		stocks(state) {
			return state.stocks;
		},
	},
};
