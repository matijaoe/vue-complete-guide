myData = {
    data() {
        return {
            name: 'Matija',
            age: 21,
            stockPhoto: 'https://i.redd.it/tcvlexgpsjs31.jpg'
        }
    },
    methods: {
        calculateAge() {
            return this.age + 5
        },
        favNumber() {
            return Math.floor(Math.random() * 100 + 1)
        }
    },
}

Vue.createApp(myData).mount('#assignment')
