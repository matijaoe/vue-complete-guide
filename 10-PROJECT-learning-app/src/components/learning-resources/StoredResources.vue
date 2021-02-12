<template>
	<ul>
		<LearningResource
			v-for="{ id, title, description, link } in resources"
			:key="id"
			:title="title"
			:description="description"
			:link="link"
		/>
	</ul>
</template>

<script>
import LearningResource from './LearningResource.vue';
export default {
	components: {
		LearningResource,
	},
	props: ['resources'],
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
	margin: auto;
	max-width: 40rem;
}
</style>