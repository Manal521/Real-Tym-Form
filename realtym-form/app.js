const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

const namePreview = document.getElementById('namepreview');
const emailPreview = document.getElementById('emailpreview');
const messagePreview = document.getElementById('messagepreview');


nameInput.addEventListener('input', function() {
    namePreview.textContent = nameInput.value || '[Your name will appear here]';
});

emailInput.addEventListener('input', function() {
    emailPreview.textContent = emailInput.value || '[Your email will appear here]';
});

messageInput.addEventListener('input', function() {
    messagePreview.textContent = messageInput.value || '[Your message will appear here]';
});