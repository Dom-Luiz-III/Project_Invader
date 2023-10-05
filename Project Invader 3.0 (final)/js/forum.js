// essa função tá encapsulada
(function () {
  const buttonsResposta = document.querySelectorAll('.thread button');

  buttonsResposta.forEach((button, index) => {
    button.addEventListener('click', () => {
      const respostas = document.querySelectorAll('.respostas');
      respostas[index].style.display = "block";
    });
  });

  const forms = document.querySelectorAll('form');

  forms.forEach((form, index) => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const conteudo = document.querySelectorAll('textarea')[index];
      const paragraph = document.createElement('p');
      paragraph.textContent = conteudo.value;
      form.insertAdjacentElement('beforebegin', paragraph);
      conteudo.value = "";
    });
  });
})();

//chatbox aqui
document.getElementById("sendButton").addEventListener("click", function () {
  var messageInput = document.getElementById("messageInput");
  var message = messageInput.value;

  if (message !== "") {
    var messageElement = document.createElement("div");
    messageElement.textContent = message;
    document.getElementById("chatbox").appendChild(messageElement);
    messageInput.value = "";
  }
});


document.addEventListener("DOMContentLoaded", function () {
  var sendButton = document.getElementById("send-button");
  var clearButton = document.getElementById("clear-button");
  var attachFileInput = document.getElementById("attach-file");
  var messageInput = document.getElementById("message-input");
  var chatMessages = document.getElementById("chat-messages");

  sendButton.addEventListener("click", function () {
    var message = messageInput.value.trim();
    if (message !== "") {
      var messageElement = document.createElement("p");
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      messageInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  clearButton.addEventListener("click", function () {
    chatMessages.innerHTML = "";
  });

  attachFileInput.addEventListener("change", function () {
    var file = attachFileInput.files[0];
    if (file) {
      var messageElement = document.createElement("p");
      messageElement.textContent = "Arquivo anexado: " + file.name;
      chatMessages.appendChild(messageElement);
      attachFileInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });
});