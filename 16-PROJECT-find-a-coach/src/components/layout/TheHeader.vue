<template>
	<div class="row">
		<header>
			<nav>
				<h1>
					<router-link :to="{ name: 'home' }" id="brand-title">
						Find a Coach
					</router-link>
				</h1>
				<ul>
					<li>
						<router-link :to="{ name: 'coaches' }">
							Coaches
						</router-link>
					</li>
					<li v-if="isLoggedIn">
						<router-link :to="{ name: 'requests' }">
							Requests
						</router-link>
					</li>
					<li v-else>
						<router-link :to="{ name: 'auth' }">Login</router-link>
					</li>
				</ul>
			</nav>
		</header>
	</div>
</template>

<script>
export default {
	computed: {
		isLoggedIn() {
			return this.$store.getters.isAuthenticated;
		},
	},
};
</script>

<style scoped>
header {
	color: var(--white-2);

	max-width: var(--max-width);
	margin-top: 1.2rem;
}

header nav {
	background: var(--purple-2);
	box-shadow: 0.8rem 0.8rem var(--purple-1);
	border-radius: 1.2rem;
	padding: 0.8rem;

	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
}

header a {
	display: inline-block;
	padding: 0.5em 1em;
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
	font-size: 2rem;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
	border-color: transparent;
	color: inherit;
}

header ul {
	list-style: none;
	display: flex;
	justify-content: center;
	align-items: center;
}

li {
	margin: 0 0.4rem;
}

@media only screen and (max-width: 600px) {
	header a {
		padding: 0.5em;
		font-size: 0.9em;
	}
	li {
		margin: 0 0.2rem;
	}
}
</style>