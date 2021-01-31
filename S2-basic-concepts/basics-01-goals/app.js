const app = Vue.createApp({
    data() {
        return {
            courseGoalA: "Have fun and learn stuff",
            courseGoalB: "Be the best coder in the whole wide world",
            // courseGoalB: "<em>Be the best coder in the whole wide world</em>",
            vueLink: 'https://vuejs.org',
            message: 'You loaded this page on ' + new Date().toLocaleString()
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            return randomNumber < 0.5 ? this.courseGoalA : this.courseGoalB
        }
    }
})

app.mount('#user-goal')

