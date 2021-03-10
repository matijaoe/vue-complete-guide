<template>
	<section>
		<h2>Add a products</h2>
		<form @submit.prevent="submitForm">
			<div>
				<label for="title">Title</label>
				<input type="text" id="title" v-model="enteredTitle" />
			</div>
			<div>
				<label for="price">Price</label>
				<input type="number" id="price" v-model.number="enteredPrice" />
			</div>
			<div>
				<label for="description">Description</label>
				<textarea
					rows="5"
					id="description"
					v-model="enteredDescription"
				></textarea>
			</div>
			<button>Add Product</button>
		</form>
	</section>
</template>

<script>
import { ref, inject } from 'vue';
import { useRouter } from 'vue-router';

export default {
	setup() {
		const addProduct = inject('addProduct');
		const router = useRouter();

		const enteredTitle = ref('');
		const enteredPrice = ref(null);
		const enteredDescription = ref('');

		function submitForm() {
			addProduct({
				title: enteredTitle,
				description: enteredDescription,
				price: enteredPrice,
			});
			router.push('/products');
		}

		//* options api way
		// this.$router.push('/products')

		return {
			enteredTitle,
			enteredPrice,
			enteredDescription,
			submitForm,
		};
	},
};
</script>

<style scoped>
section {
	margin: 3rem auto;
	max-width: 40rem;
	padding: 1rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
}

input,
label,
textarea {
	display: block;
	width: 100%;
}

label {
	font-weight: bold;
}

input,
textarea {
	font: inherit;
	margin-bottom: 0.5rem;
}

button {
	font: inherit;
	background-color: #570080;
	border: 1px solid #570080;
	color: white;
	padding: 0.5rem 1.5rem;
	cursor: pointer;
}

button:hover,
button:active {
	background-color: #220031;
	border-color: #220031;
}
</style>