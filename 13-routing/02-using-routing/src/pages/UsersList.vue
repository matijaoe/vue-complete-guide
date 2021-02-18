<template>
	<button @click="confirmInput">Confirm</button>
	<button @click="saveChanges">Save Changes</button>
	<ul>
		<user-item
			v-for="user in users"
			:key="user.id"
			:name="user.fullName"
			:role="user.role"
		></user-item>
	</ul>
</template>

<script>
import UserItem from '../components/users/UserItem';

export default {
	components: {
		UserItem,
	},
	inject: ['users'],
	data() {
		return {
			changesSaved: false,
		};
	},
	methods: {
		confirmInput() {
			//todo
			// this.$router.push({ name: 'teams' });
			this.$router.push('/teams'); // radi cak i samo 'teams'
			// this.$router.back();
		},
		saveChanges() {
			this.changesSaved = true;
		},
	},
	beforeRouteEnter(to, from, next) {
		console.log('UsersList component beforeRouteEnter');
		console.log(to, from);
		next();
	},
	// unmounted() {
	// 	console.log('UNMOUNTED');
	// },
	beforeRouteLeave(to, from, next) {
		console.log('UsersList component beforeRouteLave');
		console.log(to, from);
		if (this.changesSaved) {
			next();
		} else {
			const userWantsToLeave = confirm(
				'Are you sure? You have unsaved changes'
			);
			next(userWantsToLeave); // next(true) goes, next(false) stays on the page
		}
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 2rem auto;
	max-width: 20rem;
	padding: 0;
}
</style>