const app = Vue.createApp({
	data() {
		return {
			number: 0,
			randomshit:
				'Random msg to show how computed doesnt run when result is unchanged',
			timerId: '',
		};
	},
	computed: {
		result() {
			// console.log('Result is ' + this.number);
			if (this.number < 37) {
				return 'Not there yet';
			} else if (this.number > 37) {
				return 'Too much!';
			} else {
				return this.number;
			}
		},
	},
	watch: {
        // watches computed property, sets timeout only after change of result, not number
		result() {
            console.log("Watched executing")
			this.timerId = setTimeout(() => {
				console.log('Result reset to 0');
				this.number = 0;
			}, 5000);
		},
	},
	methods: {
		add(n) {
			clearTimeout(this.timerId);
			this.number += n;
		},
	},
});

vm = app.mount('#assignment');
