<template>
	<base-card>
		<ol>
			<li v-for="(goal, idx) in goals" :key="goal">
				<!-- <h2>{{ goal }}</h2> -->
				<!-- properties defined on slot are merged in object that the parent template can use -->
				<slot :item="goal" :index="idx" another-prop="..."></slot>
			</li>
		</ol>
	</base-card>
</template>

<script>
export default {
	data() {
		return {
			goals: ['buy bitcoin', 'make money'],
		};
	},
};
</script>