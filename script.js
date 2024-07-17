document.getElementById('chatbot-toggle').addEventListener('click', function() {
    var chatbotContent = document.getElementById('chatbot-content');
    if (chatbotContent.style.display === 'none') {
        chatbotContent.style.display = 'block';
    } else {
        chatbotContent.style.display = 'none';
    }
});

document.getElementById('send-button').addEventListener('click', function() {
    var userInput = document.getElementById('user-input').value;
    alert('Tu mensaje: ' + userInput);
});
