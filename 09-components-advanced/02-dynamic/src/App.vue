<template>
	<div>
		<the-header>
			<h1>More on Vue Components</h1>
		</the-header>

		<base-card>
			<button @click="getSelectedComponent('active-goals')">
				Active Goals
			</button>
			<button @click="getSelectedComponent('manage-goals')">
				Manage Goals
			</button>

			<!-- <active-goals
				v-if="selectedComponent === 'active-goals'"
			></active-goals>
			<manage-goals
				v-if="selectedComponent === 'manage-goals'"
			></manage-goals> -->

			<!-- keep-alive caches components so it wont re-render and lose its state (ie filled inputs) -->
			<!-- dynamic Vue component -->
			<keep-alive>
				<component :is="selectedComponent"></component>
			</keep-alive>
		</base-card>
	</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader';
import ActiveGoals from './components/ActiveGoals';
import ManageGoals from './components/ManageGoals';

export default {
	// local components
	components: {
		TheHeader,
		ActiveGoals,
		ManageGoals,
	},
	data() {
		return {
			selectedComponent: 'manage-goals',
		};
	},
	methods: {
		getSelectedComponent(cmp) {
			this.selectedComponent = cmp;
		},
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

header h1 {
	color: white;
}
</style>
