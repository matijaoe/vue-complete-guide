import axios from 'axios';

export default {
	async contactCoach(context, payload) {
		const newRequest = {
			userEmail: payload.email,
			message: payload.message,
			timestamp: payload.timestamp
		};

		const databaseUrl = context.rootGetters.databaseUrl;

		try {
			const { data: responseData } = await axios.post(
				`${databaseUrl}/requests/${payload.coachId}.json`,
				newRequest
			);

			// firebase generates id on name property
			newRequest.id = responseData.name;
			// add it to local data but not to the server, bcs the key of it is already coachId
			newRequest.coachId = payload.coachId;

			context.commit('addRequest', newRequest);
		} catch (err) {
			const error = new Error(err.message || 'Failed to send request.');
			throw error;
		}
	},
	async fetchRequests(context) {
		const coachId = context.rootGetters.userId;
		const databaseUrl = context.rootGetters.databaseUrl;

		const token = context.rootGetters.token;
		const options = {};

		if (token) {
			options.params = {
				auth: token
			};
		}

		try {
			const { data: responseData } = await axios.get(
				`${databaseUrl}/requests/${coachId}.json`,
				options
			);

			const requests = [];
			for (const key in responseData) {
				const request = {
					id: key,
					coachId,
					userEmail: responseData[key].userEmail,
					message: responseData[key].message,
					timestamp: responseData[key].timestamp
				};
				requests.push(request);
			}

			context.commit('setRequests', requests);
		} catch (err) {
			console.log(err.response);
			const error = new Error(
				err.response.data.error || 'Failed to send request.'
			);
			throw error;
		}
	}
};
