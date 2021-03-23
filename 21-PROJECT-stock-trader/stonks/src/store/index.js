import { createStore } from 'vuex';
import stocksModule from './stocks/index.js';
import portfolioModule from './portfolio/index.js';

import axios from 'axios';

const store = createStore({
	modules: {
		stocks: stocksModule,
		portfolio: portfolioModule,
	},
	state() {
		return {
			// userId: nanoid(6),
			userId: 'default-user',
			databaseUrl:
				'https://stonktrader-92681-default-rtdb.europe-west1.firebasedatabase.app',
		};
	},
	mutations: {},
	actions: {
		async saveDay(context) {
			console.log('🧦 Saving the day');

			const { getters } = context;

			const dataToSave = {
				portfolio: getters['portfolio/stocks'],
				funds: getters['portfolio/funds'],
				stocks: getters['stocks/stocks'],
			};

			console.log('DATA TO SAVE');
			console.log(dataToSave);
            
			try {
				await axios.put(
					`${getters.databaseUrl}/checkpoints/${getters.userId}.json`,
					dataToSave
				);
			} catch (error) {
				console.log(error.message);
			}
		},
		async loadDay(context) {
			console.log('👕 Loading the checkpoint ');

			const { getters } = context;

			try {
				const { data: responseData } = await axios.get(
					`${getters.databaseUrl}/checkpoints/${getters.userId}.json`
				);

				const { portfolio, funds, stocks } = responseData;

				context.commit('portfolio/setPortfolio', {
					stocks: portfolio,
					funds,
				});
				context.commit('stocks/setStocks', { stocks: stocks });

				console.log(responseData);
			} catch (error) {
				console.log(error.message);
			}
		},
	},
	getters: {
		userId(state) {
			return state.userId;
		},
		databaseUrl(state) {
			return state.databaseUrl;
		},
	},
});

export default store;
