const passage = document.querySelector(".q-left");
const question = document.querySelector(".q-right");
let secName = document.querySelector(".section-name");
let currentQuestionNumber = 1;
const nextQuestion = document.querySelector(".next-question");
const prevQuestion = document.querySelector(".prev-question");
const visQueNum = document.querySelector(".q-number");
const pagQueNum = document.querySelector(".page-no-down");
const allQueNum = document.querySelector(".all-question");

visQueNum.textContent = currentQuestionNumber;
pagQueNum.textContent = currentQuestionNumber;

const quiz = {
  1: {
    question_content: "France is a country in Western Europe known for its rich history, art, and culture. Its capital is also one of the most visited cities in the world.",
    question: "What is the capital of France?",
    options: ["Berlin", "Madrid", "Paris", "Rome"],
    type: "readiing and writing",
    selectedAnswer: "",
    correctAnswer: "Paris",
  },
  2: {
    question_content: "The Red Planet is the fourth planet from the Sun and is famous for its reddish appearance due to iron oxide on its surface.",
    question: "Which planet is known as the Red Planet?",
    options: ["Earth", "Mars", "Jupiter", "Venus"],
    type: "readiing and writing",
    selectedAnswer: "",
    correctAnswer: "Mars",
  },
  3: {
    question_content: "This large ocean covers about 30% of the Earth's surface and is the biggest and deepest ocean on the planet.",
    question: "Which ocean is the largest on Earth?",
    options: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    type: "reading and writing",
    selectedAnswer: "",
    correctAnswer: "Pacific Ocean",
  },
  4: {
    question_content: "'Hamlet' is a famous tragedy play written by an English playwright during the late 16th century. It is one of the most well-known works in literature.",
    question: "Who wrote 'Hamlet'?",
    options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "J.K. Rowling"],
    type: "readiing and writing",
    selectedAnswer: "",
    correctAnswer: "William Shakespeare",
  },
  5: {
    question_content: "Addition is one of the basic operations in mathematics. It helps in combining numbers to find their total.",
    question: "What is 12 + 7?",
    options: ["15", "19", "20", "22"],
    type: "math",
    selectedAnswer: "",
    correctAnswer: "19",
  },
  6: {
    question_content: "Multiplication is a faster way of adding the same number multiple times. It is a fundamental operation in math.",
    question: "What is 6 × 4?",
    options: ["20", "24", "26", "30"],
    type: "math",
    selectedAnswer: "",
    correctAnswer: "24",
  },
  7: {
    question_content: "Subtraction helps in finding the difference between two numbers. It is useful in everyday calculations.",
    question: "What is 15 - 9?",
    options: ["4", "5", "6", "7"],
    type: "math",
    selectedAnswer: "",
    correctAnswer: "6",
  },
  8: {
    question_content: "Division is used to split a number into equal parts. It is the opposite of multiplication.",
    question: "What is 36 ÷ 6?",
    options: ["5", "6", "7", "8"],
    type: "math",
    selectedAnswer: "",
    correctAnswer: "6",
  },
};

console.log(Object.keys(quiz).length);
allQueNum.textContent = Object.keys(quiz).length;

//question Content//
//question Content//
//question Content//
const passage_text = document.createElement("p");
passage_text.textContent = quiz[currentQuestionNumber].question_content;
passage.append(passage_text);

//Question//
//Question//
//Question//
const questionText = document.createElement("p");
questionText.textContent = quiz[currentQuestionNumber].question;
question.append(questionText);

//Options//
//Options//
//Options//
const optionsContainer = document.createElement("ul");
optionsContainer.classList.add("options-container");
question.append(optionsContainer);

const optionA = document.createElement("li");
const optionB = document.createElement("li");
const optionC = document.createElement("li");
const optionD = document.createElement("li");

optionA.classList.add("option");
optionB.classList.add("option");
optionC.classList.add("option");
optionD.classList.add("option");

optionA.textContent = "A) ";
optionB.textContent = "B) ";
optionC.textContent = "C) ";
optionD.textContent = "D) ";

let optionsArray = quiz[currentQuestionNumber].options;

optionA.textContent += optionsArray[0];
optionB.textContent += optionsArray[1];
optionC.textContent += optionsArray[2];
optionD.textContent += optionsArray[3];

