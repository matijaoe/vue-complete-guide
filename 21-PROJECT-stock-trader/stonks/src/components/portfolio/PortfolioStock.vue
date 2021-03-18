<template>
	<base-container class="w-full">
		<template #header>
			<div class="flex justify-between items-center mb-2">
				<div class="flex items-center space-x-4 text-2xl">
					<span class="font-semibold mr">{{ name }}</span>
					<span class="opacity-10">{{ ticker }}</span>
				</div>
				<span class="text-2xl ml-auto">${{ price }}</span>
			</div>
		</template>
		<template #default>
			<div class="flex flex-col space-y-4">
				<div class="flex gap-2 items-baseline">
					<span>You have</span>
					<span class="text-green-400 font-semibold text-lg">
						{{ qnt }} stocks
					</span>
					<span>worth</span>
					<span class="text-green-400 font-semibold text-lg">
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
						class="outline-none bg-transparent placeholder-green-200 py-1 text-2xl text-center font-semibold"
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
						class="text-xs text-red-400 absolute -bottom-3 w-full font-semibold text-center md:text-left"
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
	props: ['name', 'ticker', 'price'],
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
					throw Error(`Minimum order is at least 1 stock`);
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
			if (this.erorr || !this.isValid) {
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