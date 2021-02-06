const app = Vue.createApp({
	data() {
		return {
			counter: 0,
			name: '',
			lastName: '',
			confirmedName: '',
			// fullname: '',
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
			const ms = now.getMilliseconds();
			const time = `${hours}:${minutes}:${seconds}:${ms}`;
			return time;
		},
		setName(event) {
			this.name = event.target.value;
		},
		confirmName() {
			if (this.name === '' || this.lastName === '') {
				this.confirmedName = '';
			} else {
				this.confirmedName = this.name + ' ' + this.lastName;
			}
		},
		add(num) {
			this.counter = this.counter + num;
		},
		reduce(num) {
			this.counter = this.counter - num;
		},
		resetInput() {
			this.name = '';
			this.lastName = '';
		},
		methodDate() {
			return 'fafdsfds';
		},
	},
	watch: {
		counter(value) {
			if (value > 50 || value < 0) {
				this.counter = 0;
			}
		},
		// name(newValue, oldValue) {
		// 	console.log('first');
		// 	if (newValue == '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = newValue + ' ' + this.lastName;
		// 	}
		// },
		// lastName(newValue, oldValue) {
		// 	console.log('last');
		// 	if (newValue == '') {
		// 		this.fullname = '';
		// 	} else {
		// 		this.fullname = this.name + ' ' + newValue;
		// 	}
		// },
	},
	// computed is like a data property (YOU DONT CALL IT), name it like property, not method
	computed: {
		fullname() {
			console.log('Running output full name');
			if (this.name == '' && this.lastName == '') {
				return '';
			}
			return `${this.name} ${this.lastName}`;
		},
		computedTime() {
			const now = new Date();
			const hours = now.getHours();
			const minutes = now.getMinutes();
			const seconds =
				now.getSeconds() < 10
					? '0' + now.getSeconds()
					: now.getSeconds();
			const ms = now.getMilliseconds();
			const time = `${hours}:${minutes}:${seconds}:${ms}`;
			return time;
		},
	},
});

// `this` points to the vm instance
const vm = app.mount('#events');
// vm.counter
// vm.$data.counter;
