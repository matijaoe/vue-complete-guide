<template>
	<li>
		<header>
			<a :href="emailLink">{{ email }}</a>
			<span :title="time">{{ date }}</span>
		</header>
		<div>
			<ion-icon name="checkmark-done-outline"></ion-icon>
			<p>{{ message }}</p>
		</div>
	</li>
</template>

<script>
import dayjs from 'dayjs';

export default {
	props: ['email', 'message', 'timestamp'],
	computed: {
		emailLink() {
			return `mailto:${this.email}`;
		},
		date() {
			return dayjs(this.timestamp).format('D MMM YYYY');
		},
		time() {
			return 'at ' + dayjs(this.timestamp).format('HH:mm');
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

header {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

header span {
	color: var(--gray-2);
	font-size: 0.9em;
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