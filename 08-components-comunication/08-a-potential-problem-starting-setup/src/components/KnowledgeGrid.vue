<template>
	<ul>
		<knowledge-element
			v-for="topic in topics"
			:key="topic.id"
			:id="topic.id"
			:topic-name="topic.title"
			:description="topic.description"
		></knowledge-element>
	</ul>
</template>

<script>
export default {
  // incect data provided by higher up component
	inject: ['topics'],
};
</script>