<template>
	<section>
		<base-card>
			<h2>How was you learning experience?</h2>

			<form @submit.prevent="submitSurvey">
				<div class="form-control">
					<label for="name">Your Name</label>
					<input
						type="text"
						id="name"
						name="name"
						v-model.trim="enteredName"
					/>
				</div>

				<h3>My learning experience was ...</h3>
				<div class="form-control">
					<input
						type="radio"
						id="rating-poor"
						value="poor"
						name="rating"
						v-model="chosenRating"
					/>
					<label for="rating-poor">Poor</label>
				</div>

				<div class="form-control">
					<input
						type="radio"
						id="rating-average"
						value="average"
						name="rating"
						v-model="chosenRating"
					/>
					<label for="rating-average">Average</label>
				</div>

				<div class="form-control">
					<input
						type="radio"
						id="rating-great"
						value="great"
						name="rating"
						v-model="chosenRating"
					/>
					<label for="rating-great">Great</label>
				</div>

				<p v-if="invalidInput">
					One or more input fields are invalid. Please check your
					provided data.
				</p>

				<h3 v-if="error">{{ error }}</h3>

				<div>
					<base-button>Submit</base-button>
				</div>
			</form>
		</base-card>
	</section>
</template>

<script>
// import axios from 'axios';

export default {
	data() {
		return {
			enteredName: '',
			chosenRating: null,
			invalidInput: false,
			error: null,
			databaseUrl:
				'https://vue-http-demo-d5980-default-rtdb.firebaseio.com/surveys.json',
		};
	},
	// emits: ['survey-submit'],
	methods: {
		submitSurvey() {
			if (this.enteredName === '' || !this.chosenRating) {
				this.invalidInput = true;
				return;
			}
			this.invalidInput = false;
			this.error = null;

			// this.$emit('survey-submit', {
			// 	userName: this.enteredName,
			// 	rating: this.chosenRating,
			// });

			fetch(this.databaseUrl, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({
					name: this.enteredName,
					rating: this.chosenRating,
				}),
				// body: {
				// 	name: this.enteredName,
				// 	rating: this.chosenRating,
				// },
			})
				.then((res) => {
					// handle 400 error, (ie if we dont stringify body)
					if (res.ok) {
						//
					} else {
						throw new Error('Could not save data!');
					}
				})
				.catch((error) => {
					console.log(error);
					this.error = error.message;
				});

			// axios
			// 	.post(this.databaseUrl, {
			// 		name: this.enteredName,
			// 		rating: this.chosenRating,
			// 	})
			// 	.catch((error) => {
			// 		console.log(error);
			// 		this.error = 'Something went wrong, try again later';
			// 	});

			// this.enteredName = '';
			// this.chosenRating = null;
		},
	},
};
</script>

<style scoped>
.form-control {
	margin: 0.5rem 0;
}

input[type='text'] {
	display: block;
	width: 20rem;
	margin-top: 0.5rem;
}
</style>