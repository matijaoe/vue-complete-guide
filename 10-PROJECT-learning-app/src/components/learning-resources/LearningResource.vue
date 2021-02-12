<template>
	<li>
		<div>
			<header>
				<h3>{{ title }}</h3>
				<button>Delete</button>
			</header>
		</div>
		<p>{{ description }}</p>
		<nav>
			<a :href="link" target="_blank">Goto resource</a>
		</nav>
	</li>
</template>

<script>
export default {
	props: ['title', 'description', 'link'],
};
</script>

<style scoped>
li {
	margin: auto;
	max-width: 40rem;
	padding: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

h3 {
	font-size: 1.4rem;
	margin: 0.5rem 0;
}

p {
	margin: 0.5rem 0;
}

a {
	text-decoration: none;
	color: inherit;
	padding: 0.25em 0.4em;
	position: relative;
	background: hsla(27, 83%, 47%, 0.25);
	transition: 250ms ease-out;
}

a::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 100%;
	background: #da6d14;
	z-index: -1;
	transition: 150ms ease-out;
	transform: scaleY(0.12);
	transform-origin: bottom;
}

a:hover,
a:active {
	color: white;
}

a:hover::before,
a:hover::before {
	transform: scaleY(1);
}
</style>