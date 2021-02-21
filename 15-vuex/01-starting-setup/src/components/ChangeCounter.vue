<template>
	<!-- <button @click="addOne">Add 1</button> -->
	<button @click="inc">Add 1</button>
	<button @click="increase({ value: 5 })">Add 5</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
	methods: {
		// addOne() {
		// MODIFYING DIRECTLY - DON'T!
		// this.$store.state.counter++;
		//* MUTATIONS
		// this.$store.commit('increment');
		// this.$store.commit({
		// 	type: 'increment',
		// });
		//* ACTIONS
		// this.$store.dispatch('increment');
		// },

		// map `this.increment()` to `this.$store.dispatch('increment')`
		// map `this.increase(amount)` to `this.$store.dispatch('increase', amount)`
		//* ...mapActions(['increment', 'increase']),
		// basically importamo akcije koje nam trebaju umjesto da ih redefiniramo

		// ...mapActions({
		// 	inc: 'numbers/increment',
		// 	increase: 'numbers/increase',
		// }),
		...mapActions('numbers', {
			inc: 'increment',
			increase: 'increase',
		}),
		// namespace is the optional first argument
	},
};
</script>