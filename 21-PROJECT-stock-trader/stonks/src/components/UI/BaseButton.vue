<template>
	<button
		class="py-2 px-3 rounded-md focus:outline-none focus:ring-2 focus:ring-green-300 disabled:opacity-50 transition font-medium"
		:class="styleBtn"
	>
		<slot></slot>
	</button>
</template>

<script>
export default {
	props: ['mode'],
	computed: {
		styleBtn() {
			if (this.mode === 'light') {
				return ['bg-green-200', 'text-green-800', 'hover:bg-green-300'];
			} else {
				return ['hover:bg-green-200'];
			}
		},
	},
};
</script>