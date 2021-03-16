import { createStore } from 'vuex';
import stocksModule from './stocks/index.js';
import portfolioModule from './portfolio/index.js';

const store = createStore({
	modules: {
		stocks: stocksModule,
		portfolio: portfolioModule,
	},
});

export default store;
