<template>
	<li>
		<div>
			<a :href="emailLink">{{ email }}</a>
		</div>
		<div>
			<ion-icon name="skull-outline"></ion-icon>
			<p>{{ message }}</p>
		</div>
	</li>
</template>

<script>
export default {
	props: ['email', 'message'],
	computed: {
		emailLink() {
			return `mailto:${this.email}`;
		},
	},
};
</script>

<style scoped>
li {
	border: 0.2rem solid #ccc;
	border-radius: 0.8rem;
	padding: 1.6rem;
	display: flex;
	flex-direction: column;
	gap: 1.6rem;
}

li:hover {
	border-color: var(--purple-1);
}

li:hover ion-icon {
	color: var(--purple-2);
}

a {
	color: var(--purple-2);
	text-decoration: none;
	font-weight: bold;
}

a:hover,
a:active {
	color: var(--purple-1);
}

div {
	display: flex;
	align-items: center;
}

ion-icon {
	display: block;
	font-size: 3rem;
	margin-right: 1.6rem;
}
</style>