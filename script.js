// script.js

// Function to add a question to localStorage
function addQuestion(question) {
    let questions = getQuestions();
    questions.push(question);
    localStorage.setItem('questions', JSON.stringify(questions));
}

// Function to get questions from localStorage
function getQuestions() {
    return JSON.parse(localStorage.getItem('questions')) || [];
}

// Function to delete a question from localStorage
function deleteQuestion(index) {
    let questions = getQuestions();
    questions.splice(index, 1);
    localStorage.setItem('questions', JSON.stringify(questions));
}

// Function to filter questions based on a search term
function filterQuestions(searchTerm) {
    let questions = getQuestions();
    return questions.filter(question => question.includes(searchTerm));
}

// Function to display questions
function displayQuestions() {
    let questions = getQuestions();
    questions.forEach((question, index) => {
        console.log(`${index + 1}: ${question}`);
    });
}

// Example usage
addQuestion('What is JavaScript?');
displayQuestions();

