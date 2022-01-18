const app = Vue.createApp({
    // template: "<h2>{{title}} - {{ second }} - {{age}}</h2>",
    data() {
        // We are returning an object inseide the function
        return{
            showBooks: true,
            title: "Hero on the way",
            second: "number 2",
            age: 27,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        }
    }
})

app.mount('#app');