<template>
	<button v-if="!isAuth" @click="login">Login</button>
	<button v-else @click="logout">Logout</button>
	<p>Is logged in: {{ isTestAuth }}</p>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
	computed: {
		// isAuth() {
		// 	return this.$store.getters.userIsAuthenticated;
		// },
		...mapGetters({
			isAuth: 'userIsAuthenticated',
			testAuth: 'numbers/testAuth',
		}),
		isTestAuth() {
			// return this.$store.getters.testAuth;
			return this.testAuth;
		},
	},
	methods: {
		// login() {
		// 	this.$store.dispatch('login');
		// },
		// logout() {
		// 	this.$store.dispatch('logout');
		// },
		...mapActions(['login', 'logout']),
	},
};
</script>