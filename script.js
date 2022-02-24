const App = Vue.createApp({
    data() {
        return {
            input: '',
            inputCap: '',
            inputEndCap: '',
            inputReverse: ''
        }
    },

    methods: {
        showUl() {
            var ul = document.getElementById("showUl");
            ul.style.display = "block";
        },
        showTable() {
            var ul = document.getElementById("showTable");
            ul.style.display = "block";
        },
        displayInput() {
            this.input;
        },
        capilatize() {
            this.inputCap = this.input.charAt(0).toUpperCase() + this.input.slice(1);
        },
        endCapitalize() {
            this.inputEndCap = this.input.toLowerCase().split(" ").map(function(inputEndCap) {
            return inputEndCap.slice(0, -1) + inputEndCap.slice(-1).toUpperCase();
            }).join(" ");
        },
        reverseInput() {
            this.inputReverse = this.input.split('').reverse().join('')
        },
    }
});

App.mount('#app');

function TestsFunction() {
    var T = document.getElementById("showOnClick");
    T.style.display = "block";
}