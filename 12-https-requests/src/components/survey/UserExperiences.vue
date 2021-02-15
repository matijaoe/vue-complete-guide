<template>
	<section>
		<base-card>
			<h2>Submitted Experiences</h2>
			<div>
				<base-button @click="loadExperiences"
					>Load Submitted Experiences</base-button
				>
			</div>
			<h4 v-if="isLoading">Loading...</h4>
			<h4 v-else-if="!isLoading && results && results.length === 0">
				No stored experiences found. Start adding some survey results
				first.
			</h4>
			<ul v-else-if="!isLoading && results && results.length > 0">
				<survey-result
					v-for="result in results"
					:key="result.id"
					:name="result.name"
					:rating="result.rating"
				></survey-result>
			</ul>
		</base-card>
	</section>
</template>

<script>
import SurveyResult from './SurveyResult.vue';
import axios from 'axios';

export default {
	components: {
		SurveyResult,
	},
	data() {
		return {
			databaseUrl:
				'https://vue-http-demo-d5980-default-rtdb.firebaseio.com/surveys.json',
			results: [],
			isLoading: false,
		};
	},
	methods: {
		async loadExperiences() {
			this.isLoading = true;
			const { data } = await axios.get(this.databaseUrl);
			this.isLoading = false;

			const results = [];
			for (const id in data) {
				const { name, rating } = data[id];
				results.unshift({
					id,
					name,
					rating,
				});
			}
			this.results = results;
			console.log(results);
		},
	},
	mounted() {
		this.loadExperiences();
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>