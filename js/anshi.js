const quizData = {
    question: "What is the objective of chess?",
    choices: [
        "Capture all opponent's pieces",
        "Control the center of the board",
        "Checkmate the opponent's king",
        "Promote a pawn to a queen"
    ],
    correctAnswer: 2
};

function loadQuiz() {
    document.getElementById('question').innerText = quizData.question;
    const choicesContainer = document.getElementById('choices');
    choicesContainer.innerHTML = '';
    quizData.choices.forEach((choice, index) => {
        const choiceLabel = document.createElement('label');
        const choiceInput = document.createElement('input');
        choiceInput.type = 'radio';
        choiceInput.name = 'choice';
        choiceInput.value = index;
        choiceLabel.appendChild(choiceInput);
        choiceLabel.appendChild(document.createTextNode(choice));
        choicesContainer.appendChild(choiceLabel);
        choicesContainer.appendChild(document.createElement('br'));
    });
}

function submitAnswer() {
    const choices = document.getElementsByName('choice');
    let selectedChoice;
    for (const choice of choices) {
        if (choice.checked) {
            selectedChoice = parseInt(choice.value);
            break;
        }
    }

    const feedback = document.getElementById('feedback');
    if (selectedChoice === quizData.correctAnswer) {
        feedback.innerText = "Correct!";
        feedback.style.color = 'green';
    } else {
        feedback.innerText = "Incorrect. The correct answer is 'Checkmate the opponent's king'.";
        feedback.style.color = 'red';
    }
}

document.addEventListener('DOMContentLoaded', loadQuiz);