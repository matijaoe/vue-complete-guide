<template>
	<h2>My Course Goal</h2>
	<!-- Task 1: Output your main course goal with help of the composition API -->
	<!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
	<h3 v-if="courseData.goalShown">{{ courseData.courseGoal }}</h3>
	<!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
	<button @click="toggleGoalVisibility">Toggle Goal</button>
	<!-- Task 3: Manage data in three ways -->
	<!-- => Separate refs -->
	<!-- => Ref Object -->
	<!-- => Reactive Object -->
	<!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';
// import { ref } from 'vue';

export default {
	//* Options API
	// data() {
	// 	return {
	// 		goalShown: false,
	// 		courseGoal: 'different strokes for different folkes',
	// 	};
	// },
	// methods: {
	// 	toggleGoalVisibility() {
	// 		this.goalShown = !this.goalShown;
	// 	},
	// },
	//* reactive
	setup() {
		const courseData = reactive({
			courseGoal: 'different strokes for different folkes',
			goalShown: false,
		});

		function toggleGoalVisibility() {
			courseData.goalShown = !courseData.goalShown;
		}
		return { courseData, toggleGoalVisibility };
	},
	//* reactive with toRefs
	// setup() {
	// 	const courseData = reactive({
	// 		courseGoal: 'different strokes for different folkes',
	// 		goalShown: false,
	// 		toggleGoalVisibility() {
	// 			this.goalShown = !this.goalShown;
	// 		},
	// 	});
	// 	const goalRef = toRefs(courseData);
	// 	return {
	// 		courseGoal: goalRef.courseGoal,
	// 		goalShown: goalRef.goalShown,
	// 		toggleGoalVisibility: goalRef.toggleGoalVisibility,
	// 	};
	// },
	//* ref object
	// setup() {
	// 	const courseData = ref({
	// 		courseGoal: 'different strokes for different folkes',
	// 		goalShown: false,
	// 		toggleGoalVisibility() {
	// 			this.goalShown = !this.goalShown;
	// 		},
	// 	});
	// 	return { courseData };
	// },
	//* ref object 2
	// setup() {
	// 	const courseData = ref({
	// 		courseGoal: 'different strokes for different folkes',
	// 		goalShown: false,
	// 	});

	// 	function toggleGoalVisibility() {
	// 		courseData.value.goalShown = !courseData.value.goalShown;
	// 	}
	// 	return { courseData, toggleGoalVisibility };
	// },
	//* sepereate refs
	// setup() {
	// 	const courseGoal = ref('different strokes for different folkes');
	// 	const goalVisibility = ref(false);
	// 	const toggleGoalVisibility = () => {
	// 		goalVisibility.value = !goalVisibility.value;
	// 	};
	// 	return {
	// 		courseGoal,
	// 		toggleGoalVisibility,
	// 		goalShown: goalVisibility,
	// 	};
	// },
};
</script>

<style>
html {
	font-family: sans-serif;
}
body {
	margin: 3rem;
	text-align: center;
	background: #222;
	color: white;
}
</style>