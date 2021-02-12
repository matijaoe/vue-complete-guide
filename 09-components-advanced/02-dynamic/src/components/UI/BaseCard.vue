<template>
	<div>
		<!-- dont render element if nothing recieved in header $slot -->
		<header v-if="$slots.header">
			<!-- Named slot, only 1 can be left unnamed -->
			<slot name="header">
				<!-- <h2>Default placeholder</h2> -->
			</slot>
		</header>
		<!-- SPECIAL VUE ELEMENT - our custom component acts as a wrapper -->
		<slot></slot>
	</div>
</template>

<script>
export default {
	mounted() {
		console.log(this.$slots.header);
	},
};
</script>

<style scoped>
header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

div {
	margin: 2rem auto;
	max-width: 30rem;
	border-radius: 12px;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
}
</style>