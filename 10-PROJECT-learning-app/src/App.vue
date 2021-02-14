<template>
	<TheHeader :title="title" />
	<TheResources />
</template>

<script>
import TheHeader from './components/layouts/TheHeader';
import TheResources from './components/learning-resources/TheResources';

export default {
	components: {
		TheHeader,
		TheResources,
	},

	data() {
		return {
			title: 'Javascript Frameworks Galore',
		};
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap');

:root {
	--orange: #f0932b;
	--orange-light: #f5d5ae;
	--orange-light-2: #fff2e1;
	--gray: #cacaca;
	--gray-2: #a5a5a5;
	--gray-3: #8a8a8a;
	--color-light: white;
	--color-dark: black;
}

* {
	box-sizing: border-box;
	margin: 0;
	padding: 0;
}

html {
	font-family: 'Work Sans', sans-serif;
	font-size: 62.5%;
	overflow-y: overlay;
}

body {
	background: var(--gray);
	font-size: 1.6rem;
}

ion-icon {
	font-size: 24px;
	display: block;
}

.row {
	max-width: 56rem;
	margin: 0 auto;
	padding: 0 1.6rem;
}
</style>