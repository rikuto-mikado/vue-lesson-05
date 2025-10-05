const app = Vue.createApp({
    data() {
        return {
            userInput: '',
            confirmedInput: '',
        };
    },
    methods: {
        showAlert() {
            alert('This is working successfully!');
        },
        storeInput(event) {
            // Stores the current input field value from the event target
            this.userInput = event.target.value;
        },
        confirmInput() {
            this.confirmedInput = this.userInput;
        },
    }
})

app.mount('#assignment');