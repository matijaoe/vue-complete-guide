<template>
	<li>
		<h2>{{ name }} {{ isFavorite ? '(Favorite)' : '' }}</h2>

		<button @click="toggleFavorite">Toggle Favorite</button>
		<button @click="toggleDetails">
			{{ detailsAreVisible ? 'Hide' : 'Show' }} Details
		</button>

		<ul v-if="detailsAreVisible">
			<li>
				<strong>Phone:</strong>
				{{ phoneNumber }}
			</li>
			<li>
				<strong>Email:</strong>
				{{ emailAddress }}
			</li>
		</ul>
		<button @click="$emit('delete', this.id)">Delete</button>
	</li>
</template>

<script>
export default {
	// props: ['name', 'phoneNumber', 'emailAddress'],
	props: {
		id: {
			type: String,
			required: true,
		},
		name: {
			type: String,
			required: true,
		},
		phoneNumber: {
			type: String,
			required: true,
		},
		emailAddress: {
			type: String,
			required: true,
		},
		isFavorite: {
			type: Boolean,
			default: true,
			required: true,
		},
	},
	emits: ['toggle-favorite', 'delete'],
	// emits: {
	// 	'toggle-favorite': (id) => {
	// 		if (id) {
	// 			return true;
	// 		}
	// 		console.warn('Id is missing');
	// 		return false;
	// 	},
	// },
	data() {
		return {
			detailsAreVisible: false,
		};
	},
	methods: {
		toggleDetails() {
			this.detailsAreVisible = !this.detailsAreVisible;
		},
		toggleFavorite() {
			// emit our custom events, defina arguments which are passed in when event cought
			this.$emit('toggle-favorite', this.id);
			// moze se i direkt kao
			// <button @click="$emit('toggle-favorite', this.id">Toggle Favorite</button>
		},
	},
};
</script>
