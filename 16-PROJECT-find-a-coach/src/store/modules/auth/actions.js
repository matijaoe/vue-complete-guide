import axios from 'axios';

let timer;

export default {
	async login(context, payload) {
		return context.dispatch('auth', {
			...payload,
			mode: 'login'
		});
	},
	async signup(context, payload) {
		// return so our component still know if the promise is resolved, or has an error etc
		return context.dispatch('auth', {
			...payload,
			mode: 'signup'
		});
	},
	async auth(context, payload) {
		const apiKey = context.getters.apiKey;
		const mode = payload.mode;

		let url = `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`;
		if (mode === 'signup') {
			url = `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`;
		}

		try {
			const { data: responseData } = await axios.post(url, {
				email: payload.email,
				password: payload.password,
				returnSecureToken: true
			});

			const expiresIn = +responseData.expiresIn * 1000; // turn to milliseconds
			const expirationDate = Date.now() + expiresIn;

			localStorage.setItem('token', responseData.idToken);
			localStorage.setItem('userId', responseData.localId);
			localStorage.setItem('tokenExpiration', expirationDate);

			timer = setTimeout(() => {
				context.dispatch('autoLogout');
			}, expiresIn);

			context.commit('setUser', {
				token: responseData.idToken,
				userId: responseData.localId
			});
		} catch (err) {
			const error = new Error(
				err.response.data.error.message || 'Failed to authenticate'
			);
			throw error;
		}
	},
	// check if user is already in local storage
	tryLogin(context) {
		const token = localStorage.getItem('token');
		const userId = localStorage.getItem('userId');
		const tokenExpiration = localStorage.getItem('tokenExpiration');

		// how much time is left till expiring
		const expiresIn = +tokenExpiration - Date.now();

		// if timer expired, dont login
		if (expiresIn < 10000) return;

		setTimeout(() => {
			context.dispatch('autoLogout');
		}, expiresIn);

		if (token && userId) {
			// login user automatically
			context.commit('setUser', {
				token,
				userId
			});
		}
	},
	logout(context) {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		localStorage.removeItem('tokenExpiration');

		clearTimeout(timer);

		context.commit('setUser', {
			token: null,
			userId: null
		});
	},
	autoLogout(context) {
		context.dispatch('logout');
		context.commit('setAutoLogout');
	}
};
