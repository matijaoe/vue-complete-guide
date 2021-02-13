<template>
	<div class="row">
		<div class="tabs">
			<base-card color="gray">
				<!-- events fall through to root element of our custom component -->
				<base-button
					@click="setSelectedTab('stored-resources')"
					:mode="storedResBtnMode"
					>Stored resources</base-button
				>
				<base-button
					@click="setSelectedTab('add-resource')"
					:mode="addResBtnMode"
					>Add resource</base-button
				>
			</base-card>
		</div>

		<component :is="selectedTab"></component>
	</div>
</template>

<script>
import StoredResources from './StoredResources';
import AddResource from './AddResource';

export default {
	components: {
		StoredResources,
		AddResource,
	},
	provide() {
		return {
			resources: this.storedResources,
		};
	},
	data() {
		return {
			selectedTab: 'stored-resources',
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
	methods: {
		setSelectedTab(tab) {
			this.selectedTab = tab;
		},
	},
	computed: {
		storedResBtnMode() {
			return this.selectedTab === 'stored-resources'
				? 'cta--light'
				: 'flat';
		},
		addResBtnMode() {
			return this.selectedTab === 'add-resource' ? 'cta--light' : 'flat';
		},
	},
};
</script>

<style scoped>
.tabs {
	margin: 2.4rem 0;
}

.tabs > article {
	display: flex;
	justify-content: space-between;
}
</style>