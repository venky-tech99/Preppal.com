const questions = [
    // Example format: fill with 100 unique MCQs about Networking Devices
    {
        question: "Which device operates at the Data Link layer of the OSI model?",
        options: ["Router", "Switch", "Hub", "Repeater"],
        answer: 1,
        explanation: "Switches operate at Layer 2 (Data Link layer) and forward data based on MAC addresses."
    },
    {
        question: "A device that connects different networks together is called?",
        options: ["Hub", "Router", "Switch", "Repeater"],
        answer: 1,
        explanation: "Routers operate at Layer 3 (Network layer) and connect different networks."
    }
    // ➡️ Continue until you have all 100 unique questions...
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 60;
let userAnswers = new Array(questions.length).fill(null);

function startTimer() {
    clearInterval(timer);
    timeLeft = 60;
    document.getElementById("time").textContent = timeLeft;
    timer = setInterval(() => {
        timeLeft--;
        document.getElementById("time").textContent = timeLeft;
        if (timeLeft <= 0) {
            nextQuestion();
        }
    }, 1000);
}

function showQuestion(index) {
    if (index < 0 || index >= questions.length) return;
    currentQuestion = index;
    const q = questions[index];
    document.getElementById("quiz-container").innerHTML = `
        <div class="question-box">
            <h3>Q${index + 1}. ${q.question}</h3>
            <div class="options">
                ${q.options.map((opt, i) => `
                    <label>
                        <input type="radio" name="option" value="${i}" ${userAnswers[index] === i ? 'checked' : ''}>
                        ${opt}
                    </label>
                `).join('')}
            </div>
        </div>
    `;
    startTimer();
}

function saveAnswer() {
    const selected = document.querySelector('input[name="option"]:checked');
    if (selected) {
        userAnswers[currentQuestion] = parseInt(selected.value);
    }
}

function nextQuestion() {
    saveAnswer();
    if (currentQuestion < questions.length - 1) {
        showQuestion(currentQuestion + 1);
    } else {
        submitTest();
    }
}

function prevQuestion() {
    saveAnswer();
    if (currentQuestion > 0) {
        showQuestion(currentQuestion - 1);
    }
}

function createNavigation() {
    const navContainer = document.getElementById("navigation");
    navContainer.innerHTML = "";
    for (let i = 0; i < questions.length; i++) {
        const btn = document.createElement("button");
        btn.textContent = i + 1;
        btn.className = "nav-btn";
        btn.onclick = () => {
            saveAnswer();
            showQuestion(i);
        };
        navContainer.appendChild(btn);
    }
}

function submitTest() {
    saveAnswer();
    clearInterval(timer);
    score = 0;
    let wrongAnswers = [];
    questions.forEach((q, i) => {
        if (userAnswers[i] === q.answer) {
            score++;
        } else {
            wrongAnswers.push({
                question: q.question,
                correct: q.options[q.answer],
                explanation: q.explanation
            });
        }
    });

    document.getElementById("result").style.display = "block";
    document.getElementById("result").innerHTML = `
        <h2>Your Score: ${score} / ${questions.length}</h2>
        ${wrongAnswers.map(w => `
            <div class="wrong-answer">
                <strong>Q:</strong> ${w.question}<br>
                <strong>Correct Answer:</strong> ${w.correct}<br>
                <em>${w.explanation}</em>
            </div>
        `).join('')}
        <p>✅ You have completed Networking Devices Test. Now you can move to the Technical MCQs section.</p>
    `;
}

window.onload = () => {
    createNavigation();
    showQuestion(0);
};
