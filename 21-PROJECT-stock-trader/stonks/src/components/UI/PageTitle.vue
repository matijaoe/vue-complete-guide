<template>
	<div class="pb-2 mb-4 md:mb-5 flex justify-center overflow-y-hidden">
		<h2
			class="title relative text-5xl md:text-6xl font-medium font-display text-center z-10 px-4"
		>
			{{ title }}
		</h2>
	</div>
</template>

<script>
export default {
	props: ['title'],
};
</script>

<style scoped>
.title::before {
	content: '';
	position: absolute;
	top: 35%;
	left: 0rem;
	right: 0rem;
	height: 30%;
	background: rgba(167, 243, 208);
	z-index: -1;
}
</style>