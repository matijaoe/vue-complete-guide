<template>
	<article :class="color">
		<slot></slot>
	</article>
</template>

<script>
export default {
	props: ['color'],
};
</script>

<style scoped>
article {
	border: 0.4rem solid var(--color-dark);
	box-shadow: 0.8rem 0.8rem 0 var(--color-dark);
	position: relative;
	z-index: 9999;
	padding: 2.4rem;

	background-color: var(--color-light);
}

article.orange {
	background: var(--orange);
}
article.gray {
	background: var(--gray-2);
}
</style>