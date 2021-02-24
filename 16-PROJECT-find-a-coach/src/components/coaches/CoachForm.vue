<template>
	<form @submit.prevent="submitForm">
		<div class="form-control">
			<label for="firstname">First name</label>
			<input type="text" id="firstname" v-model.trim="firstName" />
		</div>
		<div class="form-control">
			<label for="lastname">Last name</label>
			<input type="text" id="lastname" v-model.trim="lastName" />
		</div>
		<div class="form-control">
			<label for="description">Description</label>
			<textarea id="description" rows="5" v-model.trim="description" />
		</div>
		<div class="form-control">
			<label for="rate">Hourly rate</label>
			<input type="number" id="rate" v-model.number="rate" />
		</div>
		<div class="form-control checkboxes">
			<h3>Areas of expertise</h3>
			<div>
				<input
					type="checkbox"
					id="frontend"
					value="frontend"
					v-model="areas"
				/>
				<label for="frontend">Frontend development</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="backend"
					value="backend"
					v-model="areas"
				/>
				<label for="backend">Backend development</label>
			</div>
			<div>
				<input
					type="checkbox"
					id="career"
					value="career"
					v-model="areas"
				/>
				<label for="career">Career advisory</label>
			</div>
		</div>
		<base-button>Register</base-button>
	</form>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
	emits: ['save-data'],
	components: { BaseButton },
	data() {
		return {
			firstName: '',
			lastName: '',
			description: '',
			rate: null,
			areas: [],
		};
	},
	methods: {
		submitForm() {
			const formData = {
				first: this.firstName,
				last: this.lastName,
				desc: this.description,
				rate: this.rate,
				areas: this.areas,
			};

			this.$emit('save-data', formData);
		},
	},
};
</script>

<style scoped>
.form-control {
	margin: 1.6rem 0;
}
label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
	font-size: 1.4rem;
}

input[type='checkbox'] + label {
	font-weight: normal;
	display: inline;
	margin-left: 1rem;
}

input,
textarea {
	display: block;
	width: 100%;
	border: 0.2rem solid #ccc;
	font: inherit;
	padding: 0.2em;
}

input:focus,
textarea:focus {
	background-color: var(--pink-2);
	outline: none;
	border-color: var(--purple-3);
}

input[type='checkbox'] {
	display: inline-block;
	width: auto;
	border: none;
	transform: scale(1.2);
}

h3 {
	margin: 0.5rem 0;
	font-size: 1.2rem;
	margin-bottom: 1rem;
}

.invalid label {
	color: #d13b3b;
}

.invalid input,
.invalid textarea {
	border-color: #d13b3b;
}

.invalid input:focus,
.invalid textarea:focus {
	background: #fce2e2;
}

.checkboxes label {
	font-size: 1.6rem;
	font-weight: normal;
}
.checkboxes > div {
	margin: 0.5rem 0;
}
.checkboxes {
	margin-bottom: 2.4rem;
}
</style>