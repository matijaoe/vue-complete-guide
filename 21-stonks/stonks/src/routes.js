import { createRouter, createWebHistory } from 'vue-router';

import NotFound from './pages/NotFound.vue';

import TheHomepage from './pages/TheHomepage.vue';
import UserPortfolio from './pages/UserPortfolio.vue';
import UserStocks from './pages/UserStocks.vue';

const routes = [
	{
		path: '/',
		name: 'home',
		component: TheHomepage,
	},
	{
		path: '/portfolio',
		name: 'portfolio',
		component: UserPortfolio,
	},
	{
		path: '/stocks',
		name: 'stocks',
		component: UserStocks,
	},
	{
		path: '/:notFound(.*):',
		component: NotFound,
	},
];

const router = createRouter({
	// linkActiveClass: 'is-active',
	history: createWebHistory(),
	routes,
});

router.beforeEach((_, _2, next) => {
	// console.log({ to, from });
	next();
});

export default router;
