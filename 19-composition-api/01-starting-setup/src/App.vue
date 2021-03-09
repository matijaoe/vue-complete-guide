<template>
	<section class="container">
		<UserData :first-name="firstName" :last-name="lastName" />
		<button @click="setAge">Change age</button>
		<div>
			<input type="text" placeholder="First name" v-model="firstName" />
			<input type="text" placeholder="Last name" ref="lastNameInput" />
			<button @click="setLastName">Set last name</button>
		</div>
	</section>
</template>

<script>
import { ref, computed, watch, provide } from 'vue';
import UserData from './components/UserData.vue';

export default {
	components: { UserData },
	setup() {
		const firstName = ref('');
		const lastName = ref('');
		const uAge = ref(21);
		// reference to input, which has its own value property
		const lastNameInput = ref('');

		function setNewAge() {
			uAge.value = 32;
		}

		watch(uAge, (newValue, oldValue) => {
			console.log(`${oldValue} -> ${newValue}`);
		});

		const uName = computed(() => `${firstName.value} ${lastName.value}`);

		function setLastName() {
			lastName.value = lastNameInput.value.value;
		}

		provide('age', uAge);

		// we have to expose (return) ref values if we use with v-model
		return {
			setAge: setNewAge,
			userName: uName,
			firstName,
			lastName,
			lastNameInput,
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