const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirmedName: '',
			statusMsg: `You loaded this page on ${new Date().toLocaleString()}`,
		};
	},
	methods: {
		increment(num) {
			this.counter += num;
		},

		decrement(num) {
			if (this.counter < 1) return;
			this.counter -= num;
		},
		setName(event, lastName) {
			this.name = `${event.target.value} ${lastName}`;
		},
		confirmInput() {
			this.confirmedName = this.name;
			console.log(this.confirmedName);
		},
		submitForm() {
			alert('Submitted');
		},
	},
});

app.mount('#events');
