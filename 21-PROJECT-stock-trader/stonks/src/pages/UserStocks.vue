<template>
	<section class="px-4">
		<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
			<StockItem
				v-for="stock in stocks"
				:key="stock.ticker"
				:stock="stock"
			/>
		</div>
	</section>
</template>

<script>
import StockItem from '../components/stocks/StockItem.vue';
import { mapGetters } from 'vuex';
export default {
	components: { StockItem },
	computed: {
		...mapGetters(['stocks']),
	},
};
</script>

<style scoped>
</style>