# JavaScript Fundamentals Quiz (Win98-style)

This project is a simple JavaScript quiz application built as part of the Coding Temple JavaScript module.

The goal of the assignment was to practise:
- working with arrays of objects
- DOM manipulation
- event listeners
- state management using variables
- conditional logic
- updating the UI based on user interaction

As an extra personal touch, the UI is styled to resemble a classic Windows 98 program.

---

## 🚀 Features

- Multiple-choice quiz powered by JavaScript
- Questions stored as structured data (array of objects)
- Immediate feedback on answers (correct / incorrect)
- Score tracking
- “Next question” flow with a final results screen
- Ability to restart the quiz
- Retro Windows 98–inspired UI styling

---

## 🧠 How It Works

### Quiz Data
All questions are stored in an array of objects:

- `question` – the question text
- `options` – an array of possible answers
- `answer` – the index of the correct answer

This structure allows the quiz to scale easily by adding or removing questions.

---

### Core Logic

#### `loadQuestion()`
Responsible for:
- Rendering the current question based on `currentQuestionIndex`
- Creating buttons for each answer option
- Disabling the “Next” button until an answer is selected
- Updating the “Next” button text on the final question

---

#### `selectOption(selectedIndex)`
Responsible for:
- Locking the user’s answer (disabling all option buttons)
- Visually marking the correct answer
- Visually marking the selected answer if incorrect
- Updating the score if the answer is correct
- Enabling the “Next” button

---

#### `nextQuestion()`
Responsible for:
- Advancing the quiz state
- Loading the next question if available
- Ending the quiz and displaying the score when all questions are answered

---

#### `restartQuiz()`
Responsible for:
- Resetting quiz state (index and score)
- Restoring the quiz UI
- Restarting the quiz from the first question

---

## 🎨 Styling

The UI is inspired by classic Windows 98 applications:
- Flat grey backgrounds
- Hard borders and bevelled buttons
- Retro system-style typography
- Minimal spacing and boxy layouts

The layout remains responsive while preserving the retro aesthetic.

---

## 📂 Project Structure

- index.html
- style.css
- app.js
- README.md

---

## ✅ Status

- Core quiz functionality complete
- UI styling complete
- Ready for submission

