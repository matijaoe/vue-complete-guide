import axios from 'axios';

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

      localStorage.setItem('token', responseData.idToken);
      localStorage.setItem('userId', responseData.localId);

      context.commit('setUser', {
        token: responseData.idToken,
        userId: responseData.localId,
        tokenExpiration: responseData.expiresIn
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
    if (token && userId) {
      // login user automatically
      context.commit('setUser', {
        token,
        userId,
        tokenExpiration: null
      });
    }
  },
  logout(context) {
    localStorage.removeItem('token');
    localStorage.removeItem('userId');

    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  }
};
