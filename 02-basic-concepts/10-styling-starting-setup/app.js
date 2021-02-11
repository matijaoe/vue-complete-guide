const app = Vue.createApp({
	data() {
		return {
			boxASelected: false,
			boxBSelected: false,
			boxCSelected: false,
		};
	},
	methods: {
		boxToggleSelected(box) {
			if (box == 'A') {
				this.boxASelected = !this.boxASelected;
				console.log('A clicked');
			} else if (box == 'B') {
				this.boxBSelected = !this.boxBSelected;
				console.log('B clicked');
			} else if (box == 'C') {
				this.boxCSelected = !this.boxCSelected;
				console.log('C clicked');
			}
		},
	},
	computed: {
		boxAClasses() {
			return {active: this.boxASelected};
		},
	},
});

app.mount('#styling');
