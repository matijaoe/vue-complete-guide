<template>
	<section v-show="username && age">
		<h2>{{ username }} is {{ age }} yo</h2>
	</section>
</template>

<script>
export default {
	props: {
		username: String,
		age: Number,
	},
};
</script>


<style>
h3 {
	text-align: center;
	width: 100%;
	background: yellow;
}

section {
	display: flex;
	width: 100%;
	gap: 1rem;
	padding: 1rem;
	border: 3px dashed #7d7de0;
}
</style>