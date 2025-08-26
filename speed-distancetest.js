const questions = [
    // 30 Easy
    { q: "A car travels 60 km in 2 hours. What is its speed?", options: ["20 km/h", "30 km/h", "40 km/h", "50 km/h"], answer: 1, explanation: "Speed = Distance / Time = 60 / 2 = 30 km/h" },
    { q: "If a person runs 10 km in 1 hour, what is his speed in m/s?", options: ["2.78", "3.6", "4.5", "5"], answer: 0, explanation: "Speed = (10×1000)/(1×3600) = 2.78 m/s" },
    { q: "A bike covers 90 km in 3 hours. What is its average speed?", options: ["20 km/h", "25 km/h", "30 km/h", "35 km/h"], answer: 2, explanation: "Speed = 90 / 3 = 30 km/h" },
    // ... Add more easy up to 30 unique
];

// Adding dummy medium and hard questions for structure
for (let i = questions.length; i < 70; i++) {
    questions.push({
        q: `Medium Level Q${i - 2}: Random speed-distance problem.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: Math.floor(Math.random() * 4),
        explanation: "Detailed explanation for this question."
    });
}
for (let i = questions.length; i < 100; i++) {
    questions.push({
        q: `Hard Level Q${i - 69}: Challenging speed-distance problem.`,
        options: ["Option A", "Option B", "Option C", "Option D"],
        answer: Math.floor(Math.random() * 4),
        explanation: "Detailed explanation for this question."
    });
}

let currentQuestion = 0;
let answers = Array(questions.length).fill(null);
let timer;
let timeLeft = 60;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const timerEl = document.getElementById("timer");
const indicatorsEl = document.getElementById("indicators");
const resultContainer = document.getElementById("resultContainer");

function startTimer() {
    clearInterval(timer);
    timeLeft = 60;
    timerEl.textContent = `Time left: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerEl.textContent = `Time left: ${timeLeft}s`;
        if (timeLeft <= 0) {
            nextQuestion();
        }
    }, 1000);
}

function loadQuestion(index) {
    const q = questions[index];
    questionEl.textContent = `${index + 1}. ${q.q}`;
    optionsEl.innerHTML = "";
    q.options.forEach((opt, i) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "option";
        input.value = i;
        if (answers[index] === i) input.checked = true;
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        optionsEl.appendChild(label);
    });
    document.querySelectorAll(".indicator").forEach((ind, i) => {
        ind.classList.toggle("active", i === index);
    });
    startTimer();
}

function buildIndicators() {
    indicatorsEl.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        const ind = document.createElement("div");
        ind.className = "indicator";
        ind.textContent = i + 1;
        ind.addEventListener("click", () => {
            saveAnswer();
            currentQuestion = i;
            loadQuestion(currentQuestion);
        });
        indicatorsEl.appendChild(ind);
    }
}

function saveAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        answers[currentQuestion] = parseInt(selected.value);
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

function submitTest() {
    saveAnswer();
    clearInterval(timer);
    let score = 0;
    let reviewHTML = `<h2>Test Result</h2>`;
    questions.forEach((q, i) => {
        if (answers[i] === q.answer) {
            score++;
        } else {
            reviewHTML += `<p><strong>Q${i + 1}:</strong> ${q.q}<br>
            <span class="wrong">Your Answer: ${answers[i] !== null ? q.options[answers[i]] : 'No Answer'}</span><br>
            Correct Answer: ${q.options[q.answer]}<br>
            Explanation: ${q.explanation}</p>`;
        }
    });
    reviewHTML = `<h3>Your Score: ${score} / ${questions.length}</h3>` + reviewHTML;
    resultContainer.innerHTML = reviewHTML;
    resultContainer.style.display = "block";
    document.querySelector(".nav-buttons").style.display = "none";
    questionEl.style.display = "none";
    optionsEl.style.display = "none";
    indicatorsEl.style.display = "none";
    timerEl.style.display = "none";
}

document.getElementById("nextBtn").addEventListener("click", nextQuestion);
document.getElementById("backBtn").addEventListener("click", prevQuestion);
document.getElementById("submitBtn").addEventListener("click", submitTest);

buildIndicators();
loadQuestion(currentQuestion);
