<template>
	<li>
		<base-card>
			<header>
				<h3>{{ title }}</h3>
				<base-button mode="flat-icon" @click="deleteResource(id)">
					<ion-icon name="close-sharp"></ion-icon>
				</base-button>
			</header>
			<p>{{ description }}</p>
			<nav>
				<a :href="link" target="_blank">
					Goto resource
					<ion-icon name="chevron-forward-sharp"></ion-icon>
				</a>
			</nav>
		</base-card>
	</li>
</template>

<script>
export default {
	props: ['id', 'title', 'description', 'link'],
	inject: ['deleteResource'],
};
</script>

<style scoped>
li {
	margin: 2.4rem auto;
}

header {
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-bottom: 0.5em;
}

h3 {
	font-size: 2.4rem;
	font-family: 'Permanent Marker', cursive;
}

p {
	margin-bottom: 1em;
}
nav {
	position: relative;
}

a {
	text-decoration: none;
	color: inherit;
	padding: 0.2em 0.3em;
	position: relative;
	display: inline-flex;
	align-items: center;
	/* overflow: hidden; */
}

a::before {
	content: '';
	position: absolute;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 98%;
	background: var(--orange-light);
	z-index: -1;
	transition: 250ms cubic-bezier(0.61, 0.92, 0.72, 1.28);
	transform: scaleY(0.4);
	transform-origin: bottom;
}

a:hover::before,
a:hover::before {
	transform: scaleY(1.01);
}

a > ion-icon {
	font-size: 0.9em;
	margin-left: 0.8rem;
}
</style>