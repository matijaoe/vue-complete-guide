<template>
	<header class="row">
		<base-card color="orange">
			<h1>{{ title }}</h1>
		</base-card>
	</header>
</template>

<script>
export default {
	props: {
		title: String,
	},
};
</script>

<style scoped>
header {
	text-align: center;
	margin-top: 1.6rem;
}
header h1 {
	display: block;
	font-size: 3rem;
	font-family: 'Permanent Marker', cursive;
}
</style>