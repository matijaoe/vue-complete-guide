<template>
	<base-container title="Vuex" v-if="isAuth">
		<TheCounter />
		<FavoriteValue />
		<button @click="addTen">Add 10</button>
		<button @click="increase({ value: 7 })">Add 7</button>
		<ChangeCounter />
	</base-container>
	<base-container title="Auth">
		<UserAuth />
	</base-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import ChangeCounter from './components/ChangeCounter';
import FavoriteValue from './components/FavoriteValue';
import UserAuth from './components/UserAuth';

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		FavoriteValue,
		UserAuth,
	},
	computed: {
		...mapGetters({
			isAuth: 'userIsAuthenticated',
		}),
	},
	methods: {
		addTen() {
			// WE NEVER DIRECTLY CHANGE THE STATE INSIDE THE COMPONENTS!
			// this.$store.state.counter += 11;

			//* MUTATIONS
			// this.$store.commit('increase', { value: 10 });

			// if we commit like this, then this object is passed in as mutation
			// this.$store.commit({
			// 	type: 'increase',
			// 	value: 10,
			// });

			//* ACTIONS
			this.$store.dispatch({
				type: 'numbers/increase',
				value: 10,
			});
		},
		// ...mapActions(['increase']),
		...mapActions('numbers', ['increase']),
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>