<template>
	<base-container title="Vuex">
		<TheCounter />
		<FavoriteValue />
		<button @click="addTen">Add 10</button>
		<ChangeCounter />
	</base-container>
</template>

<script>
import BaseContainer from './components/BaseContainer.vue';
import TheCounter from './components/TheCounter';
import ChangeCounter from './components/ChangeCounter';
import FavoriteValue from './components/FavoriteValue';

export default {
	components: {
		BaseContainer,
		TheCounter,
		ChangeCounter,
		FavoriteValue,
	},
	methods: {
		addTen() {
			// WE NEVER DIRECTLY CHANGE THE STATE INSIDE THE COMPONENTS!
			// this.$store.state.counter += 11;

			// USE MUTATIONS
			// this.$store.commit('increase', { value: 10 });

			// if we commit like this, then this object is passed in as mutation
			// this.$store.commit({
			// 	type: 'increase',
			// 	value: 10,
			// });

			this.$store.dispatch({
				type: 'increase',
				value: 10,
			});
		},
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