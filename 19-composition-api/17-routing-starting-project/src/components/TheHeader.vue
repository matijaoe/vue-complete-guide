<template>
	<header>
		<nav>
			<ul>
				<li>
					<router-link to="/products">All Products</router-link>
				</li>
				<li>
					<router-link to="/products/add">Add Product</router-link>
				</li>
			</ul>
		</nav>
	</header>
</template>

<style scoped>
header {
	width: 100%;
	height: 5rem;
	background-color: #570080;
	box-shadow: 0 1px 5px rgba(0, 0, 0, 0.26);
}

nav {
	height: 100%;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
}

li {
	margin: 0 1rem;
}

a {
	text-decoration: none;
	color: white;
	font-size: 1.25rem;
}

a:hover,
a:active,
a.router-link-active {
	color: #fca55e;
}
</style>