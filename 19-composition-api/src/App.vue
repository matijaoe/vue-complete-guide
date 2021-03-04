<template>
	<section class="container">
		<h2>{{ user.name }}</h2>
		<h3>{{ user.age }}</h3>
	</section>
</template>

<script>
// import { ref } from 'vue';
import { reactive } from 'vue';

export default {
	components: {},
	props: [],
	// data() {
	// 	return {
	// 		userName: 'Maximilian',
	// 	};
	// },
	setup() {
		//* ref with primitive
		// const uName = ref('Matija');
		// const uAge = ref(21);

		// setTimeout(() => {
		// 	uName.value = 'Lovro';
		// 	uAge.value++;
		// }, 2000);

		// return { userName: user.value.name, age: user.value.age };

		// --------------------------------------

		//* ref with objects
		// const user = ref({
		// 	name: 'Matija',
		// 	age: 21,
		// });

		// console.log(user);

		// setTimeout(() => {
		// 	user.value.name = 'Lovro';
		// 	user.value.age++;
		// }, 2000);

		// return { user };

		// --------------------------------------

		//* reactive - only for objects
		const user = reactive({
			name: 'Matija',
			age: 21,
		});

		console.log(user);

		setTimeout(() => {
			user.name = 'Lovro';
			user.age++;
		}, 2000);

		return { user };
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
	background: #333;
	color: white;
}

.container {
	margin: 3rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	text-align: center;
}
</style>