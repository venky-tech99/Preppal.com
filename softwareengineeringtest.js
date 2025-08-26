const questions = [
    {
        question: "1. What is Software Engineering?",
        options: [
            "The study of computer hardware",
            "The systematic application of engineering principles to software development",
            "The design of algorithms only",
            "None of the above"
        ],
        answer: 1
    },
    {
        question: "2. Which of the following is NOT an SDLC phase?",
        options: ["Requirement Analysis", "Design", "Hacking", "Testing"],
        answer: 2
    },
    {
        question: "3. In the Waterfall Model, testing is performed:",
        options: [
            "After implementation",
            "In parallel with coding",
            "Before requirement analysis",
            "None of the above"
        ],
        answer: 0
    },
    // ... Continue adding questions until 100
];

// Variables
let currentQuestion = 0;
let userAnswers = new Array(questions.length).fill(null);
let timerDuration = 30 * 60; // 30 minutes in seconds

// Load Question
function loadQuestion(index) {
    const quizContainer = document.getElementById("quiz-container");
    const q = questions[index];

    quizContainer.innerHTML = `
        <div class="question">
            <h3>${q.question}</h3>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <label>
                        <input type="radio" name="option" value="${i}" 
                        ${userAnswers[index] === i ? "checked" : ""} 
                        onclick="selectOption(${i})"> ${opt}
                    </label>
                `).join("")}
            </div>
        </div>
    `;
}

function selectOption(optionIndex) {
    userAnswers[currentQuestion] = optionIndex;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function submitQuiz() {
    let score = 0;
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            score++;
        }
    });

    document.getElementById("quiz-container").style.display = "none";
    document.querySelector(".navigation").style.display = "none";
    const result = document.getElementById("result");
    result.style.display = "block";
    result.innerHTML = `✅ You scored ${score} out of ${questions.length} (${((score/questions.length)*100).toFixed(2)}%)`;
}

// Timer
function startTimer() {
    const timerElement = document.getElementById("timer");
    const timerInterval = setInterval(() => {
        let minutes = Math.floor(timerDuration / 60);
        let seconds = timerDuration % 60;

        timerElement.innerHTML = `Time Left: ${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;

        if (timerDuration <= 0) {
            clearInterval(timerInterval);
            submitQuiz();
        }

        timerDuration--;
    }, 1000);
}

// Start
loadQuestion(currentQuestion);
startTimer();
