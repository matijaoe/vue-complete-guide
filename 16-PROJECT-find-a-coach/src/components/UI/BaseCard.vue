<template>
	<div :class="['card', mode]">
		<slot></slot>
	</div>
</template>

<script>
export default {
	props: ['mode'],
};
</script>

<style scoped>
.card {
	padding: 1.6rem 2rem;
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
</style>