const questions = [];

// 40 Easy Questions
for (let i = 1; i <= 40; i++) {
  const cp = 100 + i;
  const profit = 20;
  const sp = cp + profit;
  questions.push({
    question: `${i}. A trader buys an item for ₹${cp} and sells it for ₹${sp}. What is the profit percentage?`,
    options: ["10%", "15%", "20%", "25%"],
    answer: "20%",
    explanation: `Profit = SP - CP = ₹${sp - cp}, Profit% = (Profit / CP) × 100 = (${sp - cp} / ${cp}) × 100`,
    video: "https://www.youtube.com/watch?v=dummy"
  });
}

// 30 Medium Questions
for (let i = 41; i <= 70; i++) {
  const cp = 200 + i;
  const sp = cp - 10;
  const loss = cp - sp;
  const lossPercent = ((loss / cp) * 100).toFixed(2) + "%";
  questions.push({
    question: `${i}. A man buys an article for ₹${cp} and sells it for ₹${sp}. What is his loss percentage?`,
    options: ["2%", "3%", lossPercent, "6%"],
    answer: lossPercent,
    explanation: `Loss = CP - SP = ₹${loss}, Loss% = (Loss / CP) × 100 = (${loss} / ${cp}) × 100`,
    video: "https://www.youtube.com/watch?v=dummy"
  });
}

// 30 Hard Questions
for (let i = 71; i <= 100; i++) {
  const cp = 300 + i;
  const profitPercent = 25;
  const sp = cp + (cp * profitPercent) / 100;
  questions.push({
    question: `${i}. An article is sold at a profit of ${profitPercent}%. If the cost price is ₹${cp}, what is the selling price?`,
    options: [`₹${sp}`, `₹${cp}`, `₹${cp + 20}`, `₹${cp + 10}`],
    answer: `₹${sp}`,
    explanation: `SP = CP + (Profit% of CP) = ₹${cp} + (${profitPercent}% of ₹${cp}) = ₹${sp}`,
    video: "https://www.youtube.com/watch?v=dummy"
  });
}

let currentQuestion = 0;
let score = 0;
let timer = 60;
let interval;
const answers = new Array(questions.length).fill(null);

function showQuestion(index) {
  if (index >= questions.length) return;

  const q = questions[index];
  document.getElementById('question').textContent = q.question;
  const optionsDiv = document.getElementById('options');
  optionsDiv.innerHTML = "";
  q.options.forEach((opt) => {
    const btn = document.createElement('button');
    btn.textContent = opt;
    btn.onclick = () => {
      answers[index] = opt;
      document.getElementById('questionNumbers').children[index].classList.add('answered');
      nextQuestion();
    };
    optionsDiv.appendChild(btn);
  });

  clearInterval(interval);
  timer = 60;
  updateTimer();
  interval = setInterval(() => {
    timer--;
    updateTimer();
    if (timer <= 0) {
      clearInterval(interval);
      nextQuestion();
    }
  }, 1000);
}

function updateTimer() {
  document.getElementById('timer').textContent = `Time Left: ${timer}s`;
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function prevQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

function submitQuiz() {
  clearInterval(interval);
  document.getElementById('quiz-container').style.display = 'none';
  const resultBox = document.getElementById('result');
  const resultContainer = document.getElementById('result-container');
  resultBox.innerHTML = `<h2>Test Results</h2>`;
  let correct = 0;

  questions.forEach((q, i) => {
    const userAns = answers[i] || "Not Attempted";
    const isCorrect = userAns === q.answer;
    if (isCorrect) correct++;
    resultBox.innerHTML += `
      <div style="margin-bottom:10px;">
        <strong>Q${i + 1}:</strong> ${q.question}<br>
        <strong>Your Answer:</strong> ${userAns}<br>
        <strong>Correct Answer:</strong> ${q.answer}<br>
        <strong>Explanation:</strong> ${q.explanation}<br>
        <a href="${q.video}" target="_blank">Watch Video</a>
        <hr>
      </div>`;
  });

  resultBox.innerHTML = `<h2>You scored ${correct} out of ${questions.length}</h2>` + resultBox.innerHTML;
  resultContainer.style.display = 'block';
}

function renderQuestionNumbers() {
  const container = document.getElementById('questionNumbers');
  for (let i = 0; i < questions.length; i++) {
    const num = document.createElement('div');
    num.textContent = i + 1;
    container.appendChild(num);
  }
}

renderQuestionNumbers();
showQuestion(currentQuestion);
