<template>
	<div class="row">
		<section>
			<base-card mode="full">
				<div class="controls">
					<base-button mode="flat">Refresh</base-button>
					<base-button link :to="{ name: 'register' }"
						>Register as coach
					</base-button>
				</div>
			</base-card>
			<CoachFilter @change-filter="setFilters" />
			<ul v-if="hasCoaches">
				<coach-item
					v-for="coach in filteredCoaches"
					:key="coach.id"
					:id="coach.id"
					:first-name="coach.firstName"
					:last-name="coach.lastName"
					:rate="coach.hourlyRate"
					:areas="coach.areas"
				></coach-item>
			</ul>
			<h3 v-else>No coaches found.</h3>
		</section>
	</div>
</template>

<script>
import CoachItem from '../../components/coaches/CoachItem';
import CoachFilter from '../../components/coaches/CoachFilter';

export default {
	components: {
		CoachItem,
		CoachFilter,
	},
	data() {
		return {
			activeFilters: {
				frontend: true,
				backend: true,
				career: true,
			},
		};
	},
	computed: {
		filteredCoaches() {
			const coaches = this.$store.getters['coaches/coaches'];
			return coaches.filter((coach) => {
				// if (
				// 	this.activeFilters.frontend &&
				// 	coach.areas.includes('frontend')
				// ) {
				// 	return true;
				// }
				// if (
				// 	this.activeFilters.backend &&
				// 	coach.areas.includes('backend')
				// ) {
				// 	return true;
				// }
				// if (
				// 	this.activeFilters.career &&
				// 	coach.areas.includes('career')
				// ) {
				// 	return true;
				// }
				// return false;

				const selectedFilters = Object.keys(this.activeFilters).reduce(
					(arr, filter) => {
						this.activeFilters[filter] && arr.push(filter);
						return arr;
					},
					[]
				);

				for (const filter of selectedFilters) {
					if (coach.areas.includes(filter)) {
						return true;
					}
				}
				return false;
			});
		},
		hasCoaches() {
			return this.$store.getters['coaches/hasCoaches'];
		},
	},
	methods: {
		setFilters(updatedFilters) {
			this.activeFilters = updatedFilters;
		},
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(40rem, 1fr));
	gap: 2.4rem;
	justify-content: center;
}

.controls {
	display: flex;
	justify-content: space-between;
}
</style>