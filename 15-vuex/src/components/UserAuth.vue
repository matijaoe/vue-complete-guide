<template>
	<button v-if="!isAuth" @click="login">Login</button>
	<button v-else @click="logout">Logout</button>
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
		}),
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