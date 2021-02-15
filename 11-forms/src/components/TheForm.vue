<template>
	<form @submit.prevent="submitForm">
		<div
			:class="[
				'form-control',
				{ invalid: userNameValidity === 'invalid' },
			]"
		>
			<label for="user-name">Your Name</label>
			<input
				id="user-name"
				name="user-name"
				type="text"
				v-model.trim="userName"
				@blur="validateInput"
				autocomplete="off"
			/>
			<p v-if="userNameValidity === 'invalid'">
				Please enter a valid name!
			</p>
		</div>
		<div class="form-control">
			<label for="age">Your Age (Years)</label>
			<input
				id="age"
				name="age"
				type="number"
				v-model.number="userAge"
				ref="ageInput"
			/>
		</div>
		<div class="form-control">
			<label for="referrer">How did you hear about us?</label>
			<select id="referrer" name="referrer" v-model="refferer">
				<option value="google">Google</option>
				<option value="wom">Word of mouth</option>
				<option value="newspaper">Newspaper</option>
			</select>
		</div>
		<div class="form-control">
			<h2>What are you interested in?</h2>
			<div>
				<input
					id="interest-news"
					name="interest"
					type="checkbox"
					value="news"
					v-model="interest"
				/>
				<label for="interest-news">News</label>
			</div>
			<div>
				<input
					id="interest-tutorials"
					name="interest"
					type="checkbox"
					value="tutorials"
					v-model="interest"
				/>
				<label for="interest-tutorials">Tutorials</label>
			</div>
			<div>
				<input
					id="interest-nothing"
					name="interest"
					type="checkbox"
					value="nothing"
					v-model="interest"
				/>
				<label for="interest-nothing">Nothing</label>
			</div>
		</div>
		<div class="form-control">
			<h2>How do you learn?</h2>
			<div>
				<input
					id="how-video"
					name="how"
					type="radio"
					value="video"
					v-model="how"
				/>
				<label for="how-video">Video Courses</label>
			</div>
			<div>
				<input
					id="how-blogs"
					name="how"
					type="radio"
					value="blogs"
					v-model="how"
				/>
				<label for="how-blogs">Blogs</label>
			</div>
			<div>
				<input
					id="how-other"
					name="how"
					type="radio"
					value="other"
					v-model="how"
				/>
				<label for="how-other">Other</label>
			</div>
		</div>
		<div class="form-control">
			<rating-control v-model="rating"></rating-control>
			<!-- on custom components, v-model is shorthand for these two -->
			<!-- <rating-control :modelValue="rating" @update:modelValue="rating"></rating-control> -->
		</div>
		<div class="form-control">
			<input
				type="checkbox"
				name="confirm-terms"
				id="confirm-terms"
				v-model="confirm"
			/>
			<label for="confirm-terms">Agree to terms of use?</label>
		</div>
		<div>
			<button>Save Data</button>
		</div>
	</form>
</template>

<script>
import RatingControl from './Rating';
export default {
	components: {
		RatingControl,
	},
	data() {
		return {
			userName: '',
			userAge: null,
			refferer: 'wom',
			interest: [],
			how: null,
			rating: null,
			confirm: false,
			userNameValidity: 'pending',
		};
	},
	methods: {
		submitForm() {
			console.log('Username: ' + this.userName);
			console.log('Age: ', this.userAge);
			console.log('refferer: ', this.refferer);
			console.log('Interest: ', this.interest);
			console.log('How: ', this.how);
			console.log('Rating: ', this.rating);
			console.log('Confirm: ', this.confirm);

			this.userName = '';
			this.userAge = null;
			this.refferer = 'wom';
			this.interest = [];
			this.how = null;
			this.rating = null;
			this.confirm = false;
			// single checkbox gives boolean, group of checkboxes gives an array with values

			if (this.userNameValidity !== 'valid') {
				return;
			}
			alert('Form submitted!');
		},
		validateInput() {
			this.userNameValidity = this.userName === '' ? 'invalid' : 'valid';
		},
	},
};
</script>

<style scoped>
*:focus {
	outline: none;
}
form {
	margin: 2rem auto;
	max-width: 40rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 2rem;
	background-color: #d6d6d6;
}

.form-control {
	margin: 0.5rem 0;
}

.form-control.invalid input {
	border-color: #b6524b;
}

.form-control.invalid label {
	color: #b6524b;
}

label {
	font-weight: bold;
}

h2 {
	font-size: 1rem;
	margin: 0.5rem 0;
}

input,
select {
	display: block;
	width: 100%;
	font: inherit;
	margin-top: 0.5rem;
	background: rgba(255, 255, 255, 0.123);
	border: 2px solid gray;
	padding: 0.5em;
}

select {
	width: auto;
}

input[type='checkbox'],
input[type='radio'] {
	display: inline-block;
	width: auto;
	margin-right: 1rem;
}

input[type='checkbox'] + label,
input[type='radio'] + label {
	font-weight: normal;
}

button {
	font: inherit;
	border: 1px solid #0076bb;
	background-color: #0076bb;
	color: white;
	cursor: pointer;
	padding: 0.75rem 2rem;
	border-radius: 30px;
}

button:hover,
button:active {
	border-color: #002350;
	background-color: #002350;
}
</style>