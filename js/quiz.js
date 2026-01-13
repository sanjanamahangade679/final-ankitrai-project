// 🔀 Shuffle questions on every new visit
let quizData = [
  {
    question: "What does VAPT stand for?",
    options: [
      "Virtual Access Protection Tool",
      "Vulnerability Assessment and Penetration Testing",
      "Verified Application Protection Test",
      "Variable Attack Prevention Technique"
    ],
    correct: 1
  },
  {
    question: "Which password is strongest?",
    options: ["password123", "admin@123", "Qw@9#Lp!2", "12345678"],
    correct: 2
  },
  {
    question: "What is phishing?",
    options: [
      "Firewall technology",
      "Attack to steal sensitive data",
      "Encryption method",
      "Antivirus software"
    ],
    correct: 1
  },
  {
    question: "Which protocol is secure?",
    options: ["HTTP", "FTP", "SMTP", "HTTPS"],
    correct: 3
  },
  {
    question: "SOC stands for?",
    options: [
      "System Operation Center",
      "Security Operations Center",
      "Secure Online Cloud",
      "Software Organization Control"
    ],
    correct: 1
  }
];

// 🔀 Fisher–Yates shuffle
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Shuffle questions on load (NEW VISIT)
shuffleArray(quizData);

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const options = document.querySelectorAll(".quiz-option");
const progressEl = document.getElementById("progress");
const nextBtn = document.getElementById("nextBtn");

function loadQuestion() {
  const q = quizData[currentQuestion];

  questionEl.textContent = q.question;
  progressEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

  options.forEach((btn, i) => {
    btn.textContent = q.options[i];
    btn.className = "quiz-option";
    btn.disabled = false;
  });

  nextBtn.style.display = "none";
}

function selectOption(index) {
  const correct = quizData[currentQuestion].correct;

  options.forEach(btn => btn.disabled = true);

  if (index === correct) score++;

  options[index].classList.add(index === correct ? "correct" : "wrong");
  options[correct].classList.add("correct");

  nextBtn.style.display = "inline-block";
}

function nextQuestion() {
  currentQuestion++;
  currentQuestion < quizData.length ? loadQuestion() : showResult();
}

function showResult() {
  document.querySelector(".quiz-box").innerHTML = `
    <h2 class="quiz-title">Quiz Completed 🎉</h2>
    <p style="font-size:20px;">Score: <strong>${score}/${quizData.length}</strong></p>
    <button class="quiz-next-btn" style="display:inline-block;" onclick="location.reload()">
      🔄 Restart Quiz
    </button>
  `;
}

loadQuestion();
