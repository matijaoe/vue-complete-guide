<template>
	<StoredResources :resources="storedResources" />
</template>

<script>
import StoredResources from './components/learning-resources/StoredResources.vue';

export default {
	components: {
		StoredResources,
	},
	data() {
		return {
			storedResources: [
				{
					id: 'vue-official-guide',
					title: 'Vue Official Guide',
					description: 'The official Vue.js documentation',
					link: 'https://vuejs.org',
				},
				{
					id: 'react-official-guide',
					title: 'React Official Guide',
					description: 'The official React.js documentation',
					link: 'https://reactjs.org',
				},
				{
					id: 'svelte-official-guide',
					title: 'Svelte Official Guide',
					description: 'The official Svelte.js documentation',
					link: 'https://svelte.dev/',
				},
				{
					id: 'angular-official-guide',
					title: 'Angular Official Guide',
					description: 'The official Angular.js documentation',
					link: 'https://angular.io/',
				},
				{
					id: 'jquery-official-guide',
					title: 'jQuery Official Guide',
					description: 'The official jQuery documentation',
					link: 'https://jquery.com/',
				},
			],
		};
	},
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

* {
	box-sizing: border-box;
}

html {
	font-family: 'Roboto', sans-serif;
}

body {
	margin: 0;
	background: #fefefe;
}
</style>