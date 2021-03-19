<template>
	<base-section>
		<base-container>
			<template #header>
				<div class="mb-4">
					<h1 class="text-4xl mb-4 font-display font-medium">
						Trade or view your portfolio
					</h1>
					<div class="text-sm space-y-1">
						<p>You may Save & Load your data</p>
						<p>Click on <em>End day</em> to begin a new day!</p>
					</div>
				</div>
			</template>
			<template #default>
				<div class="flex items-center space-x-4">
					<span>Your funds</span>
					<span class="py-1 px-3 text-lg bg-green-200 rounded-md"
						>{{ formattedFunds }} $</span
					>
				</div>
			</template>
		</base-container>
	</base-section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
	computed: {
		...mapGetters('portfolio', ['formattedFunds']),
		// formattedFunds() {
		// 	return this.$store.getters['portfolio/formattedFunds'];
		// },
	},
};
</script>

<style >
</style>