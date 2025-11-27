// FutureFinder.com - Main JavaScript File


// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Setup event listeners
    const authModal = document.getElementById('authModal');
    if (authModal) {
        authModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeAuthModal();
            }
        });
    }
});

// ==========================================
// Navigation Functions
// ==========================================

function navigateTo(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.classList.remove('active');
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// ==========================================
// Authentication Modal Functions
// ==========================================

function openAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

function switchAuthTab(tab) {
    // Update tabs
    document.querySelectorAll('.auth-tab').forEach(t => {
        t.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // Update forms
    document.querySelectorAll('.auth-form').forEach(f => {
        f.classList.remove('active');
    });
    
    if (tab === 'login') {
        const loginForm = document.getElementById('loginForm');
        if (loginForm) loginForm.classList.add('active');
    } else {
        const signupForm = document.getElementById('signupForm');
        if (signupForm) signupForm.classList.add('active');
    }
}

function handleLogin(event) {
    event.preventDefault();
    alert('Login functionality would be implemented here!');
    closeAuthModal();
}

function handleSignup(event) {
    event.preventDefault();
    alert('Sign up functionality would be implemented here!');
    closeAuthModal();
}

// ==========================================
// AI Chatbot Functions
// ==========================================

function openChatbot() {
    const chatbot = document.getElementById('chatbotContainer');
    if (chatbot) {
        chatbot.classList.add('active');
    }
}

function closeChatbot() {
    const chatbot = document.getElementById('chatbotContainer');
    if (chatbot) {
        chatbot.classList.remove('active');
    }
}

function sendMessage() {
    const input = document.getElementById('chatInput');
    if (!input) return;
    
    const message = input.value.trim();
    
    if (message === '') return;
    
    // Add user message
    addChatMessage(message, 'user');
    input.value = '';
    
    // Simulate AI response
    setTimeout(() => {
        const responses = [
            "That's a great question! Let me help you with that.",
            "I can definitely assist you with finding the right project.",
            "Would you like me to guide you through the platform features?",
            "I'm here to help! You can browse projects, connect with teams, or attend events.",
            "Let me know if you need help with project selection or team collaboration!"
        ];
        const randomResponse = responses[Math.floor(Math.random() * responses.length)];
        addChatMessage(randomResponse, 'bot');
    }, 1000);
}

function sendQuickMessage(message) {
    addChatMessage(message, 'user');
    
    setTimeout(() => {
        let response = '';
        if (message.includes('Find projects')) {
            response = "Great! You can find projects by clicking 'Discover Project' on the homepage. You can filter by skills, project stage, and more!";
        } else if (message.includes('How to start')) {
            response = "Getting started is easy! First, sign up for an account, then browse projects that match your interests and skills. Click 'View Detail' to learn more about any project.";
        } else {
            response = "I'm here to support you! Feel free to ask me anything about finding projects, joining teams, or using the platform.";
        }
        addChatMessage(response, 'bot');
    }, 1000);
}

function addChatMessage(text, sender) {
    const messagesContainer = document.getElementById('chatMessages');
    if (!messagesContainer) return;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${sender}`;
    
    if (sender === 'bot') {
        messageDiv.innerHTML = `
            <div class="message-avatar bot">🤖</div>
            <div class="message-bubble bot">${text}</div>
        `;
    } else {
        messageDiv.innerHTML = `
            <div class="message-bubble user">${text}</div>
            <div class="message-avatar user">👤</div>
        `;
    }
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function handleChatKeypress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}