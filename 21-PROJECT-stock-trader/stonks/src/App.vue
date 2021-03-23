<template>
	<div class="min-h-screen bg-green-50 text-green-900 pb-8">
		<TheHeader />
		<div class="2xl:container mx-auto">
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
	created() {
		this.$store.dispatch('loadDay');
	},
};
</script>

<style>
html {
	scrollbar-width: thin;
}

::-webkit-scrollbar {
	height: 12px;
	width: 6px;
	background: #000;
}

::-webkit-scrollbar-thumb {
	background: #393812;
	-webkit-border-radius: 1ex;
	-webkit-box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.3);
}

::-webkit-scrollbar-corner {
	background: #000;
}
</style>
