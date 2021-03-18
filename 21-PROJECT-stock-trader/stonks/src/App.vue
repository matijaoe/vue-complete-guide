<template>
	<div class="min-h-screen bg-green-50 text-green-900">
		<div class="2xl:container mx-auto">
			<TheHeader/>
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
};
</script>

<style>
</style>
