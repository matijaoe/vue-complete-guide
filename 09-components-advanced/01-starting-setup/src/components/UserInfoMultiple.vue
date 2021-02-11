<template>
	<section v-for="user in users" :key="user.description">
		<div>
			<h3>{{ user.name }}</h3>
			<base-badge
				:type="user.role"
				:caption="user.role.toUpperCase()"
			></base-badge>
		</div>
		<p>{{ user.description }}</p>
	</section>
</template>

<script>
export default {
	// props: ['fullName', 'infoText', 'role'],
	props: ['users'],
};
</script>

<style>
section {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}

section div {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
</style>