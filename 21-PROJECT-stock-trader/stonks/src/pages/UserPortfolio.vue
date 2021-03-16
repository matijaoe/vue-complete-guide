<template>
	<section class="px-4">
		<page-title title="Your heavy bag"></page-title>
		<div
			v-if="userStocks.length > 0"
			class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4"
		>
			<PorfolioStock
				v-for="stock in userStocks"
				:key="stock.ticker"
				:name="stock.name"
				:ticker="stock.ticker"
				:price="stock.price"
			/>
		</div>
		<div v-else>
			<p class="text-6xl text-center" style="transform: translateY(200%)">
				You're fresh outta
				<router-link
					class="ml-1 font-display text-6xl text-font-medium bg-green-200 rounded-md px-2 text-green-700"
					:to="{ name: 'stocks' }"
					>stonks
				</router-link>
			</p>
		</div>
	</section>
</template>

<script>
import PorfolioStock from '../components/portfolio/PortfolioStock.vue';
import { mapGetters } from 'vuex';
export default {
	components: {
		PorfolioStock,
	},
	computed: {
		...mapGetters('portfolio', {
			portolioStocks: 'stocks',
		}),
		...mapGetters('stocks', {
			allStocks: 'stocks',
		}),
		userStocks() {
			const userStockTickers = this.portolioStocks.map(
				(stock) => stock.ticker
			);
			const stocks = this.allStocks.filter((stock) =>
				userStockTickers.includes(stock.ticker)
			);

			return stocks;
		},
	},
};
</script>