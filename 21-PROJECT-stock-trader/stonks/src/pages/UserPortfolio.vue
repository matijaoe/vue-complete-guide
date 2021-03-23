<template>
	<base-section class="h-full">
		<div v-if="userStocks.length > 0">
			<page-title title="Your heavy bag"></page-title>
			<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
				<base-container
					class="w-full bg-green-100 justify-between items-center"
				>
					<template #header>
						<div class="flex flex-col gap-2">
							<p class="text-lg">Your portfolio is worth</p>
							<p class="font-display text-7xl">
								$ {{ formattedPortfolioTotal }}
							</p>
						</div>
					</template>
					<template #default>
						<div class="flex space-x-2 -ml-4">
							<trending-up
								v-if="change.value && change.value > 0"
							></trending-up>
							<trending-down
								v-else-if="change.value && change.value < 0"
							></trending-down>
							<p
								class="font-medium"
								:class="{
									'text-green-500': change.value > 0,
									'text-red-400': change.value < 0,
								}"
							>
								{{ valueChangeStats }}
							</p>
						</div>
					</template>
				</base-container>
				<PorfolioStock
					v-for="stock in userStocks"
					:key="stock.ticker"
					:name="stock.name"
					:ticker="stock.ticker"
					:price="stock.price"
					:change="stock.change"
				/>
			</div>
		</div>
		<div v-else>
			<p
				class="text-6xl text-center flex flex-col md:flex-row gap-3 justify-center items-center md:items-baseline font-medium mt-32"
			>
				<span>You're</span>
				<span>fresh</span>
				<span>outta</span>
				<router-link
					class="ml-1 font-display text-7xl text-font-medium bg-green-200 rounded-md px-3 py-1 text-green-700"
					:to="{ name: 'stocks' }"
					>stonks
				</router-link>
			</p>
		</div>
	</base-section>
</template>

<script>
import PorfolioStock from '../components/portfolio/PortfolioStock.vue';
import { mapGetters } from 'vuex';
export default {
	components: {
		PorfolioStock,
	},
	data() {
		return {
			change: {
				value: null,
				percentage: null,
			},
		};
	},
	computed: {
		...mapGetters('portfolio', {
			portfolioStocks: 'stocks',
		}),
		...mapGetters('stocks', {
			allStocks: 'stocks',
		}),
		userStocks() {
			// get array of portoflio stock tickers
			const userStockTickers = this.portfolioStocks.map(
				(stock) => stock.ticker
			);

			// create new object with user stocks, and add portfolio stock qnt
			const stocks = this.allStocks.filter((stock) => {
				if (userStockTickers.includes(stock.ticker)) {
					const { qnt } = this.portfolioStocks.find(
						(s) => s.ticker === stock.ticker
					);
					stock.qnt = qnt;
					return true;
				}
				return false;
			});

			return stocks;
		},
		portfolioTotal() {
			let total = 0;
			this.userStocks.forEach((stock) => {
				total += stock.qnt * stock.price;
			});
			return total;
		},
		formattedPortfolioTotal() {
			return this.portfolioTotal.toLocaleString();
		},
		valueChangeStats() {
			if (this.change.value > 0 && this.change.value < Infinity) {
				return `Up ${Math.abs(this.change.percentage)}% from yesterday`;
			} else if (this.change.value < 0) {
				return `Down ${Math.abs(
					this.change.percentage
				)}% from yesterday`;
			} else {
				return 'Nice.';
			}
		},
	},
	methods: {
		calculatePercentage(newValue, oldValue) {
			return (1 - newValue / oldValue) * 100;
		},
	},
	watch: {
		portfolioTotal(newValue, oldValue) {
			this.change.value = newValue - oldValue;
			this.change.percentage = this.calculatePercentage(
				newValue,
				oldValue
			).toFixed(2);
		},
	},
};
</script>