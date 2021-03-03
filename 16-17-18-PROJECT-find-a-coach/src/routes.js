import { createRouter, createWebHistory } from 'vue-router';

// import CoachDetail from './pages/coaches/CoachDetail.vue';
// import CoachRegistration from './pages/coaches/CoachRegistration.vue';
// import ContactCoach from './pages/requests/ContactCoach.vue';
// import RequestsReceived from './pages/requests/RequestsReceived.vue';
// import UserAuth from './pages/auth/UserAuth.vue';
import CoachesList from './pages/coaches/CoachesList.vue';
import NotFound from './pages/NotFound.vue';

import store from './store/index';

// It turns out, that it's NOT recommended to use async components for routing
// (you may use them to conditionally load and fetch component code when working with v-if etc. though).
const CoachDetail = () => import('./pages/coaches/CoachDetail.vue');
const CoachRegistration = () => import('./pages/coaches/CoachRegistration.vue');
const ContactCoach = () => import('./pages/requests/ContactCoach.vue');
const RequestsReceived = () => import('./pages/requests/RequestsReceived.vue');
const UserAuth = () => import('./pages/auth/UserAuth.vue');

const routes = [
	{
		path: '/',
		name: 'home',
		redirect: '/coaches'
	},
	{
		path: '/coaches',
		name: 'coaches',
		component: CoachesList
	},
	{
		path: '/coaches/:id',
		name: 'coach-profile',
		props: true,
		component: CoachDetail,
		children: [
			{ path: 'contact', name: 'coach-contact', component: ContactCoach }
		]
	},
	{
		path: '/register',
		name: 'register',
		component: CoachRegistration,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/requests',
		name: 'requests',
		component: RequestsReceived,
		meta: {
			requiresAuth: true
		}
	},
	{
		path: '/auth',
		name: 'auth',
		component: UserAuth,
		meta: {
			requiresUnauth: true
		}
	},
	{
		path: '/:notFound(.*)',
		component: NotFound
	}
];

const router = createRouter({
	history: createWebHistory(),
	routes
});

router.beforeEach((to, from, next) => {
	if (to.meta.requiresAuth && !store.getters.isAuthenticated) {
		next({ name: 'auth' });
	} else if (to.meta.requiresUnauth && store.getters.isAuthenticated) {
		next({ name: 'coaches' });
	} else {
		next();
	}
});

export default router;
