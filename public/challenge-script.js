// public/challenge-script.js

let currentQuestionIndex = 0;
let score = 0;
let quizQuestions = [];

const quizTitle = document.getElementById('quiz-title');
const questionCounter = document.getElementById('question-counter');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const nextBtn = document.getElementById('next-btn');
const feedbackMessage = document.getElementById('feedback-message');
const quizBox = document.getElementById('quiz-box');
const resultsScreen = document.getElementById('results-screen');
const finalScore = document.getElementById('final-score');

// --- 1. Utility to get ID from URL ---
function getUrlParameter(name) {
    name = name.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
    const regex = new RegExp('[\\?&]' + name + '=([^&#]*)');
    const results = regex.exec(location.search);
    return results === null ? '' : decodeURIComponent(results[1].replace(/\+/g, ' '));
}

// Get the specific quiz ID from the URL (e.g., 'ratio_proportion_quiz')
const QUIZ_ID = getUrlParameter('id'); 
// ------------------------------------


// --- 2. Quiz Initialization and Navigation ---

document.addEventListener('DOMContentLoaded', initializeQuiz);

function initializeQuiz() {
    // Check if the ID was found and if the data exists in the global object
    if (!QUIZ_ID || !window.CHALLENGE_DATA || !window.CHALLENGE_DATA[QUIZ_ID]) {
        quizTitle.textContent = "Error: Challenge content not found!";
        return;
    }
    
    const quizData = window.CHALLENGE_DATA[QUIZ_ID];
    
    quizQuestions = quizData.questions;
    quizTitle.textContent = quizData.title;
    
    loadQuestion(currentQuestionIndex);
    nextBtn.addEventListener('click', handleNext);
}

function loadQuestion(index) {
    if (index >= quizQuestions.length) {
        showResults();
        return;
    }
    
    // Reset state for new question
    optionsContainer.innerHTML = '';
    nextBtn.disabled = true;
    feedbackMessage.textContent = '';
    
    const question = quizQuestions[index];
    
    questionCounter.textContent = `Question ${index + 1} of ${quizQuestions.length}`;
    questionText.textContent = `${index + 1}. ${question.text}`;
    
    // Render options
    question.options.forEach(option => {
        const btn = document.createElement('button');
        btn.classList.add('option-btn');
        btn.textContent = option;
        btn.dataset.answer = option;
        btn.addEventListener('click', handleAnswer);
        optionsContainer.appendChild(btn);
    });
}

function handleAnswer(event) {
    const selectedButton = event.target;
    const selectedAnswer = selectedButton.dataset.answer;
    const question = quizQuestions[currentQuestionIndex];
    
    // Disable all options after selection
    Array.from(optionsContainer.children).forEach(btn => {
        btn.disabled = true;
        // Highlight the correct answer
        if (btn.dataset.answer === question.answer) {
            btn.classList.add('correct');
        }
    });

    // Check answer and update score/feedback
    if (selectedAnswer === question.answer) {
        score++;
        selectedButton.classList.add('correct');
        feedbackMessage.textContent = 'Correct! Great job.';
    } else {
        selectedButton.classList.add('wrong');
        feedbackMessage.textContent = `Incorrect. The correct answer was: ${question.answer}`;
    }
    
    nextBtn.disabled = false;
}

function handleNext() {
    currentQuestionIndex++;
    loadQuestion(currentQuestionIndex);
}

function showResults() {
    quizBox.style.display = 'none';
    resultsScreen.style.display = 'block';
    
    const percentage = Math.round((score / quizQuestions.length) * 100);
    finalScore.innerHTML = `You scored ${score} out of ${quizQuestions.length} (${percentage}%). Keep practicing!`;
}

// --- 3. Full Functionality Check ---
// After implementing this, clicking on any of the 15 challenge cards 
// should now load the correct quiz questions dynamically.