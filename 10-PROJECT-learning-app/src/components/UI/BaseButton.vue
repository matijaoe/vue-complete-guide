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
}

button:hover,
button:active {
	background: var(--orange);
}

.cta {
	color: var(--color-dark);
	background: var(--orange);
}

.cta--light {
	background: var(--color-light);
	color: var(color-dark);
	border-color: currentColor;
}

.cta:hover {
	background: var(--orange-light);
}
.cta:active {
	background: var(--orange);
}

.cta--light:hover,
.cta--light:active {
	background: var(--orange);
}

.flat {
	color: var(--color-dark);
	border-color: transparent;
	background: transparent;
}

.flat:hover {
	border-color: var(--color-dark);
}

.flat:active {
	background: var(--color-light);
}

.flat-icon {
	padding: 0.25em;
	background: transparent;
	border-color: transparent;
}

.flat-icon:hover,
.flat-icon:active {
	color: var(--orange);
}
</style>