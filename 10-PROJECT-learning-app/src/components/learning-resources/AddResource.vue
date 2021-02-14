<template>
	<base-card>
		<form @submit.prevent>
			<div class="form-control">
				<label for="title">Title</label>
				<input type="text" id="title" name="title" autocomplete="off" />
			</div>
			<div class="form-control">
				<label for="description">Description</label>
				<textarea
					name="description"
					id="description"
					rows="3"
				></textarea>
			</div>
			<div class="form-control">
				<label for="link">Link</label>
				<input type="url" id="link" name="link" autocomplete="off" />
			</div>
			<div>
				<base-button type="submit" mode="cta">Add</base-button>
			</div>
		</form>
	</base-card>
</template>

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