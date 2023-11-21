const questions = [
    {
      question: "What does 'Demat' stand for in the context of financial accounts?",
      options: [
        { option: "Deposit Management", isCorrect: false },
        { option: "Dematerialized", isCorrect: true },
        { option: "Digital Account", isCorrect: false },
        { option: "Document Maintenance", isCorrect: false }
      ]
    },
    {
      question: "Which of the following is the primary purpose of a Demat account?",
      options: [
        { option: "Opening a savings account", isCorrect: false },
        { option: "Trading in stocks and securities", isCorrect: true },
        { option: "Borrowing money", isCorrect: false },
        { option: "Tracking personal expenses", isCorrect: false }
      ]
    },
    {
      question: "Who typically provides Demat account services?",
      options: [
        { option: "Supermarkets", isCorrect: false },
        { option: "Banks and financial institutions", isCorrect: true },
        { option: "Mobile service providers", isCorrect: false },
        { option: "Educational institutions", isCorrect: false }
      ]
    },
    {
      question: "What is the main advantage of holding securities in a Demat account?",
      options: [
        { option: "Earning high-interest rates", isCorrect: false },
        { option: "Avoiding market fluctuations", isCorrect: false },
        { option: "Physical certificates are more secure", isCorrect: false },
        { option: "Easier tracking and transfer of securities", isCorrect: true }
      ]
    }
  ];


  const ele=document.getElementById('question');
  ele.innerHTML='<div class="cl"><h1>'+questions[0].question+'</h1></div>'+
  '<div class="cl"><h1>'+'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, at cupiditate. Itaque.'+'</h1></div>';


