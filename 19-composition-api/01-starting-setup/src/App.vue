<template>
	<section class="container">
		<h2>{{ user.name }}</h2>
		<h3>{{ user.age }}</h3>
		<button @click="setAge">Change age</button>
	</section>
</template>

<script>
import { reactive } from 'vue';

export default {
	setup() {
		const user = reactive({
			name: 'Matija',
			age: 21,
		});

		function setNewAge() {
			user.age = 52;
		}

		return { user, setAge: setNewAge };
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