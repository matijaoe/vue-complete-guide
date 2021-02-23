<template>
	<base-card mode="full">
		<h2>Find your coach</h2>
		<div class="filters">
			<span class="filter-option">
				<input
					type="checkbox"
					id="frontend"
					checked
					@change="setFilter"
				/>
				<label for="frontend">Frontend</label>
			</span>
			<span class="filter-option">
				<input
					type="checkbox"
					id="backend"
					checked
					@change="setFilter"
				/>
				<label for="backend">Backend</label>
			</span>
			<span class="filter-option">
				<input
					type="checkbox"
					id="career"
					checked
					@change="setFilter"
				/>
				<label for="career">Career</label>
			</span>
		</div>
	</base-card>
</template>

<script>
export default {
	emits: ['change-filter'],
	data() {
		return {
			filters: {
				frontend: true,
				backend: true,
				career: true,
			},
		};
	},
	methods: {
		setFilter(event) {
			const inputId = event.target.id;
			const isActive = event.target.checked;
			const updatedFilters = {
				...this.filters,
				[inputId]: isActive,
			};
			this.filters = updatedFilters;
			this.$emit('change-filter', updatedFilters);
		},
	},
};
</script>

<style scoped>
h2 {
	margin-bottom: 1.6rem;
}

.filters {
	display: flex;
	gap: 2rem;
}

.filter-option {
	/* background: var(--pink-2); */
	padding: 0.5em;
}

.filter-option label {
	margin-left: 0.8rem;
	user-select: none;
}

.filter-option.active label {
	font-weight: bold;
}

h2 {
	margin: 0.5rem 0;
}
</style>