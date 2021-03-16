<template>
	<StockCard class="w-full">
		<template #header>
			<div class="flex items-center justify-between overflow-hidden">
				<span
					class="stock-name text-5xl sm:text-5xl md:text-6xl font-medium font-display absolute top-8 z-10"
				>
					{{ name }}
				</span>
				<span
					class="text-green-300 font-bold font-primary text-7xl lg:text-8xl opacity-50 absolute"
				>
					{{ ticker }}
				</span>
				<div
					class="ml-auto p-3 lg:p-4 text-xl flex items-center space-x-2 relative"
				>
					<span class="relative z-10 text-4xl font-bold font-display">
						{{ formatPrice(price) }}
					</span>
					<span
						class="absolute right-0 text-green-300 font-bold font-primary text-7xl"
						>$</span
					>
				</div>
			</div>
		</template>
		<template #default>
			<div class="flex items-center justify-between space-x-4">
				<div class="flex items-center space-x-4">
					<span>Buy</span>
					<input
						type="text"
						v-model.number="quantity"
						placeholder="2"
						class="outline-none bg-transparent text-4xl rounded-md placeholder-green-200 flex-1"
					/>
				</div>

				<div class="align-right">
					<base-button class="px-5" mode="light" @click="buyStock">
						Buy
					</base-button>
				</div>
			</div>
		</template>
	</StockCard>
</template>

<script>
import StockCard from './StockCard.vue';

export default {
	components: { StockCard },
	props: ['ticker', 'name', 'price'],
	data() {
		return {
			quantity: null,
		};
	},

	methods: {
		formatPrice(price) {
			return price.toLocaleString();
		},
		buyStock() {
			const funds = this.$store.getters['portfolio/funds'];
			if (this.total <= funds) {
				this.$store.dispatch('portfolio/buyStock', {
					cost: this.total,
					qnt: this.quantity,
					ticker: this.ticker,
				});
			}
		},
	},
	computed: {
		total() {
			if (this.quantity) {
				return this.quantity * this.price;
			} else {
				return 0;
			}
		},
		// formatTotal() {
		// 	return this.formatPrice(this.quantity * price);
		// },
	},
};
</script>

<style scoped>
.stock-name {
	left: 5%;
}

input {
	max-width: 100px;
}
</style>