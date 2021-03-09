<template>
	<section>
		<h2>All products</h2>
		<ul>
			<li v-for="product in products" :key="product.id">
				<h3>{{ product.title }}</h3>
				<h4>${{ product.price }}</h4>
				<p>{{ product.description }}</p>
				<router-link :to="`/products/${product.id}`">View Details</router-link>
			</li>
		</ul>
	</section>
</template>

<script>
import { inject } from 'vue';

export default {
	setup() {
		const loadedProducts = inject('products');

		return { products: loadedProducts };
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

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

li {
	margin: 1rem 0;
	border: 1px solid #ccc;
	padding: 1rem;
}

h3,
h4 {
	margin: 0.5rem 0;
}
</style>