<template>
	<h3>{{ counter }}</h3>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	computed: {
		// counter() {
		// 	return this.$store.getters.finalCounter;
		// },

		//* mix the getters into computed with object spread operator
		// ...mapGetters(['finalCounter'])

		//* map `this.counter` to `this.$store.getters.finalCounter`
		...mapGetters({
			counter: 'numbers/finalCounter',
		}),
	},
};
</script>