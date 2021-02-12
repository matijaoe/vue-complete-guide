<template>
	<dialog open>
		<slot></slot>
	</dialog>
</template>


<style scoped>
dialog {
	position: fixed;
	margin: 0;
	top: 10rem;
	left: 50%;
	transform: translateX(-50%);
	max-width: 500px;
	background: white;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
	padding: 1rem;
	border-style: dotted;
}
</style>