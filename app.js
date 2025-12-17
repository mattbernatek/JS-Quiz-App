// Connecting HTML elements to JavaScript
const quizContainer = document.getElementById("quiz-container");
const questionContainer = document.getElementById("question-container");
const optionsContainer = document.getElementById("options-container");
const nextButton = document.getElementById("next-button");


const scoreContainer = document.getElementById("score-container");
const scoreElement = document.getElementById("score");
const restartButton = document.getElementById("restart-button");

// a variable containing an array of objects with data for every question of the quiz i.e. the question, possible answers, and the correct answer. 
const quizData = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        options: ["javascript", "scripting", "script", "js"],
        answer: 2
    },

    {
        question: "What is the correct syntax for referring to an external script called xxx.js?",
        options: ["<script href='xxx.js'", "<script name='xxx.js'", "<script src='xxx.js'"],
        answer: 2
    },

    {
        question: "How do you write 'Hello World' in an alert box?",
        options: ["msg('Hello World');", "msgBox('Hello World');", "alert('Hello World');", "alertBox('Hello World');"],
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

// Variable used to track the question the player is currently on
let currentQuestionIndex = 0;

// Variabled used for tracking score
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
    // A variable that corresponds to the correct answer for the loaded question
    let correctIndex = quizData[currentQuestionIndex].answer;
    
    // Grabbing a list of all buttons created in the loadQuestion function.
    let buttons = optionsContainer.querySelectorAll("button");
    
    // Diabling all option buttons (greying them out) and adding a new class to each button to apply styling
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].disabled = true;
        buttons[i].classList.add("disabled");
    }
    // Coloring the correct button green
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
    // Updating the question index to ensure the right question is displayed
    currentQuestionIndex++;
    
    // logic for deciding whether to load the next question or hide the quizContainer, show the scoreContainer and display the result
    if (currentQuestionIndex < quizData.length) {
        loadQuestion();
    } else {
        quizContainer.classList.add("hidden");
        scoreContainer.classList.remove("hidden");
        scoreElement.textContent = `You scored ${score} out of ${quizData.length}`;
    }
}

// A function to reset everything and start from scratch
function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.textContent = "Next question";
    quizContainer.classList.remove("hidden");
    scoreContainer.classList.add("hidden");
    loadQuestion();
}

loadQuestion();
