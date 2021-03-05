<template>
	<section class="container">
		<h2>{{ userName }}</h2>
		<h3>{{ age }}</h3>
		<button @click="setAge">Change age</button>
		<div>
			<input type="text" placeholder="First name" @input="setFirstName" />
			<input type="text" placeholder="Last name" @input="setLastName" />
		</div>
	</section>
</template>

<script>
import { computed, ref } from 'vue';

export default {
	setup() {
		const firstName = ref('');
		const lastName = ref('');
		const uAge = ref(21);

		function setNewAge() {
			uAge.value = 32;
		}

		function setFirstName(event) {
			firstName.value = event.target.value;
		}

		function setLastName(event) {
			lastName.value = event.target.value;
		}

		const uName = computed(() => `${firstName.value} ${lastName.value}`);

		return {
			age: uAge,
			setAge: setNewAge,
			userName: uName,
			setFirstName,
			setLastName,
		};
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