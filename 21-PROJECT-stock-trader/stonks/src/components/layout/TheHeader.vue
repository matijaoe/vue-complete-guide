<template>
	<header
		class="bg-green-200 px-8 py-4 flex items-center space-x-8 justify-between mb-8 relative"
	>
		<nav class="flex items-center space-x-8">
			<ul class="inline-flex items-center space-x-8 list-none">
				<li id="logo" class="font-display text-2xl font-medium">
					<router-link :to="{ name: 'home' }"
						>StonkTrader</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'portfolio' }"
						>Portfolio</router-link
					>
				</li>
				<li>
					<router-link :to="{ name: 'stocks' }">Stocks</router-link>
				</li>
			</ul>
		</nav>
		<div class="">
			<div class="mr-32 inline-flex items-center space-x-6">
				<base-button @click="endDay">End Day</base-button>
				<base-button>Save & Load</base-button>
			</div>
			<p
				class="absolute top-0 right-0 bg-green-700 text-green-100 h-full flex flex-col items-center justify-center px-6"
			>
				<span class="uppercase text-xs">Funds</span>
				<span class="text-2xl">{{ formattedFunds }} $</span>
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