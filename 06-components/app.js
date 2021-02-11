const app = Vue.createApp({
	data() {
		return {
			friends: [
				{
					id: 'marin1',
					name: 'Marin Muheljić',
					phone: '095 372 8167',
					email: 'dunelover69@hot.com',
				},
				{
					id: 'marian1',
					name: 'Marian Babić',
					phone: '097 867 4990',
					email: 'twinlover2@mail.com',
				},
			],
		};
	},
});

app.component('friend-contact', {
	template: `
    <ul>
        <li>
            <h2>{{ friend.name }}</h2>
            <button @click="toggleDetails">
                {{ detailsAreVisible ? 'Hide' : 'Show'}} Details
            </button>
            <ul v-show="detailsAreVisible">
                <li><strong>Phone:</strong> {{ friend.phone }}</li>
                <li><strong>Email:</strong> {{ friend.email }}</li>
            </ul>
        </li>
    </ul>
    `,
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'marin1',
				name: 'Marin Muheljić',
				phone: '095 372 8167',
				email: 'dunelover69@hot.com',
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
});

const vm = app.mount('#app');
