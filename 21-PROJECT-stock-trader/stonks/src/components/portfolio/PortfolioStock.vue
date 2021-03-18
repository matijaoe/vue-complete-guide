<template>
	<base-container class="w-full">
		<template #header>
			<div class="flex justify-between items-center mb-2">
				<div class="flex items-baseline space-x-4">
					<span class="mr font-display text-3xl">{{ name }}</span>
					<span class="opacity-30">{{ ticker }}</span>
				</div>
				<div class="flex items-center space-x-2">
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
					<span
						class="text-4xl font-display"
						:class="{
							'text-green-500': change > 0,
							'text-red-400': change < 0,
						}"
						>${{ price }}</span
					>
				</div>
			</div>
		</template>
		<template #default>
			<div class="flex flex-col space-y-4">
				<div class="flex gap-2 items-baseline">
					<span>You have</span>
					<span class="text-green-400 text-lg font-medium">
						{{ qnt }} stocks
					</span>
					<span>worth</span>
					<span class="text-green-400 text-lg font-medium">
						${{ formattedTotal }}
					</span>
				</div>

				<div
					class="flex flex-col md:flex-row items-center justify-between relative gap-4 md:gap-2 pb-2"
				>
					<input
						type="number"
						v-model.trim.number="sellAmount"
						placeholder="Quantity"
						class="outline-none bg-transparent placeholder-green-200 py-1 text-2xl text-center font-medium"
						@input="validateAmount"
						@keydown.enter="sellStock"
						@blur="clearIfError"
					/>
					<div class="w-full md:w-auto">
						<base-button
							mode="light"
							class="px-8 w-full md:w-auto"
							@click="sellStock"
							:disabled="!isValid"
						>
							Sell
							<span v-if="isValid && sellAmount">
								for ${{ formattedOrderTotal }}
							</span>
						</base-button>
					</div>
					<p
						v-if="error"
						class="text-xs text-red-400 absolute -bottom-3 w-full text-center md:text-left"
					>
						{{ error }}
					</p>
				</div>
			</div>
		</template>
	</base-container>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
	props: ['name', 'ticker', 'price', 'change'],
	data() {
		return {
			sellAmount: null,
			isValid: true,
			error: null,
		};
	},
	methods: {
		sellStock() {
			this.validateAmount();

			if (this.isValid) {
				const order = {
					ticker: this.ticker,
					qnt: this.sellAmount,
					cost: this.sellAmount * this.price,
				};

				console.log(
					'sell ' + this.sellAmount + ' stocks of ' + this.ticker
				);
				this.$store.dispatch('portfolio/sellStock', order);

				this.sellAmount = '';
				this.isValid = true;
				this.error = null;
			}
		},
		validateAmount() {
			const qnt = this.sellAmount;

			try {
				if (!Number.isInteger(+qnt)) {
					this.isValid = false;
					throw Error(`Quantity must be a whole number`);
				} else if (qnt < 1) {
					this.isValid = false;
					throw Error(`Minimum order is 1 stock`);
				} else if (qnt > this.qnt) {
					this.isValid = false;
					throw Error(`You can't sell more than you have`);
				} else {
					this.isValid = true;
					this.error = null;
				}
			} catch (err) {
				this.error = err.message;
			}
		},
		clearIfError() {
			if (this.error || !this.isValid) {
				this.sellAmount = '';
				this.error = null;
				this.isValid = true;
			}
		},
	},
	computed: {
		...mapGetters('portfolio', {
			portolioStocks: 'stocks',
			funds: 'funds',
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
		qnt() {
			const stock = this.portolioStocks.find(
				(stock) => stock.ticker === this.ticker
			);
			return stock.qnt;
		},
		formattedTotal() {
			return (this.qnt * this.price).toLocaleString();
		},
		formattedOrderTotal() {
			return (parseInt(this.sellAmount) * this.price).toLocaleString();
		},
	},
};
</script>

<style scoped>
input {
	max-width: 120px;
}

input::placeholder {
	font-weight: normal;
}
</style>