<template>
	<!-- fragments - multiple top-level elements in component template -->
	<h2>Manage Goals</h2>
	<input type="text" ref="goal" />
	<button @click="setGoal">Set Goal</button>

	<!-- render it directly in the body element, and not nested deeply into this compoonent -->
	<!-- for the semantically correct HTML structure -->
	<teleport to="html">
		<error-alert v-if="inputIsInvalid">
			<h2>Input is invalid</h2>
			<p>Please enter at least something... 🐢</p>
			<button @click="confirmError">Okay</button>
		</error-alert>
	</teleport>
</template>

<script>
import ErrorAlert from './ErrorAlert';

export default {
	components: {
		ErrorAlert,
	},
	data() {
		return {
			inputIsInvalid: false,
		};
	},
	methods: {
		setGoal() {
			// or with v-model
			const enteredValue = this.$refs.goal.value;
			if (enteredValue === '') {
				this.inputIsInvalid = true;
			}
		},
		confirmError() {
			this.inputIsInvalid = false;
		},
	},
};
</script>