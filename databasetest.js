const questions = [
    // === 30 EASY QUESTIONS ===
    {
        question: "Which of the following is a type of database model?",
        options: ["Relational", "Procedural", "Sequential", "Modular"],
        answer: 0,
        explanation: "Relational model organizes data into tables."
    },
    {
        question: "What does SQL stand for?",
        options: ["Structured Query Language", "Sequential Query Language", "Structured Question Language", "Simple Query Logic"],
        answer: 0,
        explanation: "SQL is Structured Query Language."
    },
    // ... add 28 more EASY questions here

    // === 40 MEDIUM QUESTIONS ===
    {
        question: "Which normal form removes partial dependency?",
        options: ["1NF", "2NF", "3NF", "BCNF"],
        answer: 1,
        explanation: "2NF removes partial dependency."
    },
    {
        question: "Which SQL clause is used to filter records?",
        options: ["ORDER BY", "GROUP BY", "WHERE", "SELECT"],
        answer: 2,
        explanation: "WHERE clause filters records."
    },
    // ... add 38 more MEDIUM questions here

    // === 30 HARD QUESTIONS ===
    {
        question: "What is a clustered index?",
        options: ["Index stored separately from table", "Index that defines table's physical order", "Index on non-key columns", "Temporary index"],
        answer: 1,
        explanation: "Clustered index determines table's physical order."
    },
    {
        question: "What is a correlated subquery?",
        options: ["Subquery that runs independently", "Subquery that refers to outer query", "Recursive query", "Unoptimized query"],
        answer: 1,
        explanation: "Correlated subquery depends on outer query values."
    },
    // ... add 28 more HARD questions here
];

let currentQuestion = 0;
let score = 0;
let timer;
let timeLeft = 60;
let userAnswers = Array(questions.length).fill(null);

function loadQuestion(index) {
    document.getElementById("question").innerText = (index+1) + ". " + questions[index].question;
    const optsDiv = document.getElementById("options");
    optsDiv.innerHTML = "";
    questions[index].options.forEach((opt, i) => {
        const lbl = document.createElement("label");
        lbl.innerHTML = `<input type="radio" name="option" value="${i}" ${userAnswers[index]===i ? "checked" : ""}> ${opt}`;
        optsDiv.appendChild(lbl);
    });
    resetTimer();
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
            nextQuestion();
        }
    }, 1000);
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
    score = 0;
    let resultHTML = `<h2>Test Completed!</h2>`;
    resultHTML += "<p>Review your answers below:</p><ul>";
    questions.forEach((q, i) => {
        const isCorrect = userAnswers[i] === q.answer;
        if (isCorrect) score++;
        else {
            resultHTML += `<li>Q${i+1}: Correct Answer: ${q.options[q.answer]}<br>Explanation: ${q.explanation}</li>`;
        }
    });
    resultHTML += "</ul>";
    resultHTML = `<h2>Your Score: ${score} / ${questions.length}</h2>` + resultHTML;
    document.getElementById("result").innerHTML = resultHTML + `<p style='margin-top:15px;color:green;'>You have completed Database MCQs. Next, you can start Technical MCQs!</p>`;
    document.getElementById("result").style.display = "block";
}

function createNavigation() {
    const nav = document.getElementById("navigation");
    for (let i = 0; i < questions.length; i++) {
        const btn = document.createElement("button");
        btn.className = "nav-btn";
        btn.innerText = i + 1;
        btn.onclick = () => { saveAnswer(); currentQuestion = i; loadQuestion(i); };
        nav.appendChild(btn);
    }
}

createNavigation();
loadQuestion(currentQuestion);
