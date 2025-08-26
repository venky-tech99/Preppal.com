const questions = [
    {
        question: "Which layer of the OSI model is responsible for logical addressing?",
        options: ["Data Link", "Network", "Transport", "Session"],
        answer: 1,
        explanation: "The Network layer is responsible for logical addressing using IP addresses."
    },
    {
        question: "Which OSI layer handles encryption and decryption?",
        options: ["Presentation", "Application", "Session", "Transport"],
        answer: 0,
        explanation: "The Presentation layer handles encryption, decryption, and data translation."
    },
    {
        question: "Which layer establishes, manages, and terminates sessions?",
        options: ["Session", "Network", "Transport", "Physical"],
        answer: 0,
        explanation: "The Session layer manages connections between applications."
    }
    // Continue adding up to 100 questions...
];

let currentQuestion = 0;
let score = 0;
let answers = new Array(questions.length).fill(null);
let timer;
let timeLeft = 60;

function loadQuestion(index) {
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById("time").textContent = timeLeft;

    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            clearInterval(timer);
            nextQuestion();
        }
    }, 1000);

    const q = questions[index];
    let html = `<div class="question">
        <h3>Q${index + 1}. ${q.question}</h3>
        <div class="options">`;
    q.options.forEach((opt, i) => {
        html += `<label><input type="radio" name="q${index}" value="${i}" ${answers[index] === i ? "checked" : ""}> ${opt}</label>`;
    });
    html += `</div></div>`;
    document.getElementById("question-container").innerHTML = html;
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function saveAnswer() {
    const selected = document.querySelector(`input[name="q${currentQuestion}"]:checked`);
    if (selected) {
        answers[currentQuestion] = parseInt(selected.value);
    }
}

function submitTest() {
    saveAnswer();
    score = 0;
    let resultHTML = `<h2>Test Results</h2>`;
    questions.forEach((q, i) => {
        if (answers[i] === q.answer) {
            score++;
        } else {
            resultHTML += `<p>Q${i + 1}: ${q.question}<br>
            Your answer: ${answers[i] !== null ? q.options[answers[i]] : "Not answered"}<br>
            Correct answer: ${q.options[q.answer]}<br>
            Explanation: ${q.explanation}</p>`;
        }
    });
    resultHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>` + resultHTML;
    document.getElementById("result").innerHTML = resultHTML;
}

function createNavButtons() {
    let navHTML = "";
    for (let i = 0; i < questions.length; i++) {
        navHTML += `<button class="nav-btn" onclick="goToQuestion(${i})">${i + 1}</button>`;
    }
    document.getElementById("nav-buttons").innerHTML = navHTML;
}

function goToQuestion(index) {
    saveAnswer();
    currentQuestion = index;
    loadQuestion(index);
}

createNavButtons();
loadQuestion(currentQuestion);
