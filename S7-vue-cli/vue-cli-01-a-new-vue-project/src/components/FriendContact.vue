<template >
	<li>
		<h2>{{ friend.name }}</h2>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>
		<ul v-show="detailsAreVisible">
			<li><strong>Phone:</strong>{{ friend.phone }}</li>
			<li><strong>Email:</strong>{{ friend.email }}</li>
		</ul>
	</li>
</template>

<script>
export default {
	data() {
		return {
			detailsAreVisible: false,
			friend: {
				id: 'marin1',
				name: 'Marin Muheljič',
				phone: '096 72941 889',
				email: 'muhamuhu@mail.com',
			},
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
	},
};
</script>
