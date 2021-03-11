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
import { ref, computed, watch, toRefs } from 'vue';

import ProjectItem from './ProjectItem.vue';

export default {
	components: {
		ProjectItem,
	},
	props: ['user'],
	setup(props) {
		const enteredSearchTerm = ref('');
		const activeSearchTerm = ref('');

		const availableProjects = computed(function () {
			if (activeSearchTerm.value) {
				return props.user.projects.filter((prj) =>
					prj.title.includes(activeSearchTerm.value)
				);
			}
			return props.user.projects;
		});

		const hasProjects = computed(function () {
			return props.user.projects && availableProjects.value.length > 0;
		});

		watch(enteredSearchTerm, function (newValue) {
			setTimeout(() => {
				if (newValue === enteredSearchTerm.value) {
					activeSearchTerm.value = newValue;
				}
			}, 300);
		});

		// const propsWithRefs = toRefs(props);
		// const user = propsWithRefs.user;

		const { user } = toRefs(props);

		watch(user, function () {
			enteredSearchTerm.value = '';
		});

		function updateSearch(val) {
			enteredSearchTerm.value = val;
		}

		return {
			enteredSearchTerm,
			availableProjects,
			hasProjects,
			updateSearch,
		};
	},
	// data() {
	//   return {
	//     enteredSearchTerm: '',
	//     activeSearchTerm: '',
	//   };
	// },
	// computed: {
	//   hasProjects() {
	//     return this.user.projects && this.availableProjects.length > 0;
	//   },
	//   availableProjects() {
	//     if (this.activeSearchTerm) {
	//       return this.user.projects.filter((prj) =>
	//         prj.title.includes(this.activeSearchTerm)
	//       );
	//     }
	//     return this.user.projects;
	//   },
	// },
	// methods: {
	//   updateSearch(val) {
	//     this.enteredSearchTerm = val;
	//   },
	// },
	// watch: {
	//   enteredSearchTerm(val) {
	//     setTimeout(() => {
	//       if (val === this.enteredSearchTerm) {
	//         this.activeSearchTerm = val;
	//       }
	//     }, 300);
	//   },
	//   user() {
	//     this.enteredSearchTerm = '';
	//   },
	// },
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>