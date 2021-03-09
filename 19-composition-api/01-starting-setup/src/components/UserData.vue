<template>
	<div class="test">
		<h2>{{ userName }}</h2>
		<h3>{{ age }}</h3>
	</div>
</template>

<script>
import {
	computed,
	inject,
	onBeforeMount,
	onMounted,
	onBeforeUpdate,
	onUpdated,
	onBeforeUnmount,
	onUnmounted,
} from 'vue';

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

		onBeforeMount(() => {
			console.log('onBeforeMount');
		});
		onMounted(() => {
			console.log('onMounted');
		});
		onBeforeUpdate(() => {
			console.log('onBeforeUpdate');
		});
		onUpdated(() => {
			console.log('onUpdated');
		});
		onBeforeUnmount(() => {
			console.log('onBeforeUnmount');
		});
		onUnmounted(() => {
			console.log('onUpdated');
		});

		// context.emit('save-data'); // this.$emit('save-data')

		return { userName: uName, age };
	},
};
</script>