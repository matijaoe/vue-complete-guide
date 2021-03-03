<template>
	<TheHeader />
	<router-view v-slot="{ Component }">
		<transition name="route" mode="out-in">
			<component :is="Component"></component>
		</transition>
	</router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader';

export default {
	components: {
		TheHeader,
	},
	computed: {
		didAutoLogout() {
			return this.$store.getters.didAutoLogout;
		},
	},
	created() {
		this.$store.dispatch('tryLogin');
	},
	watch: {
		didAutoLogout(curValue, oldValue) {
			// automatically redirect user if auto logged out
			// if didAutoLogout changes to true
			if (curValue && curValue !== oldValue) {
				this.$router.replace({ name: 'coaches' });
			}
		},
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans:wght@400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

:root {
	--purple-1: hsl(250, 78%, 75%);
	--purple-2: hsl(250, 26%, 50%);
	--purple-3: hsl(250, 27%, 33%);
	--purple-4: hsl(249, 26%, 21%);
	--pink-1: #fd98d0;
	--pink-2: #ece1fc;
	--gray-1: #41463d;
	--gray-2: #6b6b6b;
	--white-1: #fff;
	--white-2: #f4f9f9;

	--font-primary: 'Noto Sans', sans-serif;
	--font-display: 'Fugaz One', cursive;

	--max-width: 144rem;
}

* {
	margin: 0;
	padding: 0;
}

*,
*::before,
*::after {
	box-sizing: inherit;
}

html {
	box-sizing: border-box;
	font-family: var(--font-primary);
	font-size: 62.5%;
	background: var(--white-2);
	overflow-y: overlay;
}

body {
	font-size: 1.6rem;
	color: var(--purple-4);
}

p {
	color: var(--purple-4);
}

section {
	width: 100%;
	margin-top: 2rem;
	margin-bottom: 2rem;
	display: flex;
	flex-direction: column;
	gap: 2rem;
}

ul {
	list-style: none;
}

button {
	font: inherit;
}

.row {
	max-width: var(--max-width);
	margin-left: auto;
	margin-right: auto;
	padding: 0 1.6rem;
}

a {
	text-decoration: none;
}

.route-enter-from {
	opacity: 0;
	transform: translateY(-30px);
}
.route-leave-to {
	opacity: 0;
	transform: translateY(30px);
}
.route-enter-active {
	transition: all 250ms ease-out;
}
.route-leave-active {
	transition: all 250ms ease-in;
}

body::-webkit-scrollbar {
	width: 4px; /* width of the entire scrollbar */
}

body::-webkit-scrollbar-track {
	background: transparent; /* color of the tracking area */
}

body::-webkit-scrollbar-thumb {
	background-color: var(--gray-2); /* color of the scroll thumb */
	border-radius: 2rem; /* roundness of the scroll thumb */
}
</style>