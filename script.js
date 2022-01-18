const app = Vue.createApp({
    // template: "<h2>{{title}} - {{ second }} - {{age}}</h2>",
    data() {
        // We are returning an object inseide the function
        return{
            title: "Hero on the way",
            second: "number 2",
            age: 27,
        }
    },
    methods: {
        changetitle() {
    // The event below will output the updated title
            this.title = 'The Five Love Languages'

    // The below event is another way of out-putting using the arguement passed in the function.
            // this.title = title
        }
    }
})

app.mount('#app');