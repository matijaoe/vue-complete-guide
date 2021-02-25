<template>
	<section class="row">
		<base-card>
			<header>
				<h2>Requests Received</h2>
			</header>
			<ul v-if="hasRequests">
				<RequestItem
					v-for="req in receivedRequests"
					:key="req.id"
					:email="req.userEmail"
					:message="req.message"
				/>
			</ul>
			<h3 v-else>You haven't receieved any requests yet.</h3>
		</base-card>
	</section>
</template>

<script>
import { mapGetters } from 'vuex';
import RequestItem from './RequestItem';

export default {
	components: {
		RequestItem,
	},
	computed: {
		...mapGetters('requests', {
			receivedRequests: 'requests',
			hasRequests: 'hasRequests',
		}),
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
</style>