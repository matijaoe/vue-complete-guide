<template>
	<user-alert v-if="alertIsVisible" :title="alertTitle" @close="hideAlert">
		<p>Do you want to continue with deleting a user?</p>
	</user-alert>
	<section>
		<h2>Delete a User</h2>
		<button @click="showAlert">Delete User</button>
	</section>
</template>

<script>
import alertMixin from '@/mixins/alert.js';

export default {
	mixins: [alertMixin],
	data() {
		return {
			alertTitle: 'Delete user?', // merges with the mixin
			// alertIsVisible: true, // will overide same property in mixin
		};
	},
};
</script>