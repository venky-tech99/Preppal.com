// 100 Interest Questions: 30 Easy, 40 Medium, 30 Hard
const questions = [];

// Function to generate Interest questions
function generateInterestQuestions() {
    for (let i = 1; i <= 30; i++) {
        let p = Math.floor(Math.random() * 9000) + 1000;
        let r = Math.floor(Math.random() * 8) + 2;
        let t = Math.floor(Math.random() * 4) + 1;
        let si = (p * r * t) / 100;
        questions.push({
            question: `Easy Q${i}: Find the Simple Interest for Principal ₹${p}, Rate ${r}% per annum, Time ${t} years.`,
            options: [
                si.toFixed(2),
                (si + 50).toFixed(2),
                (si - 50).toFixed(2),
                (si + 100).toFixed(2)
            ],
            correct: si.toFixed(2),
            explanation: `Simple Interest = (P × R × T) / 100 = (${p} × ${r} × ${t}) / 100 = ₹${si.toFixed(2)}`
        });
    }
    for (let i = 1; i <= 40; i++) {
        let p = Math.floor(Math.random() * 9000) + 2000;
        let r = Math.floor(Math.random() * 12) + 5;
        let t = Math.floor(Math.random() * 6) + 1;
        let si = (p * r * t) / 100;
        questions.push({
            question: `Medium Q${i}: Calculate SI for ₹${p} at ${r}% for ${t} years.`,
            options: [
                si.toFixed(2),
                (si + 25).toFixed(2),
                (si - 25).toFixed(2),
                (si + 75).toFixed(2)
            ],
            correct: si.toFixed(2),
            explanation: `Simple Interest = (P × R × T) / 100 = (${p} × ${r} × ${t}) / 100 = ₹${si.toFixed(2)}`
        });
    }
    for (let i = 1; i <= 30; i++) {
        let p = Math.floor(Math.random() * 15000) + 5000;
        let r = Math.floor(Math.random() * 15) + 8;
        let t = Math.floor(Math.random() * 10) + 1;
        let si = (p * r * t) / 100;
        questions.push({
            question: `Hard Q${i}: A person invests ₹${p} at ${r}% p.a. for ${t} years. Find the SI.`,
            options: [
                si.toFixed(2),
                (si + 40).toFixed(2),
                (si - 40).toFixed(2),
                (si + 80).toFixed(2)
            ],
            correct: si.toFixed(2),
            explanation: `SI = (P × R × T) / 100 = (${p} × ${r} × ${t}) / 100 = ₹${si.toFixed(2)}`
        });
    }
}

generateInterestQuestions();

// Variables
let currentQuestion = 0;
let score = 0;
let answers = {};
let timerInterval;
let timeLeft = 60;

const questionText = document.getElementById("questionText");
const optionsDiv = document.getElementById("options");
const timerDiv = document.getElementById("timer");
const questionNumbersDiv = document.getElementById("questionNumbers");

function startTimer() {
    clearInterval(timerInterval);
    timeLeft = 60;
    timerDiv.textContent = `Time: ${timeLeft}s`;
    timerInterval = setInterval(() => {
        timeLeft--;
        timerDiv.textContent = `Time: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion(index) {
    const q = questions[index];
    questionText.textContent = q.question;
    optionsDiv.innerHTML = "";
    q.options.forEach(opt => {
        const label = document.createElement("label");
        label.innerHTML = `<input type="radio" name="option" value="${opt}"> ${opt}`;
        optionsDiv.appendChild(label);
    });
    startTimer();
}

function updateQuestionNumbers() {
    questionNumbersDiv.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        const div = document.createElement("div");
        div.textContent = i + 1;
        questionNumbersDiv.appendChild(div);
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function saveAnswer() {
    const selected = document.querySelector("input[name='option']:checked");
    if (selected) {
        answers[currentQuestion] = selected.value;
    }
}

function submitTest() {
    saveAnswer();
    let resultHTML = `<div class='result'><h2>Test Result</h2>`;
    score = 0;
    questions.forEach((q, i) => {
        if (answers[i] === q.correct) {
            score++;
        } else {
            resultHTML += `<div class='wrong'><strong>Q${i + 1}:</strong> ${q.question}</div>`;
            resultHTML += `<div class='explanation'><strong>Your Answer:</strong> ${answers[i] || "No answer"}<br><strong>Correct:</strong> ${q.correct}<br>${q.explanation}</div>`;
        }
    });
    resultHTML += `<h3>Score: ${score} / ${questions.length}</h3></div>`;
    document.querySelector(".container").innerHTML = resultHTML;
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("backBtn").addEventListener("click", prevQuestion);
document.getElementById("submitBtn").addEventListener("click", submitTest);

updateQuestionNumbers();
loadQuestion(currentQuestion);
