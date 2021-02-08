const app = Vue.createApp({
	data() {
		return {
			currentUserInput: '',
			message: 'Vue is great!',
		};
	},
	methods: {
		saveInput(event) {
			this.currentUserInput = event.target.value;
		},
		setText() {
			// this.message = this.currentUserInput;
			// now we only store (directly) it when we need it
			this.message = this.$refs.userText.value;
		},
	},
	beforeCreate() {
		console.log('Before create');
	},
	created() {
		console.log('Created');
	},
	beforeMount() {
		console.log('Before mount');
	},
	mounted() {
		console.log('Mounted');
	},
	beforeUpdate() {
		console.log('Before update');
	},
	updated() {
		console.log('Updated');
	},
	beforeUnmount() {
		console.log('Before unmount');
	},
	unmounted() {
		console.log('Unmounted');
	},
});
const vm = app.mount('#app');

setTimeout(() => {
	app.unmount();
}, 3000);

const app2 = Vue.createApp({
	template: `
    <p>{{ favoriteMeal }}</p>
    `,
	data() {
		return {
			favoriteMeal: 'zucchini with whole-grain rice and chicken breast',
		};
	},
});
app2.mount('#app2');

// ... Javascript Proxy

const data = {
	msg: 'Hello!',
	longMsg: 'Hello! World!',
};

const handler = {
	set(target, key, value) {
		// console.log(target); // object that was wrapped
		// console.log(key); // property that i set new value to
		// console.log(value); // value that was set
		if (key === 'msg') {
			target.longMsg = value + ' World!';
		}
		target.msg = value;
	},
};

const proxy = new Proxy(data, handler);

proxy.msg = 'Bye Felicia';
