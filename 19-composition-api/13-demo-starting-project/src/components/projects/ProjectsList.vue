<template>
	<base-container v-if="user">
		<h2>{{ user.fullName }} Projects:</h2>
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
import { computed, ref, watch, toRefs } from 'vue';
import ProjectItem from './ProjectItem.vue';

export default {
	components: {
		ProjectItem,
	},
	props: ['user'],
	setup(props) {
		//* DATA
		const enteredSearchTerm = ref('');
		const activeSearchTerm = ref('');

		//* METHODS
		const updateSearch = (val) => (enteredSearchTerm.value = val);

		//* WATCHERS
		watch(enteredSearchTerm, (val) => {
			if (val === enteredSearchTerm.value) {
				setTimeout(() => {
					activeSearchTerm.value = val;
				}, 100);
			}
		});

		// const propsWithRefs = toRefs(props);
		// const user = propsWithRefs.user;
		const { user } = toRefs(props);

		watch(user, () => (enteredSearchTerm.value = ''));

		//* COMPUTED
		const hasProjects = computed(() => {
			return props.user.projects && props.user.projects.length > 0;
		});

		const availableProjects = computed(() => {
			if (activeSearchTerm.value) {
				return props.user.projects.filter((prj) =>
					prj.title
						.toLowerCase()
						.includes(activeSearchTerm.value.toLowerCase())
				);
			}
			return props.user.projects;
		});

		return {
			enteredSearchTerm,
			updateSearch,
			hasProjects,
			availableProjects,
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