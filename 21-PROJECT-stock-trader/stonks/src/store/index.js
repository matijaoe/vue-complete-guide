import { createStore } from 'vuex';
import stocksModule from './stocks/index.js';
import portfolioModule from './portfolio/index.js';

import axios from 'axios';

const store = createStore({
	modules: {
		stocks: stocksModule,
		portfolio: portfolioModule,
	},
	mutations: {},
	actions: {
		saveDay(state) {
			const userPortfolio = state.getters['portfolio/stocks'];
			const stocks = state.getters['stocks/stocks'];
			console.log(userPortfolio);
			axios.post(
				`https://stonktrader-92681-default-rtdb.europe-west1.firebasedatabase.app/checkpoint.json`,
				{
					portfolio: userPortfolio,
					stocks: stocks,
				}
			);
		},
	},
});

export default store;
