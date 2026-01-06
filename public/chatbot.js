// public/chatbot-script.js

// --- DOM Elements ---
const landingState = document.getElementById('landing-state');
const activeChatInterface = document.getElementById('active-chat-interface');
const chatWindow = document.getElementById('chat-window');
const userInput = document.getElementById('user-input');
const sendBtn = document.getElementById('send-btn');
const statusDisplay = document.getElementById('status-message');
const suggestionBtns = document.querySelectorAll('.suggestion-btn');

// Backend Configuration
const CHATBOT_ENDPOINT = 'http://127.0.0.1:8000/api/chatbot';

// --- Helper function to display messages ---
function displayMessage(text, sender) {
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender === 'user' ? 'user-message' : 'ai-message');
    messageDiv.innerHTML = `<p>${text}</p>`; 
    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;
}

// --- Chat Activation ---
function activateChat(initialPrompt = null) {
    landingState.style.display = 'none';
    activeChatInterface.style.display = 'flex'; 
    
    if (initialPrompt) {
        userInput.value = initialPrompt;
        sendMessage();
    } else {
        userInput.focus();
    }
}

// --- Send Message to Backend ---
async function sendMessage() {
    const userMessage = userInput.value.trim();
    if (!userMessage) return;

    displayMessage(userMessage, 'user');
    userInput.value = '';
    sendBtn.disabled = true;
    statusDisplay.textContent = 'AI Tutor is thinking...';

    try {
        const response = await fetch(CHATBOT_ENDPOINT, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: userMessage })
        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.response || data.detail || `Server error: ${response.status}`);
        }

        displayMessage(data.response, 'ai');
        statusDisplay.textContent = '';

    } catch (error) {
        console.error('Chatbot Error:', error);
        displayMessage(`Error: Could not connect to the tutor. (${error.message})`, 'ai');
        statusDisplay.textContent = 'Connection failed.';
    } finally {
        sendBtn.disabled = false;
        userInput.focus();
    }
}

// --- Event Listeners ---
document.addEventListener('DOMContentLoaded', () => {
    
    // Suggestion Buttons
    suggestionBtns.forEach(button => {
        button.addEventListener('click', (e) => { 
            e.stopPropagation();
            const prompt = button.dataset.prompt;
            activateChat(prompt); 
        });
    });

    // Click anywhere to start chat
    landingState.addEventListener('click', (e) => {
        if (!e.target.closest('.suggestion-btn')) { 
            activateChat(null); 
        }
    });

    // Input Handlers
    sendBtn.addEventListener('click', sendMessage);
    userInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !sendBtn.disabled) {
            sendMessage();
        }
    });
});
