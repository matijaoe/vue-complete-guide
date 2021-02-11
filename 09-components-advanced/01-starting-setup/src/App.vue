<template>
	<div>
		<!-- <the-header></the-header> -->
		<!-- <badge-list></badge-list> -->
		<TheHeader />
		<BadgeList />
		<UserInfo
			:full-name="activeUser.name"
			:info-text="activeUser.description"
			:role="activeUser.role"
		/>
	</div>
</template>

<script>
import TheHeader from './components/TheHeader';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo';

export default {
	// local components
	components: {
		// 'the-header': TheHeader,
		// TheHeader: TheHeader,
		TheHeader,
		BadgeList,
		UserInfo,
	},
	data() {
		return {
			activeUser: {
				name: 'Maximilian Schwarzmüller',
				description: 'Site owner and admin',
				role: 'admin',
			},
		};
	},
};
</script>

<style>
html {
	font-family: sans-serif;
}

body {
	margin: 0;
}


</style>