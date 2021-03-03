<template>
	<base-card mode="full" color="color">
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
	margin-bottom: 1rem;
	font-family: var(--font-display);
	font-weight: normal;
}

.filters {
	display: flex;
	gap: 1.6rem;
}

.filter-option {
	font-size: 1.8rem;
	padding: 0.75em;
	border-radius: 0.8rem;
}

.filter-option:hover {
	background-color: var(--pink-2);
	color: var(--purple-3);
}

.filter-option label {
	margin-left: 1.2rem;
	user-select: none;
}

.filter-option.active label {
	font-weight: bold;
}

input {
	transform: scale(1.4);
}

@media only screen and (max-width: 600px) {
	.filter-option {
		font-size: 1.6rem;
		padding: 0.55em;
	}

	.filter-option label {
		margin-left: 0.8rem;
		user-select: none;
	}
}
@media only screen and (max-width: 400px) {
	.filter-option {
		font-size: 1.6rem;
		padding: 0.4em;
	}
	input {
		transform: scale(1.2);
	}
}
</style>