<template>
	<h2>My Course Goal</h2>
	<!-- Task 1: Output your main course goal with help of the composition API -->
	<!-- Don't hardcode it into the template, instead hardcode it into the JS code -->
	<h3 v-if="goal.goalShown">{{ goal.courseGoal }}</h3>
	<!-- Task 2: Toggle (show/ hide) the goal with help of the button  -->
	<button @click="goal.toggleGoalVisibility">Toggle Goal</button>
	<!-- Task 3: Manage data in three ways -->
	<!-- => Separate refs -->
	<!-- => Ref Object -->
	<!-- => Reactive Object -->
	<!-- Task 4: Also solve the assignment with the Options API -->
</template>

<script>
import { reactive } from 'vue';
export default {
	setup() {
		const goal = reactive({
			courseGoal: 'fuck hoes, get monney',
			goalShown: true,
			toggleGoalVisibility() {
				this.goalShown = !this.goalShown;
			},
		});

		return {
			goal,
		};
	},
	// setup() {
	// 	const goal = reactive({
	// 		courseGoal: 'fuck hoes, get monney',
	// 		goalShown: true,
	// 		toggleGoalVisibility() {
	// 			this.goalShown = !this.goalShown;
	// 		},
	// 	});

	// 	const goalRef = toRefs(goal);

	// 	return {
	// 		courseGoal: goalRef.courseGoal,
	// 		goalShown: goalRef.goalShown,
	// 		toggleGoalVisibility: goalRef.toggleGoalVisibility,
	// 	};
	// },
	// setup() {
	// 	const goal = ref({
	// 		courseGoal: 'fuck hoes, get monney',
	// 		goalShown: true,
	// 		toggleGoalVisibility() {
	// 			this.goalShown = !this.goalShown;
	// 		},
	// 	});

	// 	return { goal };
	// },
	// setup() {
	// 	const courseGoal = ref('fuck hoes');
	// 	const goalVisibility = ref(true);

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