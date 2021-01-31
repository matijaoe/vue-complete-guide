// const buttonEl = document.querySelector('button')
// const inputEl = document.querySelector('input')
// const listEl = document.querySelector('li')

// function addGoal() {
//     const enteredValue = inputEl.value;
//     if (!enteredValue) {
//         console.error("Empty value");
//         return;
//     }
//     const listItemEl = document.createElement('li')
//     listItemEl.textContent = enteredValue
//     listEl.append(listItemEl)
//     inputEl.value = ''
// }

// buttonEl.addEventListener('click', addGoal)


// VUE 2
// let app = new Vue({
//     el: '#app',
//     data: {
//         goals: [],
//         enteredValue: ''
//     },
//     methods: {
//         addGoal() {
//             this.goals.push(this.enteredValue)
//             this.enteredValue = ''
//         }
//     }
// })

// VUE 3
Vue.createApp({
    data() {
        return {
            goals: [],
            enteredValue: ''
        }
    },
    methods: {
        addGoal() {
            goal = this.enteredValue
            if (goal == '') return;

            this.goals.push(goal);
            this.enteredValue = ''
        }
    }
}).mount('#app')