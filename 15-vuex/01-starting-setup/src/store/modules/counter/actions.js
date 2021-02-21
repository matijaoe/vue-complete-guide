export default {
  // use actions as a middleman to mutations
  // name doesnt matter
  increment(context) {
    console.log('Context: ', context);
    setTimeout(() => {
      context.commit('increment');
    }, 2000);
  },
  increase(context, payload) {
    //   console.log('Context: ', context);
    context.commit('increase', payload);
    // never manipulate the state direcly, use mutations (commit) for that
  }
};
