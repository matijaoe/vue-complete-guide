<template>
	<base-dialog
		v-if="inputIsInvalid"
		title="Invalid Input"
		@close="confirmError"
	>
		<template #default>
			<p>Unfortunately, at least one input value is invalid.</p>
			<p>Please check all inputs and try again.</p>
		</template>
		<template #actions>
			<base-button @click="confirmError" mode="cta">Okay</base-button>
		</template>
	</base-dialog>
	<base-card>
		<form @submit.prevent="submitData">
			<div class="form-control">
				<label for="title">Title</label>
				<input
					type="text"
					id="title"
					name="title"
					autocomplete="off"
					ref="titleInput"
					:placeholder="placeholderResource.title"
				/>
			</div>
			<div class="form-control">
				<label for="description">Description</label>
				<textarea
					name="description"
					id="description"
					rows="3"
					ref="descInput"
					:placeholder="placeholderResource.desc"
				></textarea>
			</div>
			<div class="form-control">
				<label for="link">Link</label>
				<input
					type="url"
					id="link"
					name="link"
					autocomplete="off"
					ref="linkInput"
					:placeholder="placeholderResource.url"
				/>
			</div>
			<div>
				<base-button type="submit" mode="cta">Add</base-button>
			</div>
		</form>
	</base-card>
</template>

<script>
function anyIsEmpty(...fields) {
	return fields.some((field) => field.trim() === '');
}
export default {
	inject: ['addResource'],
	data() {
		return {
			inputIsInvalid: false,
			placeholderResource: {
				title: 'Google',
				desc:
					'The act of searching the internet for absolutely nothing in ones spare time.',
				url: 'https://google.com',
			},
		};
	},
	methods: {
		submitData(e) {
			const enteredTitle = this.$refs.titleInput.value;
			const enteredDescription = this.$refs.descInput.value;
			const enteredUrl = this.$refs.linkInput.value;

			if (anyIsEmpty(enteredTitle, enteredDescription, enteredUrl)) {
				this.inputIsInvalid = true;
				return;
			}

			this.addResource(enteredTitle, enteredDescription, enteredUrl);
			e.target.reset();
		},
		confirmError() {
			this.inputIsInvalid = false;
		},
	},
};
</script>

<style scoped>
label {
	font-weight: bold;
	display: block;
	margin-bottom: 0.5rem;
}

input,
textarea {
	display: block;
	width: 100%;
	font: inherit;
	padding: 0.15rem;
	border: 2px solid var(--gray);
	padding: 0.5em;
}

input:focus,
textarea:focus {
	outline: none;
	border-color: var(--orange-light);
	background: var(--orange-light-2);
}

.form-control {
	margin: 1rem 0 1.6rem;
}
</style>