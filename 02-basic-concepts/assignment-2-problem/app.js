const app = Vue.createApp({
	data() {
		return {
			carBrand: 'every brand ever',
			carModel: '',
		};
	},
	methods: {
		showAlert() {
			alert(
				'You clicked the button at ' + new Date().toLocaleTimeString()
			);
		},
		enterCarBrand(event) {
			this.carBrand = event.target.value;
		},
		enterCarModel(event) {
			this.carModel = event.target.value;
		},
	},
});

app.mount('#assignment');
