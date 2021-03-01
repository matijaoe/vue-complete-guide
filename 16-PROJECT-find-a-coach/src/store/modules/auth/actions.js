import axios from 'axios';

export default {
  async login(context, payload) {
    const apiKey = context.getters.apiKey;
    try {
      const { data: responseData } = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`,
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        }
      );
      //   console.log(responseData);

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
  async signup(context, payload) {
    const apiKey = context.getters.apiKey;
    try {
      const { data: responseData } = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        }
      );
      //   console.log(responseData);

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
  logout(context) {
    context.commit('setUser', {
      token: null,
      userId: null,
      tokenExpiration: null
    });
  }
};
