<template>
	<base-container class="w-full">
		<template #header>
			<div class="flex justify-between items-center">
				<div class="flex items-center space-x-2">
					<span class="text-2xl">{{ name }}</span>
					<span class="text-2xl">({{ ticker }})</span>
				</div>
				<span class="text-2xl ml-auto">${{ price }}</span>
			</div>
		</template>
		<template #default>
			<div class="flex flex-col space-y-4">
				<div class="flex gap-2 items-baseline">
					<span>You have</span>
					<span class="text-green-400 font-semibold text-lg"
						>{{ amount }} stocks</span
					>
					<span>worth</span>
					<span class="text-green-400 font-semibold text-lg"
						>${{ (amount * price).toLocaleString() }}</span
					>
				</div>

				<div class="flex items-center justify-between gap-8 relative">
					<input
						type="text"
						v-model.trim.number="sellAmount"
						placeholder="Quantity"
						class="outline-none bg-transparent placeholder-green-200 p-1 text-lg border-b-2 border-solid border-green-500 text-center"
						@input="validateAmount"
						@keydown.enter="sellStock"
					/>
					<div class="">
						<base-button
							class="px-8"
							@click="sellStock"
							:disabled="!isValid"
						>
							Sell
							<span v-if="sellAmount > 0 && sellAmount <= amount">
								for ${{ (sellAmount * price).toLocaleString() }}
							</span>
						</base-button>
					</div>
					<p
						v-if="!isValid"
						class="text-xs text-red-500 absolute -bottom-4"
					>
						{{ error }}
					</p>
				</div>
			</div>
		</template>
	</base-container>
</template>

<script>
export default {
	props: ['name', 'ticker', 'price', 'amount'],
	data() {
		return {
			sellAmount: null,
			isValid: true,
			error: null,
		};
	},
	methods: {
		sellStock() {
			console.log(this.isValid);

			if (this.isValid) {
				const order = {
					ticker: this.ticker,
					amount: this.sellAmount,
					cost: this.sellAmount * this.price,
				};

				console.log('sell ' + this.sellAmount + ' of ' + this.ticker);
				this.$store.dispatch('portfolio/spendFunds', order);

				this.sellAmount = '';
				this.isValid = true;
				this.error = null;
			} else {
				console.log('you cant sell more than you have!');
				//todo shake card or button as an error
			}
		},
		validateAmount() {
			const qnt = this.sellAmount;
			// console.log(`Sell ${qnt} stocks`);

			try {
				if (qnt === '') {
					this.error = null;
					return;
				}
				if (isNaN(+qnt)) {
					this.isValid = false;
					throw Error(`Your sell amount must be a number`);
				} else if (qnt <= 0) {
					this.isValid = false;
					throw Error(`Minimum order is at least 1 stock`);
				} else if (qnt > this.amount) {
					this.isValid = false;
					throw Error(`You can't sell more than you have`);
				} else {
					console.log('just right 💚');
					this.isValid = true;
					this.error = null;
				}
			} catch (err) {
				this.error = err.message;
			}
		},
	},
};
</script>

<style scoped>
input {
	max-width: 80px;
}
</style>