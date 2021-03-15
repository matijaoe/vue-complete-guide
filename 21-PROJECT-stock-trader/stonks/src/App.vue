<template>
	<div class="min-h-screen bg-green-50">
		<div class="2xl:container mx-auto">
			<TheHeader />
			<main>
				<router-view></router-view>
			</main>
		</div>
	</div>
</template>

<script>
import TheHeader from './components/layout/TheHeader.vue';

export default {
	components: {
		TheHeader,
	},
	data() {
		return {};
	},
	methods: {},
	computed: {},
};
</script>

<style>
</style>