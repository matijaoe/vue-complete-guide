<template>
	<div>
		<header>
			<!-- Named slot, only 1 can be left unnamed -->
			<slot name="header"></slot>
		</header>
		<!-- SPECIAL VUE ELEMENT - our custom component acts as a wrapper -->
		<slot></slot>
	</div>
</template>

<script>
export default {};
</script>

<style scoped>
div {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}
</style>