const questions = [
  {
      question: "What does 'Demat' stand for in the context of financial accounts?",
      options: ["Deposit Management", "Dematerialized", "Digital Account", "Document Maintenance"],
      correctAnswer: "Dematerialized"
  },
  {
      question: "Which of the following is the primary purpose of a Demat account?",
      options: ["Opening a savings account", "Trading in stocks and securities", "Borrowing money", "Tracking personal expenses"],
      correctAnswer: "Trading in stocks and securities"
  },
  {
      question: "Who typically provides Demat account services?",
      options: ["Supermarkets", "Banks and financial institutions", "Mobile service providers", "Educational institutions"],
      correctAnswer: "Banks and financial institutions"
  },
  {
      question: "What is the main advantage of holding securities in a Demat account?",
      options: ["Earning high-interest rates", "Avoiding market fluctuations", "Physical certificates are more secure", "Easier tracking and transfer of securities"],
      correctAnswer: "Easier tracking and transfer of securities"
  }
];

let currentQuestionIndex = 0;
    let userScore = 0;

    function displayQuestion() {
        const currentQuestion = questions[currentQuestionIndex];
        document.getElementById("question").innerText = `Question ${currentQuestionIndex + 1}: ${currentQuestion.question}`;

        const optionsContainer = document.getElementById("optionsContainer");
        optionsContainer.innerHTML = "";
        currentQuestion.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.classList.add("option");
            button.innerText = option;
            button.onclick = function () {
                checkAnswer(this);
            };
            optionsContainer.appendChild(button);
        });
    }

    function checkAnswer(selectedOption) {
        const currentQuestion = questions[currentQuestionIndex];
        const userAnswer = selectedOption.innerText;

        if (userAnswer === currentQuestion.correctAnswer) {
            userScore++;
        }

        document.querySelectorAll(".option").forEach(option => {
            option.disabled = true;
        });
    }

    function nextQuestion() {
        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
            document.querySelectorAll(".option").forEach(option => {
                option.disabled = false;
            });
        } else {
            displayResult();
        }
    }

    function displayResult() {
        const resultContainer = document.getElementById("resultContainer");
        resultContainer.style.display = "block";

        const result = document.getElementById("result");
        result.innerText = `Your Score: ${userScore} / ${questions.length}`;
    }

    // Initial display
    displayQuestion();