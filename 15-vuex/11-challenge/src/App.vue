<template>
	<the-header></the-header>
	<router-view></router-view>
</template>

<script>
import TheHeader from './components/nav/TheHeader.vue';
import { mapGetters, mapActions } from 'vuex';

export default {
	components: {
		TheHeader,
	},
	computed: {
		...mapGetters('isLoggedIn'),
	},
	methods: {
		...mapActions(['login', 'logout']),
	},
};
</script>

<style>
* {
	box-sizing: border-box;
}

html {
	font-family: sans-serif;
}

body {
	margin: 0;
}
</style>