<template>
	<ul>
		<LearningResource
			v-for="{ id, title, description, link } in resources"
			:key="id"
			:id="id"
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
	inject: ['resources'],
};
</script>

<style scoped>
ul {
	list-style: none;
}
</style>