export default {
	namespaced: true,
	state() {
		return {
			stocks: [
				{
					name: 'Apple',
					ticker: 'AAPL',
					price: 123,
				},
				{
					name: 'Microsoft',
					ticker: 'MSFT',
					price: 233,
				},
				{
					name: 'Tesla',
					ticker: 'TSLA',
					price: 700,
				},
				{
					name: 'Gamestop',
					ticker: 'GME',
					price: 228,
				},
				{
					name: 'Amazon',
					ticker: 'AMZN',
					price: 3096,
				},
				{
					name: 'Nike',
					ticker: 'NKE',
					price: 144,
				},
				{
					name: 'Adobe Inc.',
					ticker: 'ADBE',
					price: 450,
				},
			],
		};
	},
	mutations: {},
	actions: {},
	getters: {
		stocks(state) {
			return state.stocks || [];
		},
	},
};
