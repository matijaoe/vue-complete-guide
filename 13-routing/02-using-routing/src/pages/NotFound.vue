<template>
	<h2>
		Page not found. Maybe view our
		<router-link :to="{ name: 'teams' }">teams</router-link>?
	</h2>
</template>

<style scoped>
h2 {
	margin: 0 auto;
	max-width: 800px;
	padding: 2rem 1rem;
	text-align: center;
}
</style>