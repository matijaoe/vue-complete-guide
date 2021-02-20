<template>
	<button @click="addOne">Add 1</button>
</template>

<script>
export default {
	methods: {
		addOne() {
			// MODIFYING DIRECTLY - DON'T!
			// this.$store.state.counter++;

			// MUTATIONS
			// this.$store.commit('increment');
			// this.$store.commit({
			// 	type: 'increment',
			// });

			// ACTIONS
			this.$store.dispatch('increment');
		},
	},
};
</script>