<template>
	<!-- todo filter -->
	<base-section>
		<page-title title="Buy fresh stonks"></page-title>
		<div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4">
			<StockItem
				v-for="stock in stocks"
				:key="stock.ticker"
				:ticker="stock.ticker"
				:name="stock.name"
				:price="stock.price"
				:change="stock.change"
			/>
		</div>
	</base-section>
</template>

<script>
import StockItem from '../components/stocks/StockItem.vue';
import { mapGetters } from 'vuex';
export default {
	components: { StockItem },
	computed: {
		...mapGetters('stocks', ['stocks']),
	},
};
</script>

<style scoped>
</style>