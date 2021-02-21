<template>
	<h3>{{ counter }}</h3>
	<p>We do more...</p>
</template>

<script>
export default {
	computed: {
		counter() {
			// return this.$store.getters.normalizedCounter;
			return this.$store.getters['numbers/normalizedCounter'];
		},
	},
};
</script>