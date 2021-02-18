<template>
	<section>
		<h2>{{ teamName }}</h2>
		<ul>
			<user-item
				v-for="member in members"
				:key="member.id"
				:name="member.fullName"
				:role="member.role"
			></user-item>
		</ul>
		<router-link to="/teams/t2">Go to team 2</router-link>
	</section>
</template>

<script>
import UserItem from '../users/UserItem.vue';

export default {
	components: {
		UserItem,
	},
	inject: ['teams', 'users'],
	props: ['teamId'],
	// ako imam props, netrebam dohvacat params iz $route urla
	// makes component more reusable cos now i can pass in a prop to the component + it automatically fetches it from $route url
	data() {
		return {
			teamName: '',
			members: [],
		};
	},
	methods: {
		loadTeamMembers(teamId) {
			const selectedTeam = this.teams.find((team) => team.id === teamId);

			if (!selectedTeam) return;

			const members = selectedTeam.members;

			const selectedMembers = [];
			for (const member of members) {
				const selectedUser = this.users.find(
					(user) => user.id === member
				);
				selectedMembers.push(selectedUser);
			}

			this.members = selectedMembers;
			this.teamName = selectedTeam.name;
		},
	},
	created() {
		// this.loadTeamMembers(this.$route.params.teamId);
		// console.log(this.$route);
		this.loadTeamMembers(this.teamId);
	},
	beforeRouteUpdate(to, from, next) {
		console.log('TeamMembers component beforeRouteUpdate');
		console.log(to, from);
		// this.loadTeamMembers(this.teamId); // usint this it would be less flexible though as it relies on using routes instead of props
		next();
	},
	watch: {
		teamId(newId) {
			this.loadTeamMembers(newId);
		},
		// $route(newRoute) {
		// 	this.loadTeamMembers(newRoute.params.teamId);
		// },
	},
};
</script>

<style scoped>
section {
	margin: 2rem auto;
	max-width: 40rem;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
	padding: 1rem;
	border-radius: 12px;
}

h2 {
	margin: 0.5rem 0;
}

ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>