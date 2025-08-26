const questions = [
    {
        question: "Which layer of the TCP/IP model is responsible for logical addressing?",
        options: ["Application", "Internet", "Transport", "Network Access"],
        answer: 1,
        explanation: "The Internet layer in TCP/IP handles logical addressing through IP addresses."
    },
    {
        question: "How many layers does the TCP/IP model have?",
        options: ["4", "5", "6", "7"],
        answer: 0,
        explanation: "TCP/IP model consists of 4 layers: Application, Transport, Internet, and Network Access."
    },
    {
        question: "Which protocol is connection-oriented in TCP/IP?",
        options: ["TCP", "UDP", "IP", "ICMP"],
        answer: 0,
        explanation: "TCP is connection-oriented and ensures reliable delivery."
    },
    // ... Continue until 100 MCQs ...
];

// Variables
let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 60;
const userAnswers = new Array(questions.length).fill(null);

// DOM elements
const questionContainer = document.getElementById("question-container");
const navigation = document.getElementById("navigation");
const timerDisplay = document.getElementById("timer");
const resultDisplay = document.getElementById("result");
const explanationsDisplay = document.getElementById("explanations");

// Load navigation buttons
function loadNavigation() {
    navigation.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        const btn = document.createElement("button");
        btn.innerText = i + 1;
        btn.onclick = () => {
            saveAnswer();
            currentQuestion = i;
            loadQuestion();
        };
        navigation.appendChild(btn);
    }
}

// Load question
function loadQuestion() {
    clearInterval(timer);
    timeLeft = 60;
    startTimer();

    const q = questions[currentQuestion];
    questionContainer.innerHTML = `
        <div class="question">${currentQuestion + 1}. ${q.question}</div>
        <div class="options">
            ${q.options.map((opt, i) => `
                <label>
                    <input type="radio" name="option" value="${i}" ${userAnswers[currentQuestion] === i ? "checked" : ""}>
                    ${opt}
                </label>
            `).join("")}
        </div>
    `;
}

// Save answer
function saveAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        userAnswers[currentQuestion] = parseInt(selected.value);
    }
}

// Timer
function startTimer() {
    timerDisplay.textContent = `Time Left: 01:00`;
    timer = setInterval(() => {
        timeLeft--;
        let minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
        let seconds = String(timeLeft % 60).padStart(2, '0');
        timerDisplay.textContent = `Time Left: ${minutes}:${seconds}`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);
}

// Next & Back
function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion();
    }
}
function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion();
    }
}

// Submit test
function submitTest() {
    saveAnswer();
    score = 0;
    let wrongAnswers = [];

    questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            score++;
        } else {
            wrongAnswers.push({ question: q.question, correct: q.options[q.answer], explanation: q.explanation });
        }
    });

    questionContainer.style.display = "none";
    navigation.style.display = "none";
    document.querySelector(".nav-buttons").style.display = "none";

    resultDisplay.style.display = "block";
    resultDisplay.innerHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>`;

    explanationsDisplay.style.display = "block";
    explanationsDisplay.innerHTML = "<h3>Explanations for Wrong Answers:</h3>" + wrongAnswers.map(w => `
        <div class="explanation-item">
            <strong>Q:</strong> ${w.question} <br>
            <strong>Correct:</strong> ${w.correct} <br>
            <strong>Explanation:</strong> ${w.explanation}
        </div>
    `).join("");
}

// Event listeners
document.getElementById("nextBtn").onclick = nextQuestion;
document.getElementById("backBtn").onclick = prevQuestion;
document.getElementById("submitBtn").onclick = submitTest;

// Init
loadNavigation();
loadQuestion();
