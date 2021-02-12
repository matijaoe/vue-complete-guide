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
		<!-- <course-goals>
			<template #default="slotProps">
				<h2>{{ slotProps.item }}</h2>
				<p>{{ slotProps }}</p>
			</template>
		</course-goals> -->
		<!-- ako sve ide samo u jedan slot, netrebamo template, nego slotProps stavimo u ime custom komponente -->
		<course-goals #default="slotProps">
			<h2>{{ slotProps.item }}</h2>
			<p>{{ slotProps }}</p>
		</course-goals>
	</div>
</template>

<script>
import TheHeader from './components/TheHeader';
import BadgeList from './components/BadgeList.vue';
import UserInfo from './components/UserInfo';
import CourseGoals from './components/CourseGoals';

export default {
	// local components
	components: {
		// 'the-header': TheHeader,
		// TheHeader: TheHeader,
		TheHeader,
		BadgeList,
		UserInfo,
		CourseGoals,
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