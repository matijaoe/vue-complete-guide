<template>
	<header>
		<nav class="row">
			<h1><router-link to="/">Find a Coach</router-link></h1>
			<ul>
				<li>
					<router-link to="/coaches">Coaches</router-link>
				</li>
				<li>
					<router-link to="/requests">Requests</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
header {
	width: 100%;
	background: var(--purple-2);
	display: flex;
	justify-content: center;
	align-items: center;
	color: var(--white-2);
}

header a {
	display: inline-block;
	padding: 0.65em 1.2em;
	border-top: 0.3rem dotted transparent;
	font-family: var(--font-display);
	font-weight: normal;
	margin: 0 0.4rem;
	transition: all 150ms ease-in-out;
	color: inherit;
}

a:active,
a:hover {
	color: var(--pink-1);
}

a.router-link-active {
	border-color: var(--pink-1);
	color: var(--pink-1);
}

h1 {
	font-family: var(--font-display);
}

h1 a {
	margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
	border-color: transparent;
}

header nav {
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

header ul {
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

li {
	margin: 0 0.5rem;
}
</style>