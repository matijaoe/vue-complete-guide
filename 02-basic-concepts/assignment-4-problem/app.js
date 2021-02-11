const app = Vue.createApp({
	data() {
		return {
			user: '',
			isVisible: true,
			visibleClass: 'visible',
			hiddenClass: 'hidden',
			chosenColor: 'pink',
		};
	},
	methods: {
		toggleVisible() {
			this.isVisible = !this.isVisible;
		},
		clearInput(e) {
			e.target.value = '';
		},
	},
	computed: {
		chosenColorClass() {
			if (this.chosenColor == '') return '';
			return this.chosenColor + 'Class';
		},
		isComputedVisible() {
			if (this.isVisible) {
				return this.visibleClass;
			} else {
				return this.hiddenClass;
			}
		},
		selectedUser() {
			switch (this.user) {
				case 'user1':
					return this.user;
				case 'user2':
					return this.user;
			}
		},
		paraClasses() {
			return {
				user1: this.user === 'user1',
				user2: this.user === 'user2',
				visible: this.isVisible,
				hidden: !this.isVisible,
			};
		},
	},
});

const vm = app.mount('#assignment');
