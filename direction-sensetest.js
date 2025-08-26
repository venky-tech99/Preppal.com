const questions = [
    // ---- 30 Easy ----
    { q: "Ravi walks 5 km North, then 3 km East. How far is he from the starting point?", options: ["5 km", "8 km", "√34 km", "4 km"], correct: 2, explanation: "Use Pythagoras: √(5²+3²) = √34 km" },
    { q: "A man walks North, turns right, walks East. Which direction is he facing?", options: ["North", "East", "South", "West"], correct: 1, explanation: "Starts North, right turn → East" },
    { q: "If you face East and turn 90° clockwise, which direction?", options: ["North", "South", "West", "East"], correct: 1, explanation: "East → South in clockwise 90°" },
    // Add 27 more EASY unique questions...
    
    // ---- 40 Medium ----
    { q: "A person walks 4 km North, 4 km East, then 4 km South. How far from start?", options: ["4 km", "8 km", "√32 km", "0 km"], correct: 0, explanation: "Ends 4 km East of start." },
    { q: "Facing South, turn left, walk forward. Now facing?", options: ["East", "West", "North", "South"], correct: 1, explanation: "South → left turn = East" },
    // Add 38 more MEDIUM unique questions...
    
    // ---- 30 Hard ----
    { q: "A man walks 10 km North, 5 km West, 8 km South, then 5 km East. How far from start?", options: ["3 km", "10 km", "5 km", "2 km"], correct: 0, explanation: "Net movement: 2 km North, 0 East-West → 2 km from start." },
    // Add 29 more HARD unique questions...
];

let currentQ = 0;
let score = 0;
let answers = {};
let timer;
let timeLeft = 60;

function loadQuestion(index) {
    currentQ = index;
    document.getElementById("question").innerHTML = `<b>Q${index+1}:</b> ${questions[index].q}`;
    let optsHTML = "";
    questions[index].options.forEach((opt, i) => {
        const checked = answers[index] === i ? "checked" : "";
        optsHTML += `<label><input type="radio" name="option" value="${i}" ${checked}> ${opt}</label>`;
    });
    document.getElementById("options").innerHTML = optsHTML;
    resetTimer();
}

function renderNavigation() {
    let navHTML = "";
    for (let i=0; i<questions.length; i++) {
        navHTML += `<div class="nav-btn" onclick="loadQuestion(${i})">${i+1}</div>`;
    }
    document.getElementById("navigation").innerHTML = navHTML;
}

function resetTimer() {
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("timer").innerText = `Time Left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            saveAnswer();
            if (currentQ < questions.length-1) {
                loadQuestion(currentQ+1);
            } else {
                submitTest();
            }
        }
    }, 1000);
}

function saveAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        answers[currentQ] = parseInt(selected.value);
    }
}

function submitTest() {
    saveAnswer();
    clearInterval(timer);
    score = 0;
    let resultHTML = "";
    questions.forEach((q, i) => {
        if (answers[i] === q.correct) {
            score++;
        } else {
            resultHTML += `<div class="wrong"><b>Q${i+1}:</b> ${q.q}<br><b>Explanation:</b> ${q.explanation}</div>`;
        }
    });
    document.getElementById("result").innerHTML = 
        `<p>Your Score: ${score} / ${questions.length}</p>
         <p>You have completed the Logical Reasoning. Now you can learn the Technical MCQs below.</p>
         <a href="technicalmcqs.html" class="technical-link">Go to Technical MCQs</a>
         ${resultHTML}`;
}

document.getElementById("options").addEventListener("change", saveAnswer);

renderNavigation();
loadQuestion(0);
