const quotes = [
    "Success is built one commit at a time.",
    "Every expert was once a beginner.",
    "Keep learning. Keep building.",
    "Debug your code, not your dreams.",
    "Small improvements every day lead to big results.",
    "Code. Commit. Push. Repeat."
];

function changeQuote() {

    const random = Math.floor(Math.random() * quotes.length);

    document.getElementById("quote").innerText = quotes[random];

}