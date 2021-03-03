<template>
	<div :class="['card', mode, color]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['mode', 'color'],
};
</script>

<style scoped>
.card {
	padding: 2rem;
	padding-bottom: 2.2rem;
	background: var(--white-1);

	border: 0.3rem solid var(--gray-2);
	border-radius: 1.2rem;
	/* max-width: 40rem; */
	max-width: 60rem;
	width: 100%;
	margin: 0 auto;
}

.full {
	max-width: 100%;
}

.shadow {
	box-shadow: 0.8rem 0.8rem var(--gray-2);
}

.flat {
	border: none;
	background: transparent;
	padding: 0 2rem;
	max-width: 100%;
	box-shadow: none;
}

.shadow.color {
	box-shadow: 0.8rem 0.8rem var(--purple-1);
}

.color {
	border-color: var(--purple-2);
}
</style>