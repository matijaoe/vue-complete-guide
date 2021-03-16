export default {
	namespaced: true,
	state() {
		return {
			funds: 400,
			stocks: [
				{
					ticker: 'TSLA',
					amount: 3,
				},
				{
					ticker: 'AAPL',
					amount: 9,
				},
				{
					ticker: 'MSFT',
					amount: 2,
				},
				{
					ticker: 'GME',
					amount: 14,
				},
			],
		};
	},
	mutations: {
		spendFunds(state, payload) {
			const { ticker, cost, amount } = payload;
			state.funds -= cost;

			const stock = state.stocks.find((stock) => stock.ticker === ticker);
			stock.amount -= amount;
			if (stock.amount <= 0) {
				state.stocks = state.stocks.filter(
					(stock) => stock.ticker !== ticker
				);
			}
		},
		sellStock(state, payload) {
			const { ticker, cost, amount } = payload;
			state.funds += cost;

			const stock = state.stocks.find((stock) => stock.ticker === ticker);
			stock.amount -= amount;
			if (stock.amount <= 0) {
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
				context.commit('spendFunds', payload);
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
