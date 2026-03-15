// quiz.js
// created by: Ajitesh Singh Gusain
// Course: B.Tech CSE (Robotics and AI) — Web Development
// Lab 4 — Prompt Quizzer

// Original quizQuestions array is kept the same
const quizQuestions = [
    {
        question: "What does HTML stand for?",
        options: [
            "Hypertext Markup Language",
            "Highlevel Tool Markup Language",
            "Home Tool Markup Language",
            "Hyperlink and Text Markup Language"
        ],
        answerIndex: 0,
        hint: "It's the standard language used to create web pages."
    },
    {
        question: "Which semantic HTML element represents the main content of a document?",
        options: ["header", "main", "div", "section"],
        answerIndex: 1,
        hint: "It's intended to contain the primary content unique to the page."
    },
    {
        question: "Which attribute provides alternative text for an image?",
        options: ["src", "alt", "title", "data-alt"],
        answerIndex: 1,
        hint: "Used by screen readers and when the image can't be displayed."
    },
    {
        question: "In the CSS box model, which area is outermost?",
        options: ["content", "padding", "border", "margin"],
        answerIndex: 3,
        hint: "This space separates the element from other elements."
    },
    {
        question: "Which CSS declaration creates a flex container?",
        options: ["display:block", "display:flex", "position:flex", "flex-direction:row"],
        answerIndex: 1,
        hint: "It's the `display` value that enables flex behavior."
    },
    {
        question: "Which has the highest CSS specificity?",
        options: ["inline style (style=\"...\")", "ID selector (#id)", "class selector (.class)", "element selector (div)"],
        answerIndex: 0,
        hint: "This type of style is written directly on the element."
    },
    {
        question: "Which JavaScript method parses a JSON string into an object?",
        options: ["JSON.stringify()", "JSON.parse()", "parseJSON()", "Object.toJSON()"],
        answerIndex: 1,
        hint: "It converts text (JSON) into a JavaScript value."
    },
    {
        question: "Which event phase delivers events from the target up to the root?",
        options: ["capturing", "at-target", "bubbling", "default"],
        answerIndex: 2,
        hint: "This is often used when attaching handlers to parent elements."
    },
    {
        question: "Which HTTP method is typically used to create a new resource?",
        options: ["GET", "PUT", "POST", "DELETE"],
        answerIndex: 2,
        hint: "This method usually sends data in the request body to be created."
    },
    {
        question: "Which HTTP status code means 'Created'?",
        options: ["200", "201", "204", "400"],
        answerIndex: 1,
        hint: "It's often returned after a successful POST that results in a new resource."
    },
    {
        question: "Which HTML element should you use for emphasized text (semantic emphasis)?",
        options: ["i", "strong", "em", "b"],
        answerIndex: 2,
        hint: "`<em>` indicates stress emphasis for accessibility and semantics."
    },
    {
        question: "Which CSS property controls the explicit column layout of a grid?",
        options: ["grid-columns", "grid-template-columns", "columns", "column-template"],
        answerIndex: 1,
        hint: "It accepts sizes like `1fr 2fr` or `repeat(3, 1fr)`."
    },
    {
        question: "Which command creates a new Git branch and switches to it?",
        options: ["git init", "git commit -m", "git checkout -b <name>", "git status"],
        answerIndex: 2,
        hint: "A single command both creates and checks out the branch."
    },
    {
        question: "Which SQL statement returns all rows from a table?",
        options: ["SELECT ALL FROM table", "SELECT * FROM table", "GET * FROM table", "SELECT FROM table"],
        answerIndex: 1,
        hint: "Asterisk `*` selects every column."
    },
    {
        question: "What does CORS stand for?",
        options: [
            "Cross-Origin Resource Sharing",
            "Cross-Organizational Request Standard",
            "Client-Origin Resource Setting",
            "Cross-Origin Request Security"
        ],
        answerIndex: 0,
        hint: "It's a browser security mechanism about origins and resources."
    },
    {
        question: "Which attribute makes an HTML input required to submit the form?",
        options: ["required", "readonly", "disabled", "autofocus"],
        answerIndex: 0,
        hint: "No value needed — presence of the attribute enforces it."
    },
    {
        question: "How do you properly associate a <label> with an <input> for accessibility?",
        options: ["Use aria-label only", "Use placeholder text", "Match label's 'for' to input's 'id'", "Wrap label text in a <span>"],
        answerIndex: 2,
        hint: "This lets screen readers know which label belongs to which input."
    },
    {
        question: "Which JavaScript runtime is built on Google's V8 engine?",
        options: ["SpiderMonkey", "V8 (Node.js uses this)", "Chakra", "JavaVM"],
        answerIndex: 1,
        hint: "This runtime enables JavaScript on the server (outside the browser)."
    },
    {
        question: "A core REST principle is that the server should be:",
        options: ["stateful", "stateless", "cacheless", "monolithic"],
        answerIndex: 1,
        hint: "Each request contains all information needed; server doesn't hold client session state."
    },
    {
        question: "What is React's key optimization for updating the UI efficiently?",
        options: ["template engine", "virtual DOM", "server-side rendering only", "module bundler"],
        answerIndex: 1,
        hint: "It diffs a lightweight in-memory representation before touching the real DOM."
    }
];


function runQuiz() {
    let score = 0;

    for (let i = 0; i < quizQuestions.length; i++) {
        const q = quizQuestions[i];

        // Format the options for the prompt
        let optionsText = q.options.map((opt, index) => 
            `${index + 1}. ${opt}`
        ).join('\n');

        // prompt the user (shows question number and options)
        const rawAnswer = prompt(
            `Question ${i + 1} of ${quizQuestions.length}:\n` +
            `${q.question}\n\n` +
            `Options:\n${optionsText}\n\n` +
            `Enter the number (1-${q.options.length}) of your answer:`
        );

        // If the user pressed Cancel, rawAnswer will be null — allow graceful exit
        if (rawAnswer === null) {
            alert('Quiz cancelled. Your progress will not be recorded.');
            return;
        }

        // Convert the user's 1-based answer number to a 0-based index
        const userAnswerIndex = parseInt(rawAnswer.trim(), 10) - 1;
        
        // Get the correct answer text for display
        const correctAnswerText = q.options[q.answerIndex];

        // Check if the user's index is the correct index
        if (userAnswerIndex === q.answerIndex) {
            score++;
            alert(' Correct!');
        } else {
            // Check for invalid input (non-number, out of range)
            if (isNaN(userAnswerIndex) || userAnswerIndex < 0 || userAnswerIndex >= q.options.length) {
                 alert(`Invalid input. Skipping question.`);
            } else {
                alert(` Wrong. The correct answer was: ${correctAnswerText}`);
            }
        }
    }

    alert(`Quiz complete! You scored ${score} out of ${quizQuestions.length} correct. Thanks for playing!`);
}


// Run the quiz when the file is pasted into the browser console
runQuiz();