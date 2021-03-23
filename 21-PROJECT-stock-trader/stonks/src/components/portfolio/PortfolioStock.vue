<template>
	<base-container class="w-full">
		<template #header>
			<div class="flex justify-between items-center mb-2">
				<div class="flex items-top space-x-4">
					<span class="mr font-display text-3xl">{{ name }}</span>
					<span class="opacity-30">{{ ticker }}</span>
				</div>
				<div class="flex items-center space-x-2">
					<trending-up v-if="change && change > 0"></trending-up>
					<trending-down
						v-else-if="change && change < 0"
					></trending-down>
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
					<span
						class="text-green-400 text-lg font-medium cursor-pointer"
						@click="sellAmount = qnt"
					>
						{{ qnt }} stocks
					</span>
					<span>worth</span>
					<span class="text-green-400 text-lg font-medium">
						${{ formattedTotal }}
					</span>
				</div>

				<div class="flex flex-row gap-4 relative pb-2">
					<label class="flex items-center flex-1">
						<input
							type="number"
							v-model.trim.number="sellAmount"
							placeholder="Quantity"
							class="outline-none rounded-md placeholder-green-300 px-2 text-xl w-full h-full bg-transparent focus:bg-green-100 py-2 font-medium"
							@input="validateAmount"
							@keydown.enter="sellStock"
							@blur="clearIfError"
						/>
					</label>

					<div class="flex">
						<base-button
							mode="light"
							class="px-5 flex-1"
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
						class="text-xs text-red-400 absolute -bottom-3 md:-bottom-3 w-full sm:text-center md:text-left px-2"
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
					'Sell ' + this.sellAmount + ' stocks of ' + this.ticker
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
			portfolioStocks: 'stocks',
			funds: 'funds',
		}),
		qnt() {
			const stock = this.portfolioStocks.find(
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
input::placeholder {
	font-weight: normal;
}
</style>