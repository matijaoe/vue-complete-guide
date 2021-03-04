<template>
	<section class="container">
		<h2>{{ user.name }}</h2>
		<h3>{{ user.age }}</h3>
	</section>
</template>

<script>
import { ref, reactive, isReactive, isRef } from 'vue';

export default {
	setup() {
		const uAge = ref(21);

		const user = reactive({
			name: 'Matija',
			age: 21,
		});

		// console.log(uAge, user);
		console.log('uAge.value:', isRef(uAge.value));
		console.log('uAge:', isRef(uAge));
		console.log('user.name:', isReactive(user.name), user.age);
		console.log('user:', isReactive(user), user.age);

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