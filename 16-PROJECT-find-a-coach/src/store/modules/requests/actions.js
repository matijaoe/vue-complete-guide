import shortid from 'shortid';

export default {
  contactCoach(context, payload) {
    const newRequest = {
      id: shortid.generate(),
      coachId: payload.coachId,
      userEmail: payload.email,
      message: payload.message,
      timestamp: payload.timestamp
    };
    context.commit('addRequest', newRequest);
  }
};
