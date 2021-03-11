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
import UserAlert from './UserAlert.vue';
import UseAlert from '@/hooks/alert.js';
import { ref } from 'vue';

export default {
	components: {
		UserAlert,
	},
	setup() {
		const alertTitle = ref('Delete user?');

		const { alertIsVisible, showAlert, hideAlert } = UseAlert(true);

		return { alertTitle, alertIsVisible, showAlert, hideAlert };
	},
};
</script>