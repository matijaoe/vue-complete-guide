<template>
	<base-container>
		<h2>Active Users</h2>
		<base-search
			@search="updateSearch"
			:search-term="enteredSearchTerm"
		></base-search>
		<div>
			<button
				@click="sort('asc')"
				:class="{ selected: sorting === 'asc' }"
			>
				Sort Ascending
			</button>
			<button
				@click="sort('desc')"
				:class="{ selected: sorting === 'desc' }"
			>
				Sort Descending
			</button>
		</div>
		<ul>
			<user-item
				v-for="user in displayedUsers"
				:key="user.id"
				:user-name="user.fullName"
				:id="user.id"
				@list-projects="$emit('list-projects', $event)"
			></user-item>
		</ul>
	</base-container>
</template>

<script>
import { computed, ref, watch } from 'vue';
import UserItem from './UserItem.vue';

export default {
	components: {
		UserItem,
	},
	props: ['users'],
	setup(props) {
		//* DATA
		const enteredSearchTerm = ref('');
		const activeSearchTerm = ref('');
		const sorting = ref(null);

		//* METHODS
		const updateSearch = (val) => (enteredSearchTerm.value = val);
		const sort = (mode) => (sorting.value = mode);

		watch(enteredSearchTerm, (val) => {
			setTimeout(() => {
				if (enteredSearchTerm.value === val) {
					activeSearchTerm.value = val;
				}
			}, 100);
		});

		//* runs when activeSearchTerm changes, return filtered users
		const availableUsers = computed(() => {
			console.log(props.users);
			let users = props.users;
			if (activeSearchTerm.value) {
				users = users
					.slice()
					.filter((usr) =>
						usr.fullName
							.toLowerCase()
							.includes(activeSearchTerm.value.toLowerCase())
					);
			}
			return users;
		});

		//* returns sorted users
		const displayedUsers = computed(() => {
			if (!sorting.value) {
				return availableUsers.value;
			}
			return availableUsers.value.slice().sort((u1, u2) => {
				if (sorting.value === 'asc' && u1.fullName > u2.fullName) {
					return 1;
				} else if (sorting.value === 'asc') {
					return -1;
				} else if (
					sorting.value === 'desc' &&
					u1.fullName > u2.fullName
				) {
					return -1;
				} else {
					return 1;
				}
			});
		});

		return {
			enteredSearchTerm,
			sorting,
			updateSearch,
			sort,
			displayedUsers,
		};
	},
};
</script>

<style scoped>
ul {
	list-style: none;
	margin: 0;
	padding: 0;
}
</style>