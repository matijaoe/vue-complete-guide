<template>
	<section class="container">
		<h2>{{ userName }}</h2>
		<h3>{{ age }}</h3>
		<button @click="setAge">Change age</button>
		<div>
			<input type="text" placeholder="First name" v-model="firstName" />
			<input type="text" placeholder="Last name" v-model="lastName" />
		</div>
	</section>
</template>

<script>
import { ref, computed, watch } from 'vue';

export default {
	setup() {
		const firstName = ref('');
		const lastName = ref('');
		const uAge = ref(21);

		function setNewAge() {
			uAge.value = 32;
		}

		// watch(uAge, (newValue, oldValue) => {
		// 	console.log(`${oldValue} -> ${newValue}`);
		// });

		const uName = computed(() => `${firstName.value} ${lastName.value}`);

		// multiple dependencies per watcher
		watch([uAge, uName], (newValues, oldValues) => {
			console.log(`Age: ${oldValues[0]} -> ${newValues[0]}`);
			console.log(`Name: ${oldValues[1]} -> ${newValues[1]}`);
		});

		// we have to expose (return) ref values if we use with v-model
		return {
			age: uAge,
			setAge: setNewAge,
			userName: uName,
			firstName,
			lastName,
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