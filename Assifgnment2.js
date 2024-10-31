let speedTypingTest = document.getElementById('speedTypingTest');
let timer = document.getElementById("timer");
let quoteDisplay = document.getElementById("quoteDisplay");
let result = document.getElementById('result');
let quoteInput = document.getElementById("quoteInput");
let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");
let spinner = document.getElementById("spinner");

spinner.classList.remove('d-none')

let url = "https://apis.ccbp.in/random-quote";
let option = {
    method: "GET"
}
fetch(url, option)
    .then(function(response) {
        return response.json();
    })
    .then(function(jsonData) {
        let randText = (jsonData.content);
        quoteDisplay.textContent = randText;
        spinner.classList.add('d-none')
    })

let count = 0;
let uniId = setInterval(function() {
    timer.textContent = count;
    count += 1;

    resetBtn.addEventListener("click", function(event) {
        count = 0;
    });

    submitBtn.addEventListener("click", function(event) {
        event.preventDefault();
        if (quoteInput.value === quoteDisplay.textContent) {
            clearInterval(uniId);
            result.textContent = "you have typed in " + (count - 1) + " seconds";
        } else {
            result.textContent = "you did not typed the correct thing";
        }
    });

}, 1000);
