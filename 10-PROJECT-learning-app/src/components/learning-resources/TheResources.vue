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
		<!-- component will be cached -->
		<keep-alive>
			<component :is="selectedTab"></component>
		</keep-alive>
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
			addResource: this.addResource,
			deleteResource: this.removeResource,
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
		addResource(title, description, url) {
			const newResource = {
				id: new Date().toISOString(),
				title,
				description,
				link: url,
			};
			this.storedResources.unshift(newResource);
			this.selectedTab = 'stored-resources';
		},
		removeResource(resId) {
			const resIndex = this.storedResources.findIndex(
				(res) => res.id === resId
			);

			// delete it in-place bcs if we change the reference,
			// it will be a new object, not connected to the addResource tab and resources we provided
			this.storedResources.splice(resIndex, 1);
		},
	},
	computed: {
		storedResBtnMode() {
			return this.selectedTab === 'stored-resources'
				? 'outline--selected'
				: 'outline';
		},
		addResBtnMode() {
			return this.selectedTab === 'add-resource'
				? 'outline--selected'
				: 'outline';
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