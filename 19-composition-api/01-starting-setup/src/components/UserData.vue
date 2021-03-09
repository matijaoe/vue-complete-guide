<template>
	<div class="test">
		<h2>{{ userName }}</h2>
		<h3>{{ age }}</h3>
	</div>
</template>

<script>
import { computed, inject } from 'vue';
export default {
	props: ['firstName', 'lastName'],
	// computed: {
	// 	userName() {
	// 		return `${this.firstName} ${this.lastName}`;
	// 	},
	// },
	setup(props, context) {
		console.log(context);
		const uName = computed(() => {
			return `${props.firstName} ${props.lastName}`;
		});

		const age = inject('age');

		// context.emit('save-data'); // this.$emit('save-data')

		return { userName: uName, age };
	},
};
</script>