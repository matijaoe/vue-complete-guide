<template>
	<base-container v-if="user">
		<h2>{{ user.fullName }}: Projects</h2>
		<base-search
			v-if="hasProjects"
			@search="updateSearch"
			:search-term="enteredSearchTerm"
		></base-search>
		<ul v-if="hasProjects">
			<project-item
				v-for="prj in availableProjects"
				:key="prj.id"
				:title="prj.title"
			></project-item>
		</ul>
		<h3 v-else>No projects found.</h3>
	</base-container>
	<base-container v-else>
		<h3>No user selected.</h3>
	</base-container>
</template>

<script>
import { computed, watch, toRefs } from 'vue';
import useSearch from '@/components/hooks/search.js';

import ProjectItem from './ProjectItem.vue';

export default {
	components: {
		ProjectItem,
	},
	props: ['user'],
	setup(props) {
		const { user } = toRefs(props);

		const projects = computed(() =>
			user.value ? user.value.projects : []
		);

		const { enteredSearchTerm, updateSearch, availableItems } = useSearch(
			projects,
			'title'
		);

		const hasProjects = computed(function () {
			return user.value.projects && availableItems.value.length > 0;
		});

		watch(user, function () {
			// use the hook method instead of changing it directly
			// makes it more readable cos we know from where the data is coming
			updateSearch('');
		});

		return {
			enteredSearchTerm,
			availableProjects: availableItems,
			hasProjects,
			updateSearch,
		};
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>