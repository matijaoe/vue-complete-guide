<template>
	<h2>{{ userName }}</h2>
	<h3>{{ age }}</h3>
</template>

<script>
import { computed } from 'vue';
export default {
	props: ['firstName', 'lastName', 'age'],
	// computed: {
	// 	userName() {
	// 		return `${this.firstName} ${this.lastName}`;
	// 	},
	// },
	setup(props) {
		const uName = computed(() => {
			return `${props.firstName} ${props.lastName}`;
		});

		return { userName: uName };
	},
};
</script>