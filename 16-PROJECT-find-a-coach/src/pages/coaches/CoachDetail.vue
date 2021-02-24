<template>
	<section>
		<base-card>
			<h2>{{ fullName }}</h2>
			<h3>${{ rate }}/hour</h3>
		</base-card>
	</section>
	<section>
		<base-card>
			<header>
				<h2>Interested? Reach out now!</h2>
				<base-button link :to="contactLink">Contact</base-button>
			</header>
			<RouterView />
		</base-card>
	</section>
	<section>
		<base-card>
			<div class="badges">
				<base-badge
					v-for="area in areas"
					:key="area"
					:type="area"
					:title="area"
				></base-badge>
			</div>
			<p>{{ description }}</p>
		</base-card>
	</section>
</template>

<script>
export default {
	props: ['id'],
	data() {
		return {
			selectedCoach: null,
		};
	},
	computed: {
		fullName() {
			return `${this.selectedCoach.firstName} ${this.selectedCoach.lastName}`;
		},
		areas() {
			return this.selectedCoach.areas;
		},
		rate() {
			return this.selectedCoach.hourlyRate;
		},
		description() {
			return this.selectedCoach.description;
		},
		contactLink() {
			return {
				name: 'coach-contact',
				params: { id: this.id },
			};
		},
	},
	created() {
		this.selectedCoach = this.$store.getters['coaches/coaches'].find(
			(coach) => coach.id === this.id
		);
	},
};
</script>

<style scoped>
.badges {
	margin-bottom: 1.6rem;
}
h2 {
	margin-bottom: 0.5em;
	color: var(--purple-2);
}

h3 {
	margin-bottom: 0.5em;
}

</style>