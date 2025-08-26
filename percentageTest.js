// Dummy Questions Generator
const generateQuestions = () => {
  const questions = [];
  for (let i = 1; i <= 100; i++) {
    questions.push({
      question: `Q${i}. What is ${i}% of ${i * 10}?`,
      options: [
        `${i}`,
        `${i * 2}`,
        `${(i * 10 * i) / 100}`, // Correct
        `${i * 3}`
      ],
      answer: 2
    });
  }
  return questions;
};

let questions = generateQuestions();
let currentQuestion = 0;
let answers = Array(100).fill(null);
let timeLeft = 60;
let timer;

const questionBox = document.getElementById('question-box');
const tracker = document.getElementById('tracker');
const timerDisplay = document.getElementById('timer');
const resultBox = document.getElementById('result');
const navButtons = document.getElementById('navigation-buttons');

function startExam() {
  document.querySelector('#question-box').classList.remove('hidden');
  document.querySelector('#tracker').classList.remove('hidden');
  document.querySelector('#navigation-buttons').classList.remove('hidden');
  document.querySelector('#timer').classList.remove('hidden');
  document.querySelector('button[onclick="startExam()"]').style.display = 'none';
  loadQuestion(currentQuestion);
  buildTracker();
  startTimer();
}

function goBack() {
  window.location.href = "percentages.html";
}

function loadQuestion(index) {
  clearInterval(timer);
  timeLeft = 60;
  startTimer();

  const q = questions[index];
  let html = `<h3>${q.question}</h3><div class="options">`;
  q.options.forEach((opt, i) => {
    const selected = answers[index] === i ? 'selected' : '';
    html += `<div class="option ${selected}" onclick="selectOption(${i})">${opt}</div>`;
  });
  html += `</div>`;
  questionBox.innerHTML = html;
  updateTracker();
}

function selectOption(i) {
  answers[currentQuestion] = i;
  loadQuestion(currentQuestion);
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    loadQuestion(currentQuestion);
  }
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    loadQuestion(currentQuestion);
  }
}

function startTimer() {
  timerDisplay.innerText = `Time left: ${timeLeft}s`;
  timer = setInterval(() => {
    timeLeft--;
    timerDisplay.innerText = `Time left: ${timeLeft}s`;
    if (timeLeft <= 0) {
      clearInterval(timer);
      nextQuestion();
    }
  }, 1000);
}

function buildTracker() {
  tracker.innerHTML = "";
  for (let i = 0; i < questions.length; i++) {
    const div = document.createElement("div");
    div.className = "tracker-item";
    div.innerText = i + 1;
    div.onclick = () => {
      currentQuestion = i;
      loadQuestion(currentQuestion);
    };
    tracker.appendChild(div);
  }
}

function updateTracker() {
  const items = document.querySelectorAll(".tracker-item");
  items.forEach((item, i) => {
    if (answers[i] !== null) {
      item.style.backgroundColor = "#1b5e20"; // dark green for answered
    } else {
      item.style.backgroundColor = "#4caf50";
    }
  });
}

function submitTest() {
  clearInterval(timer);
  let score = 0;
  answers.forEach((ans, i) => {
    if (ans === questions[i].answer) score++;
  });

  resultBox.innerHTML = `<h2>You scored ${score} out of 100</h2>`;
  resultBox.classList.remove('hidden');

  document.querySelector('#question-box').classList.add('hidden');
  document.querySelector('#navigation-buttons').classList.add('hidden');
  document.querySelector('#tracker').classList.add('hidden');
  document.querySelector('#timer').classList.add('hidden');
}
