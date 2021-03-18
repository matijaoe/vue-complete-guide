export default {
	namespaced: true,
	state() {
		return {
			stocks: [
				{
					name: 'Apple',
					ticker: 'AAPL',
					price: 123,
					change: null,
				},
				{
					name: 'Microsoft',
					ticker: 'MSFT',
					price: 233,
					change: null,
				},
				{
					name: 'Tesla',
					ticker: 'TSLA',
					price: 700,
					change: null,
				},
				{
					name: 'Gamestop',
					ticker: 'GME',
					price: 228,
					change: null,
				},
				{
					name: 'Amazon',
					ticker: 'AMZN',
					price: 3096,
					change: null,
				},
				{
					name: 'Nike',
					ticker: 'NKE',
					price: 144,
					change: null,
				},
				{
					name: 'Adobe Inc.',
					ticker: 'ADBE',
					price: 450,
					change: null,
				},
			],
		};
	},
	mutations: {
		endDay(state) {
			state.stocks.forEach((stock) => {
				let percentage = Math.floor(Math.random() * 15) + 1;
				percentage *= Math.random() < 0.4 ? -1 : 1;

				stock.change = percentage;

				const oldPrice = stock.price;
				const newPrice = Math.round(
					oldPrice + (percentage / 1000) * oldPrice
				);
				stock.price = newPrice;

				let style = '';
				let state = '';
				let emoji = '';
				if (percentage >= 0) {
					style = 'font-size: 20px; color: lightgreen';
					state = 'up';
					emoji = '📈';
				} else {
					style = 'font-size: 20px; color: red';
					state = 'down';
					emoji = '📉';
				}

				const marketUpdate = `${emoji} ${
					stock.ticker
				} is ${state} ${Math.abs(percentage)}%`;

				console.log(`%c${marketUpdate}`, style);
			});
		},
	},
	actions: {
		endDay(context) {
			context.commit('endDay');
		},
	},
	getters: {
		stocks(state) {
			return state.stocks || [];
		},
	},
};
