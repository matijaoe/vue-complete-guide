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
import UserItem from './UserItem.vue';
import useSearch from '@/components/hooks/search.js';
import useSort from '@/components/hooks/sort.js';

import { toRefs } from 'vue';

export default {
	components: {
		UserItem,
	},
	props: ['users'],
	emits: ['list-projects'],
	setup(props) {
		// we're making it as sa ref bcs in the hook we access it with .value, so it has to be ref
		// we pass reff to hook bcs we did it like that in ProjectsList, and we wanna reuse the same hook
		const { users } = toRefs(props);

		const { enteredSearchTerm, updateSearch, availableItems } = useSearch(
			users,
			'fullName'
		);

		const { sorting, displayedUsers, sort } = useSort(
			availableItems,
			'fullName'
		);

		return {
			enteredSearchTerm,
			updateSearch,
			displayedUsers,
			sorting,
			sort,
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