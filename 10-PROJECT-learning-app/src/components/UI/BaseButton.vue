<template>
	<button :class="mode">
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: ['mode'],
};
</script>

<style scoped>
button {
	font: inherit;
	padding: 0.4em 0.95em;
	cursor: pointer;
	border: 0.3rem solid transparent;
	font-size: 0.9em;
	font-weight: bold;
	transition: 150ms all ease-out;

	background: var(--gray);
	color: var(--color-dark);
}

button:hover,
button:active {
	background: var(--orange-light);
}

.cta {
	color: var(--color-dark);
	background: var(--orange);
}

.cta:hover,
.cta:active {
	background: var(--orange-light);
}

.outline {
	background: transparent;
	border-color: var(--color-dark);
}

.outline--selected {
	background: var(--color-light);
	border-color: var(--color-dark);
}

.flat-icon {
	padding: 0.25em;
	background: transparent;
	border-color: transparent;
	color: var(--color-dark);
}

.flat-icon:hover,
.flat-icon:active {
	color: var(--orange);
	background: transparent;
}
</style>