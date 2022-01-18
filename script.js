const app = Vue.createApp({
    // template: "<h2>{{title}} - {{ second }} - {{age}}</h2>",
    data() {
        // We are returning an object inseide the function
        return{
            showBooks: true,
            title: "Hero on the way",
            second: "number 2",
            age: 27,
            x: 0,
            y: 0,
        }
    },
    methods: {
        toggleShowBooks() {
            this.showBooks = !this.showBooks
        },
        handleEvent(e, data) {
            console.log(e, e.type)
            if (data) {
                console.log(data)
            }
        },
        handleMousemove(e) {
            this.x = e.offsetX
            this.y = e.offsetY
        }
    }
})

app.mount('#app');