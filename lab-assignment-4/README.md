# LAB--ASSIGNMENT-4

#  Prompt Quizzer: Web Development Fundamentals

This is a simple JavaScript-based quiz application designed to test fundamental knowledge in **HTML, CSS, JavaScript, Web APIs, and RESTful principles**. The quiz runs entirely in the browser console using the native `prompt()` and `alert()` functions.

---

##  Features

* **Console-Based Interface:** Runs directly within any modern browser's developer console (Chrome, Firefox, Edge, etc.).
* **Multiple Choice Questions:** Presents questions with numbered options for easy selection.
* **Immediate Feedback:** Provides instant confirmation (Correct/Wrong) after each answer.
* **Score Tracking:** Reports the final score upon completion.
* **Graceful Exit:** Allows the user to cancel the quiz at any time.

---

## How to Run the Quiz

### Prerequisites

we only need a modern web browser (e.g., Chrome, Firefox, Safari).

### Steps

1.  **Open the Console:** Open a new browser tab and then open the Developer Tools (usually by pressing `F12` or `Ctrl+Shift+I` / `Cmd+Option+I`). Navigate to the **Console** tab.
2.  **Copy the Code:** Copy the entire contents of the `quiz.js` file (including the `quizQuestions` array and the `runQuiz` function).
3.  **Paste and Execute:** Paste the copied code directly into the browser console and press `Enter`.
4.  **Start Quiz:** The `runQuiz()` function will execute automatically, and the first question will appear in a pop-up prompt.
5.  **Answer Questions:** Read the question and the numbered options, then enter the **number** corresponding to your chosen answer and press **OK**.

---

##  Project Structure (quiz.js)

The single script file, `quiz.js`, contains two main components:

### 1. `quizQuestions` Array

This is the core data structure containing all the quiz content. Each object follows this schema:

| Property | Type | Description |
| :--- | :--- | :--- |
| `question` | `string` | The text of the quiz question. |
| `options` | `string[]` | An array of possible answers (options). |
| `answerIndex` | `number` | The **zero-based** index of the correct answer within the `options` array. |
| `hint` | `string` | A helpful clue (currently not displayed to the user, but useful for reviewers). |

### 2. `runQuiz()` Function

This function handles the application logic:

* Initializes the `score` counter.
* Iterates through the `quizQuestions` array.
* Formats the question and options for the `prompt()`.
* Processes the user's numeric input.
* Compares the user's answer index with the correct `answerIndex`.
* Updates the score and provides feedback via `alert()`.
* Displays the final score upon completion.

---

##  Course and Lab Context

* **Course:** B.Tech CSE (Robotics and AI) — Web Development
* **Lab:** Lab 4 — Prompt Quizzer
* **Created by:** Ajitesh Singh Gusain

---
