const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			confirmedName: '',
		};
	},
	methods: {
		calculateTime() {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const seconds =
				now.getSeconds() < 10
					? '0' + now.getSeconds()
					: now.getSeconds();
			const time = `${hours}:${minutes}:${seconds}`;
			return time;
		},
		setName(event) {
			this.name = event.target.value;
		},
		confirmName() {
			this.confirmedName = this.name;
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		resetInput() {
			this.name = '';
		},
		methodDate() {
			return 'fafdsfds';
		},
	},
	// computed is like a data property (YOU DONT CALL IT), name it like property, not method
	computed: {
		fullName() {
			console.log('Running output full name');
			if (this.name == '') {
				return '';
			}
			return `${this.name} Osrečki`;
		},
		computedTime() {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const seconds =
				now.getSeconds() < 10
					? '0' + now.getSeconds()
					: now.getSeconds();
			const time = `${hours}:${minutes}:${seconds}`;
			return time;
		},
	},
});

// `this` points to the vm instance
const vm = app.mount('#events');
// vm.counter
// vm.$data.counter;
