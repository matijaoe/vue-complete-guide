<template>
	<ul>
		<li :class="{ active: modelValue === 'poor' }">
			<button type="button" @click="activate('poor')">Poor</button>
		</li>
		<li :class="{ active: modelValue === 'average' }">
			<button type="button" @click="activate('average')">Average</button>
		</li>
		<li :class="{ active: modelValue === 'great' }">
			<button type="button" @click="activate('great')">Great</button>
		</li>
	</ul>
</template>

<script>
export default {
	props: ['modelValue'],
	emits: ['update:modelValue'],
	// data() {
	// 	return {
	// 		// wont react to changes in this.modelValue
	// 		activeOption: this.modelValue,
	// 	};
	// },
	// we dont even need computed if we use modelValue instead of activeOption directly in html template
	// computed: {
	// 	activeOption() {
	// 		// will update activeOption after every modelValue changes (after we emit the event with the change)
	// 		return this.modelValue;
	// 	},
	// },
	methods: {
		activate(option) {
			// v-model will catch these events and update modelValue (this.rating in Form in this case)
			this.$emit('update:modelValue', option);
		},
	},
};
</script>

<style scoped>
.active {
	border-color: blueviolet;
}

.active button {
	color: blueviolet;
}

ul {
	list-style: none;
	margin: 0.5rem 0;
	padding: 0;
	display: flex;
}

li {
	margin: 0 1rem;
	border: 2px solid gray;
	padding: 1rem;
	display: flex;
	align-items: center;
}

button {
	font: inherit;
	border: none;
	background: transparent;
	cursor: pointer;
}
</style>