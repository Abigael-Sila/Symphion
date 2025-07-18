// symphbot.js
// 1. Initialize Bootstrap modal
const symphbotModal = new bootstrap.Modal(document.getElementById('symphbotModal'));

// 2. Toggle modal on button click
document.getElementById('symphbotBtn')
  .addEventListener('click', () => symphbotModal.show());

// 3. Elements
const bodyEl = document.getElementById('symphbotBody');
const inputEl = document.getElementById('symphbotInput');
const sendBtn = document.getElementById('symphbotSend');

// 4. Helper: Append message to chat
function appendMessage(text, from = 'bot') {
  const msgEl = document.createElement('div');
  msgEl.className = `message ${from}`;
  const bubble = document.createElement('div');
  bubble.className = 'bubble';
  bubble.textContent = text;
  msgEl.appendChild(bubble);
  bodyEl.appendChild(msgEl);
  bodyEl.scrollTop = bodyEl.scrollHeight;
}

// 5. Sending logic
function sendSymphbot() {
  const query = inputEl.value.trim();
  if (!query) return;
  appendMessage(query, 'user');
  inputEl.value = '';
  // placeholder reply
  appendMessage('Let me think...', 'bot');
  setTimeout(() => {
    // simulate AI response
    const botReplies = [
      'Here are some safety tips...',
      'The nearest safe zone is 1.2km away at...',
      'Emergency number for Nairobi is 999.',
      'I can auto-translate messages. Send me a phrase!'
    ];
    // replace last bot bubble
    const bubbles = bodyEl.querySelectorAll('.message.bot .bubble');
    const last = bubbles[bubbles.length - 1];
    last.textContent = botReplies[Math.floor(Math.random() * botReplies.length)];
  }, 1000);
}

// 6. Event listeners
sendBtn.addEventListener('click', sendSymphbot);
inputEl.addEventListener('keydown', e => {
  if (e.key === 'Enter') sendSymphbot();
});