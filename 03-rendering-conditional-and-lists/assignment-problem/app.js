const app = Vue.createApp({
	data() {
		return {
			tasks: [],
			enteredTask: '',
			listVisible: true,
		};
	},
	methods: {
		addTask() {
			if (!this.enteredTask) return;
			task = {
				name: this.enteredTask,
				done: false,
				id: Math.random().toString(16).slice(2),
			};
			this.enteredTask = '';
			this.tasks.push(task);
		},
		toggleDone(id) {
			const clickedTask = this.tasks.find((obj) => obj.id === id);
			clickedTask.done = !clickedTask.done;
		},
		toggleListVisibility() {
			this.listVisible = !this.listVisible;
		},
	},
	computed: {
		btnVisibilityCaption() {
			if (this.listVisible) {
				return 'Hide list 👻';
			} else {
				return 'Show list 🥝';
			}
		},
	},
});

const vm = app.mount('#assignment');
