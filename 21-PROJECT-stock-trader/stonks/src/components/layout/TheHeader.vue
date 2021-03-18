<template>
	<header class="flex mb-8 relative border-b-4 border-green-700">
		<div
			class="flex items-center justify-between space-x-4 flex-1 px-6 py-4 bg-green-100"
		>
			<nav class="flex items-center space-x-6">
				<ul class="inline-flex items-center space-x-8 list-none">
					<li id="logo" class="font-display font-medium mr-2">
						<router-link
							:to="{ name: 'home' }"
							class="flex items-center space-x-1"
						>
							<svg
								class="w-7 h-7"
								fill="currentColor"
								viewBox="0 0 20 20"
								xmlns="http://www.w3.org/2000/svg"
							>
								<path
									d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"
								></path>
							</svg>
							<span
								class="text-3xl"
								style="transform: translateY(1px)"
								>StonkTrader</span
							>
						</router-link>
					</li>
					<li>
						<router-link :to="{ name: 'portfolio' }"
							>Portfolio</router-link
						>
					</li>
					<li>
						<router-link :to="{ name: 'stocks' }"
							>Stocks</router-link
						>
					</li>
				</ul>
			</nav>
			<div>
				<div class="inline-flex items-center space-x-4">
					<base-button @click="endDay">End Day</base-button>
					<base-button>Save & Load</base-button>
				</div>
			</div>
		</div>
		<div class="bg-green-700 text-green-100 flex items-center px-6">
			<p class="flex flex-col items-center justify-center">
				<span class="uppercase text-xs">Funds</span>
				<span class="text-3xl font-display"
					>$ {{ formattedFunds }}</span
				>
			</p>
		</div>
	</header>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
	computed: {
		...mapGetters('portfolio', ['formattedFunds']),
	},
	methods: {
		...mapActions('stocks', ['endDay']),
	},
};
</script>

<style scoped>
</style>