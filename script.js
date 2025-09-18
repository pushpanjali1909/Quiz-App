const questions = [ 
  { 
    question: "Which is largest animal in the world?", 
    answers: [ 
      { text: "Shark", correct: false}, 
      { text: "Blue whale", correct: true}, 
      { text: "Elephant", correct: false}, 
      { text: "Giraffe", correct: false}, 
    ] 
  }, 
  { 
    question: "Which planet is known as the Red Planet?", 
    answers: [ 
      { text: "Earth", correct: false }, 
      { text: "Mars", correct: true }, 
      { text: "Jupiter", correct: false }, 
      { text: "Saturn", correct: false }, 
    ], 
  }, 
  { 
    question: "Who is known as the Father of Computers?", 
    answers: [ 
      { text: "Charles Babbage", correct: true }, 
      { text: "Albert Einstein", correct: false }, 
      { text: "Isaac Newton", correct: false }, 
      { text: "Thomas Edison", correct: false }, 
    ], 
  }, 
  { 
    question: "Which is the smallest prime number?", 
    answers: [ 
      { text: "1", correct: false }, 
      { text: "2", correct: true }, 
      { text: "3", correct: false }, 
      { text: "5", correct: false }, 
    ], 
  }, 
  { 
    question: "What is the national fruit of India?", 
    answers: [ 
      { text: "Banana", correct: false }, 
      { text: "Mango", correct: true }, 
      { text: "Apple", correct: false }, 
      { text: "Papaya", correct: false }, 
    ], 
  }, 
  { 
    question: "Which gas do plants release during photosynthesis?", 
    answers: [ 
      { text: "Carbon dioxide", correct: false }, 
      { text: "Oxygen", correct: true }, 
      { text: "Nitrogen", correct: false }, 
      { text: "Helium", correct: false }, 
    ], 
  }, 
  { 
    question: "Which is the largest continent in the world?", 
    answers: [ 
      { text: "Africa", correct: false }, 
      { text: "Asia", correct: true }, 
      { text: "Europe", correct: false }, 
      { text: "Australia", correct: false }, 
    ], 
  }, 
  { 
    question: "What is the capital of Japan?", 
    answers: [ 
      { text: "Beijing", correct: false }, 
      { text: "Tokyo", correct: true }, 
      { text: "Seoul", correct: false }, 
      { text: "Bangkok", correct: false }, 
    ] 
  } 
]; 

const questionElement = document.getElementById("question"); 
const answerButtons = document.getElementById("answer-buttons"); 
const nextButton = document.getElementById("next-btn"); 

let currentQuestionIndex = 0; 
let score = 0; 

function startQuiz(){ 
  currentQuestionIndex = 0; 
  score = 0; 
  nextButton.innerHTML = "Next"; 
  showQuestion(); 
} 

function showQuestion(){ 
  resetState(); 
  let currentQuestion = questions[currentQuestionIndex]; 
  let questionNo = currentQuestionIndex + 1; 
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; 

  currentQuestion.answers.forEach(answer => { 
    const button = document.createElement("button"); 
    button.innerHTML = answer.text; 
    button.classList.add("btn"); 
    answerButtons.appendChild(button); 
    if(answer.correct){ 
      button.dataset.correct = answer.correct; 
    } 
    button.addEventListener("click" , selectAnswer); 
  }); 
} 

function resetState(){ 
  nextButton.style.display = "none";   
  while(answerButtons.firstChild) { 
    answerButtons.removeChild(answerButtons.firstChild); 
  } 
} 

function selectAnswer(e){ 
  const selectedBtn = e.target; 
  const isCorrect = selectedBtn.dataset.correct === "true"; 
  if(isCorrect) { 
    selectedBtn.classList.add("correct"); 
    score++; 
  }else{ 
    selectedBtn.classList.add("incorrect"); 
  } 

  Array.from(answerButtons.children).forEach(button => {
    if(button.dataset.correct ==="true"){
      button.classList.add("correct");
    }
    button.disabled = true;
  });

  nextButton.style.display = "block";
} 

nextButton.addEventListener("click", () => {
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  } else {
    showScore();
  }
});

function showScore(){
  resetState();
  questionElement.innerHTML = `🎉 Quiz Finished! <br> You scored ${score} out of ${questions.length}.`;
  nextButton.style.display = "none";
}

startQuiz();



  


