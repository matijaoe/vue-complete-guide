<template>
	<TheHeader />
	<router-view></router-view>
</template>

<script>
import TheHeader from './components/layout/TheHeader';

export default {
	components: {
		TheHeader,
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Fugaz+One&family=Noto+Sans+JP:wght@300;400;500;700&display=swap');

:root {
	--purple-1: hsl(250, 78%, 75%);
	--purple-2: hsl(250, 26%, 50%);
	--purple-3: hsl(250, 26%, 30%);
	--pink-1: #fd98d0;
	--pink-2: #edd2ff;
	--blue-light-1: #b8cdf8;
	--green-light-1: #95f2d9;
	--gray-1: #41463d;
	--gray-2: #5b5b5b;
	--white-1: #fff;
	--white-2: #f4f9f9;

	--font-primary: 'Noto Sans JP', sans-serif;
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
}

body {
	font-size: 1.6rem;
}

section {
	width: 100%;
	padding: 0 1.6rem;
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
</style>