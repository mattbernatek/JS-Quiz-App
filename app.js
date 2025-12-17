const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");


const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["javascipt", "scripting", "script", "js"],
        answer: 2
    },

    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        options: ["<script href='xxx.js'", "<script name='xxx.js'", "<script src='xxx.js'"],
        answer: 2
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msg('Hello World');", "msgBox('Hello World');", "alert('Hellow World');", "alertBox('Hello World');"],
        answer: 2
    },

    {
        question: "How do you create a function in JavaScript?",
        options: ["function = myFunction()", "function:myFunction()", "function myFunction()"],
        answer: 2
    },

    {
        question: "How to write an IF statement for executing some code if 'i' is NOT equal to 5?",
        options: ["if i =! 5 then", "if (i <> 5)", "if i <> 5", "if i != 5)"],
        answer: 3
    }
]
nextButton.addEventListener("click", nextQuestion);
restartButton.addEventListener("click", restartQuiz);

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    const currentQuestion = quizData[currentQuestionIndex];

    questionContainer.textContent = currentQuestion.question;

    optionsContainer.innerHTML = "";
    nextButton.disabled = true;

     if (currentQuestionIndex === quizData.length - 1) {
        nextButton.textContent = "Finish and check score";
    }

    currentQuestion.options.forEach((option, index) => {
        const optionButton = document.createElement('button');
        optionButton.textContent = option;
        optionButton.addEventListener("click", () => selectOption(index));
        optionsContainer.appendChild(optionButton);
    })
}


function selectOption(selectedIndex) {
    // Declare a variable correctIndex that will correspond to the correct answer for the loaded question
    let correctIndex = quizData[currentQuestionIndex].answer;
    
    // Get a list of all option buttons inside optionsContainer as a list using querySelectorAll that selects all nodes of a specified type within the selected conatiner. Each button corresponds to an answer at the same index in quizzData.answer
    let buttons = optionsContainer.querySelectorAll("button");
    
    // Diable all option buttons (grey them out)
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add("disabled");
    }
    // Color the correct button green
    buttons[correctIndex].style.backgroundColor = "green";

    // If selectedIndex isn't correctIndex, color the selected button red
    if (selectedIndex !== correctIndex) {
        buttons[selectedIndex].style.backgroundColor = "red";
    } else {
        score++;
    }

    

    // Enable the Next button
    nextButton.disabled = false;
}


function nextQuestion() {
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.classList.add("hidden");
        scoreContainer.classList.remove("hidden");
        scoreElement.textContent = `You scored ${score} out of ${quizData.length}`;
    }
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next question";
    quizContainer.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
    loadQuestion();
}

loadQuestion();
