const questions = [
  {
    question: "What is 20% of 150?",
    solution: "20% of 150 = (20/100) × 150 = 30",
    youtube: "https://www.youtube.com/watch?v=8zKgW5v3fes"
  },
  {
    question: "If 75% of a number is 90, what is the number?",
    solution: "Let number be x. 75% of x = 90 → (75/100)x = 90 → x = 120",
    youtube: "https://www.youtube.com/watch?v=JRxHLX2xXyY"
  },
  {
    question: "A number is increased by 25%. What is the new number if the original was 240?",
    solution: "New number = 240 + (25/100 × 240) = 300",
    youtube: "https://www.youtube.com/watch?v=kcth7AxWxg4"
  },
  {
    question: "A value decreases from 500 to 400. What is the percentage decrease?",
    solution: "Decrease = 100; % Decrease = (100/500)×100 = 20%",
    youtube: "https://www.youtube.com/watch?v=R5r8Coio7L8"
  },
  {
    question: "In a survey, 60% liked apples. If 300 people were surveyed, how many liked apples?",
    solution: "60% of 300 = (60/100) × 300 = 180",
    youtube: "https://www.youtube.com/watch?v=QJrcijTD5Fk"
  },
  {
    question: "If 30% of a number is 45, what is the number?",
    solution: "Let number be x. (30/100)x = 45 → x = 150",
    youtube: "https://www.youtube.com/watch?v=TfqH7tdY4vA"
  },
  {
    question: "A value is increased by 10% and then decreased by 10%. Is there a net change?",
    solution: "Yes, there’s a net decrease of 1%",
    youtube: "https://www.youtube.com/watch?v=Fh1JdZ5MGRg"
  },
  {
    question: "Find the percentage change from 200 to 250.",
    solution: "Change = 50 → (50/200) × 100 = 25%",
    youtube: "https://www.youtube.com/watch?v=Md4VnIdH_j4"
  },
  {
    question: "If 40% students passed and total was 500, how many failed?",
    solution: "Passed = 200 → Failed = 500 - 200 = 300",
    youtube: "https://www.youtube.com/watch?v=zBlHe_cEcsU"
  },
  {
    question: "Find 12.5% of 64.",
    solution: "12.5% = 1/8 → (1/8) × 64 = 8",
    youtube: "https://www.youtube.com/watch?v=KM9yAb-CWuc"
  }
];

// Render the questions
const container = document.getElementById("questionsContainer");
questions.forEach((q, index) => {
  const box = document.createElement("div");
  box.className = "question-box";
  box.innerHTML = `
    <h4>Q${index + 1}: ${q.question}</h4>
    <p><strong>Solution:</strong> ${q.solution}</p>
    <a href="${q.youtube}" target="_blank">Watch on YouTube</a>
  `;
  container.appendChild(box);
});
