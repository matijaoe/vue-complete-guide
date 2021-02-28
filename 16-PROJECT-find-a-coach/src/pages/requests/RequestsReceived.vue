<template>
	<div>
		<base-dialog
			:show="!!error"
			title="An error occured"
			@close="handleError"
		>
			<p>{{ error }}</p>
		</base-dialog>
		<section class="row">
			<div class="controls">
				<base-button mode="flat" @click="loadRequests"
					>Refresh</base-button
				>
			</div>
			<base-card color="color">
				<header>
					<h2>Requests Received</h2>
				</header>
				<base-spinner v-if="isLoading"></base-spinner>
				<ul v-else-if="hasRequests && !isLoading">
					<RequestItem
						v-for="req in receivedRequests"
						:key="req.id"
						:email="req.userEmail"
						:message="req.message"
						:timestamp="req.timestamp"
					/>
				</ul>
				<h3 v-else>You haven't receieved any requests yet.</h3>
			</base-card>
		</section>
	</div>
</template>

<script>
import { mapGetters } from 'vuex';
import RequestItem from './RequestItem';

export default {
	components: {
		RequestItem,
	},
	data() {
		return {
			isLoading: false,
			error: null,
		};
	},
	computed: {
		...mapGetters('requests', {
			receivedRequests: 'requests',
			hasRequests: 'hasRequests',
		}),
	},
	methods: {
		async loadRequests() {
			this.isLoading = true;
			try {
				await this.$store.dispatch('requests/fetchRequests');
			} catch (err) {
				this.error = err.message || 'Something went wrong';
			}
			this.isLoading = false;
		},
		handleError() {
			this.error = null;
		},
	},
	created() {
		this.loadRequests();
	},
};
</script>

<style scoped>
section:first-of-type {
	margin-top: 3.2rem;
}
header {
	text-align: center;
}

ul {
	list-style: none;
	max-width: 40rem;
	margin: 0 auto;

	display: flex;
	flex-direction: column;
	gap: 1.6rem;
}

h2 {
	font-size: 2.4rem;
	font-family: var(--font-display);
	font-weight: normal;
	margin-bottom: 1em;
}

h3 {
	text-align: center;
	font-size: 1.8rem;
	margin-bottom: 0.8rem;
}

.controls {
	display: flex;
	justify-content: center;
}
</style>