<template>
	<section class="container">
		<h2>{{ userAge }}</h2>
		<h3>{{ userName }}</h3>
	</section>
</template>

<script>
import { reactive, toRefs } from 'vue';

export default {
	setup() {
		const user = reactive({
			name: 'Matija',
			age: 21,
		});

		setTimeout(() => {
			user.name = 'Lovro';
			user.age++;
		}, 2000);

		// makes properties in object also reactive
		// now changes will be picked up and updated in the template (if returning them directly)
		const userRefs = toRefs(user);

		return { userName: userRefs.name, userAge: userRefs.age };
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