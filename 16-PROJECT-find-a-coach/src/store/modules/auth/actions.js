import axios from 'axios';

export default {
  async login(context, payload) {
    console.log(context, payload);
  },
  async signup(context, payload) {
    const apiKey = 'AIzaSyDjWvr2HzvuRpm-7H7FN53SjqaZZ4yKvcc';
    try {
      const { data: responseData } = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          email: payload.email,
          password: payload.password,
          returnSecureToken: true
        }
      );
      console.log(responseData);

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
  }
};
