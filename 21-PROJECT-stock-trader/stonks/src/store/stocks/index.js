const stocksModule = {
	namespaced: true,
	state() {
		return {
			stocks: [
				{
					name: 'Apple',
					ticker: 'AAPL',
					price: 120,
					change: null,
				},
				{
					name: 'Microsoft',
					ticker: 'MSFT',
					price: 232,
					change: null,
				},
				{
					name: 'Tesla',
					ticker: 'TSLA',
					price: 695,
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
					name: 'Adobe',
					ticker: 'ADBE',
					price: 450,
					change: null,
				},
				{
					name: 'Alphabet',
					ticker: 'GOOG',
					price: 2024,
					change: null,
				},
				{
					name: 'Facebook',
					ticker: 'FB',
					price: 280,
					change: null,
				},
				{
					name: 'Tencent',
					ticker: 'TCHEHY',
					price: 81,
					change: null,
				},
				{
					name: 'Alibaba',
					ticker: 'BABA',
					price: 236,
					change: null,
				},
				{
					name: 'Oracle',
					ticker: 'ORCL',
					price: 66,
					change: null,
				},
				{
					name: 'Visa',
					ticker: 'V',
					price: 220,
					change: null,
				},
				{
					name: 'Mastercard',
					ticker: 'MA',
					price: 370,
					change: null,
				},
				{
					name: 'PayPal',
					ticker: 'PYPL',
					price: 242,
					change: null,
				},
				{
					name: 'NVIDIA',
					ticker: 'NVDA',
					price: 370,
					change: null,
				},
				{
					name: 'Coca-Cola',
					ticker: 'CO',
					price: 50,
					change: null,
				},
				{
					name: 'Pfizer',
					ticker: 'PFE',
					price: 50,
					change: null,
				},
			],
		};
	},
	mutations: {
		randomizeStocks(state) {
			state.stocks.forEach((stock) => {
				let percentage = Math.floor(Math.random() * 15) + 1;
				percentage *= Math.random() < 0.4 ? -1 : 1;

				stock.change = percentage;

				const oldPrice = stock.price;
				const newPrice = Math.round(
					oldPrice + (percentage / 1000) * oldPrice
				);
				stock.price = newPrice;

				logPriceChange(stock.ticker, percentage);
			});
		},
		setStocks(state, payload) {
			state.stocks = payload.stocks;
		},
	},
	actions: {
		randomizeStocks(context) {
			logDayChange();
			context.commit('randomizeStocks');
		},
	},
	getters: {
		stocks(state) {
			return state.stocks || [];
		},
	},
};

function logPriceChange(ticker, percentage) {
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

	const marketUpdate = `${emoji} ${ticker} is ${state} ${Math.abs(
		percentage
	)}%`;

	console.log(`%c${marketUpdate}`, style);
}

function logDayChange() {
	console.clear();
	console.log('%c🌇 The sun is setting ...', 'font-size: 16px');
}

export default stocksModule;
