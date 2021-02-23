<template>
	<span class="badge" :class="type">
		{{ text }}
	</span>
</template>

<script>
export default {
	props: ['type', 'title'],
	computed: {
		text() {
			return this.title.toUpperCase();
		},
	},
};
</script>

<style scoped>
.badge {
	background-color: #ccc;
	color: #252525;
	border-radius: 100rem;
	padding: 0.5em 1.2em;
	display: inline-block;
	margin-right: 0.5rem;
	font-size: 1rem;
	font-weight: bold;
}

.frontend {
	background-color: #3d008d;
	color: white;
}

.backend {
	background-color: #71008d;
	color: white;
}

.career {
	background-color: #8d006e;
	color: white;
}
</style>