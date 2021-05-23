export default {
	namespaced: true,
	state() {
		return {
			funds: 10000,
			stocks: [],
		};
	},
	mutations: {
		buyStock(state, payload) {
			const { ticker, cost, qnt } = payload;

			const stock = state.stocks.find((stock) => stock.ticker === ticker);
			state.funds -= cost;

			if (stock) {
				stock.qnt += qnt;
			} else {
				state.stocks.push({
					ticker,
					qnt,
				});
			}
		},
		sellStock(state, payload) {
			const { ticker, cost, qnt } = payload;

			const stock = state.stocks.find((stock) => stock.ticker === ticker);
			state.funds += cost;
			stock.qnt -= qnt;

			if (stock.qnt <= 0) {
				state.stocks = state.stocks.filter(
					(stock) => stock.ticker !== ticker
				);
			}
		},
		setPortfolio(state, payload) {
			state.stocks = payload.stocks;
			state.funds = payload.funds;
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
			// todo nasty bug after saving when portfolio is empty
			return state.stocks || [];
		},
	},
};
