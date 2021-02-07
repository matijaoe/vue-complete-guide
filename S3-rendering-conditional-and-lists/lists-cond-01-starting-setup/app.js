const app = Vue.createApp({
	data() {
		return {
			goals: [],
			currentGoal: '',
		};
	},
	methods: {
		addGoal() {
			console.log(this.currentGoal);
			if (this.currentGoal != '') {
				this.goals.push(this.currentGoal);
				this.currentGoal = '';
			}
		},
		removeGoal(idx) {
			this.goals.splice(idx, 1);
		},
	},
});

vm = app.mount('#user-goals');
