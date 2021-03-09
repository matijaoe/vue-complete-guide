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
	emits: ['list-projects'],
	setup(props) {
		//* Search
		const enteredSearchTerm = ref('');
		const activeSearchTerm = ref('');

		const updateSearch = (val) => (enteredSearchTerm.value = val);

		const availableUsers = computed(() => {
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

		watch(enteredSearchTerm, (val) => {
			setTimeout(() => {
				if (enteredSearchTerm.value === val) {
					activeSearchTerm.value = val;
				}
			}, 100);
		});

		//* Sorting
		const sorting = ref(null);

		const sort = (mode) => (sorting.value = mode);

		const displayedUsers = computed(() => {
			if (!sorting.value) {
				return availableUsers.value;
			}
			// we slice so we dont modify existing array
			return availableUsers.value.slice().sort((u1, u2) => {
				if (sorting.value === 'asc') {
					return u1.fullName > u2.fullName ? 1 : -1;
				} else if (sorting.value === 'desc') {
					return u1.fullName > u2.fullName ? -1 : 1;
				}
			});
		});

		return {
			enteredSearchTerm,
			updateSearch,
			sorting,
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