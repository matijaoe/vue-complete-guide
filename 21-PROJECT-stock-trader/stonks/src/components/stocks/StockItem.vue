<template>
	<StockCard class="w-full overflow-hidden">
		<template #header>
			<div class="flex items-center justify-between">
				<span
					class="stock-name text-5xl md:text-6xl font-medium font-display absolute top-9 z-10"
				>
					{{ name }}
				</span>
				<span
					class="text-green-200 opacity-70 font-primary text-7xl lg:text-8xl absolute"
				>
					{{ ticker }}
				</span>
				<div
					class="ml-auto px-4 py-3 lg:py-4 text-xl flex items-center space-x-2 relative"
				>
					<svg
						v-if="change && change > 0"
						class="w-7 h-7 text-green-500"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M12 7a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0V8.414l-4.293 4.293a1 1 0 01-1.414 0L8 10.414l-4.293 4.293a1 1 0 01-1.414-1.414l5-5a1 1 0 011.414 0L11 10.586 14.586 7H12z"
							clip-rule="evenodd"
						></path>
					</svg>
					<svg
						v-else-if="change && change < 0"
						class="w-7 h-7 text-red-400"
						fill="currentColor"
						viewBox="0 0 20 20"
						xmlns="http://www.w3.org/2000/svg"
					>
						<path
							fill-rule="evenodd"
							d="M12 13a1 1 0 100 2h5a1 1 0 001-1V9a1 1 0 10-2 0v2.586l-4.293-4.293a1 1 0 00-1.414 0L8 9.586 3.707 5.293a1 1 0 00-1.414 1.414l5 5a1 1 0 001.414 0L11 9.414 14.586 13H12z"
							clip-rule="evenodd"
						></path>
					</svg>

					<span class="relative z-10 text-4xl font-display">
						{{ formatPrice(price) }}
					</span>
					<span
						class="absolute right-0 text-green-200 opacity-70 font-primary text-7xl"
						>$</span
					>
				</div>
			</div>
		</template>
		<template #default>
			<div
				class="flex flex-row sm:flex-col md:flex-row gap-4 relative pb-2"
			>
				<label class="flex items-center flex-1">
					<input
						type="number"
						v-model.number="buyAmount"
						placeholder="Number of stonks"
						class="outline-none rounded-md placeholder-green-300 px-2 text-xl w-full h-full bg-transparent focus:bg-green-100 py-2 font-medium"
						@input="validateAmount"
						@keyup.enter="buyStock"
						@blur="clearIfError"
					/>
				</label>

				<div class="flex">
					<base-button
						class="px-5 flex-1"
						mode="light"
						@click="buyStock"
						:disabled="!isValid"
					>
						Buy
						<span v-if="isValid && buyAmount">
							for ${{ formattedOrderTotal }}
						</span>
					</base-button>
				</div>
				<p
					v-if="error"
					class="text-xs text-red-400 absolute -bottom-3 md:-bottom-3 w-full sm:text-center md:text-left px-2"
				>
					{{ error }}
				</p>
			</div>
		</template>
	</StockCard>
</template>

<script>
import StockCard from './StockCard.vue';

export default {
	components: { StockCard },
	props: ['ticker', 'name', 'price', 'change'],
	data() {
		return {
			buyAmount: null,
			isValid: true,
			error: null,
		};
	},

	methods: {
		formatPrice(price) {
			return price.toLocaleString();
		},
		buyStock() {
			this.validateAmount();

			// check not needed as btn is disabled anyways
			if (this.isValid) {
				this.$store.dispatch('portfolio/buyStock', {
					cost: this.total,
					qnt: this.buyAmount,
					ticker: this.ticker,
				});
				this.buyAmount = '';
			}
		},
		validateAmount() {
			const qnt = this.buyAmount;

			try {
				if (!Number.isInteger(+qnt)) {
					this.isValid = false;
					throw Error(`Quantity must be a whole number`);
				} else if (qnt < 1) {
					this.isValid = false;
					throw Error(`Minimum order is 1 stock`);
				} else if (this.total > this.funds) {
					this.isValid = false;
					throw Error(`You don't have enough funds`);
				} else {
					this.isValid = true;
					this.error = null;
				}
			} catch (err) {
				this.error = err.message;
			}
		},
		clearIfError() {
			if (this.erorr || !this.isValid) {
				this.buyAmount = '';
				this.error = null;
				this.isValid = true;
			}
		},
	},
	computed: {
		total() {
			if (this.buyAmount) {
				return this.buyAmount * this.price;
			} else {
				return 0;
			}
		},
		funds() {
			return this.$store.getters['portfolio/funds'];
		},
		formattedOrderTotal() {
			return (parseInt(this.buyAmount) * this.price).toLocaleString();
		},
		// formatTotal() {
		// 	return this.formatPrice(this.buyAmount * price);
		// },
	},
};
</script>

<style scoped>
.stock-name {
	left: 5%;
}

label {
	min-width: 80px;
}

input::placeholder {
	font-weight: normal;
}

#stonks {
	top: 50%;
	transform: translateY(-50%);
}
</style>