optionsContainer.append(optionA);
optionsContainer.append(optionB);
optionsContainer.append(optionC);
optionsContainer.append(optionD);

const options = document.querySelectorAll(".option");
options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      option.classList.remove("selected");
    });
    option.classList.add("selected");
    quiz[currentQuestionNumber].selectedAnswer = option.textContent.slice(3);
    console.log(quiz[currentQuestionNumber].selectedAnswer);
  });
});

// ////////////////////////////////////////////////////Functions////////////////////////////////////////////////
// ////////////////////////////////////////////////////Functions////////////////////////////////////////////////
// ////////////////////////////////////////////////////Functions////////////////////////////////////////////////

// change calculator and reference and pen and more//
function changeIcons() {
  const calculator = document.querySelector(".calculator");
  const reference = document.querySelector(".reference");
  const pen = document.querySelector(".pen");
  const more = document.querySelector(".more");
  if (quiz[currentQuestionNumber].type === "readiing and writing") {
    calculator.style.display = "none";
    reference.style.display = "none";
    pen.style.display = "flex";
    more.style.display = "flex";
    secName.textContent = "Section 1: readiing and writing";
  } else if (quiz[currentQuestionNumber].type === "math") {
    calculator.style.display = "flex";
    reference.style.display = "flex";
    pen.style.display = "none";
    more.style.display = "none";
    secName.textContent = "Section 2: Math";
  }
}

// //////////////////////////////// Functions ////////////////////////////////
// //////////////////////////////// Functions ////////////////////////////////
// //////////////////////////////// Functions ////////////////////////////////

//////////////////////////////////////////////////////Next Question////////////////////////////////////////////
//////////////////////////////////////////////////////Next Question////////////////////////////////////////////
//////////////////////////////////////////////////////Next Question////////////////////////////////////////////

nextQuestion.addEventListener("click", () => {
  let selectedAnswer = quiz[currentQuestionNumber].selectedAnswer;
  console.log(selectedAnswer);
  if (quiz[currentQuestionNumber].correctAnswer === selectedAnswer) {
    console.log("Correct Answer");
  } else if (quiz[currentQuestionNumber].selectedAnswer === "") {
  } else {
    console.log("Wrong Answer");
  }
  if (currentQuestionNumber < Object.keys(quiz).length) {
    currentQuestionNumber++;
    visQueNum.textContent = currentQuestionNumber;
    pagQueNum.textContent = currentQuestionNumber;
    passage_text.textContent = quiz[currentQuestionNumber].question_content;
    questionText.textContent = quiz[currentQuestionNumber].question;
    optionsArray = quiz[currentQuestionNumber].options;
    optionA.textContent = "A) " + optionsArray[0];
    optionB.textContent = "B) " + optionsArray[1];
    optionC.textContent = "C) " + optionsArray[2];
    optionD.textContent = "D) " + optionsArray[3];
    options.forEach((option) => {
      option.classList.remove("selected");
    });
  }
  changeIcons();
});

// /////////////////////////////// Previous Question ////////////////////////////
// /////////////////////////////// Previous Question ////////////////////////////
// /////////////////////////////// Previous Question ////////////////////////////

prevQuestion.addEventListener("click", () => {
  let selectedAnswer = quiz[currentQuestionNumber].selectedAnswer;
  console.log(selectedAnswer);
  if (quiz[currentQuestionNumber].correctAnswer === selectedAnswer) {
    console.log("Correct Answer");
  } else if (quiz[currentQuestionNumber].selectedAnswer === "") {
  } else {
    console.log("Wrong Answer");
  }
  if (currentQuestionNumber > 1) {
    currentQuestionNumber--;
    visQueNum.textContent = currentQuestionNumber;
    pagQueNum.textContent = currentQuestionNumber;
    passage_text.textContent = quiz[currentQuestionNumber].question_content;
    questionText.textContent = quiz[currentQuestionNumber].question;
    optionsArray = quiz[currentQuestionNumber].options;
    optionA.textContent = "A) " + optionsArray[0];
    optionB.textContent = "B) " + optionsArray[1];
    optionC.textContent = "C) " + optionsArray[2];
    optionD.textContent = "D) " + optionsArray[3];
    options.forEach((option) => {
      option.classList.remove("selected");
    });
  }
  changeIcons();
});
