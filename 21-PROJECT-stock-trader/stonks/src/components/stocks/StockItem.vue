<template>
	<StockCard class="w-full">
		<template #header>
			<div class="flex items-center justify-between overflow-hidden">
				<span
					class="stock-name text-5xl sm:text-5xl md:text-6xl font-medium font-display absolute top-8 z-10"
				>
					{{ stock.name }}
				</span>
				<span
					class="text-green-400 font-bold font-primary text-7xl lg:text-8xl opacity-50 absolute"
				>
					{{ stock.ticker }}
				</span>
				<div
					class="ml-auto p-3 lg:p-4 text-xl flex items-center space-x-2 relative"
				>
					<span class="relative z-10 text-4xl font-bold font-display">
						{{ formatPrice(stock.price) }}
					</span>
					<span
						class="absolute right-0 text-green-400 font-bold font-primary text-7xl"
						>$</span
					>
				</div>
			</div>
		</template>
		<template #default>
			<div class="flex items-center justify-between space-x-4">
				<div class="flex items-center space-x-4">
					<span class="">I want</span>
					<input
						type="text"
						v-model.number="quantity"
						placeholder="2"
						class="outline-none bg-transparent text-4xl rounded-md placeholder-green-200 flex-1"
					/>
				</div>

				<div class="align-right">
					<base-button class="px-5">Buy</base-button>
				</div>
			</div>
		</template>
	</StockCard>
</template>

<script>
import StockCard from './StockCard.vue';

export default {
	components: { StockCard },
	props: ['stock'],
	data() {
		return {
			quantity: null,
		};
	},

	methods: {
		formatPrice(price) {
			return price.toLocaleString();
		},
	},
	computed: {
		totalPrice() {
			if (this.quantity) {
				const { price } = this.stock;
				return this.formatPrice(this.quantity * price);
			} else {
				return 0;
			}
		},
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