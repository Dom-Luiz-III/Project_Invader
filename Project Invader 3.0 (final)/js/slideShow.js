// Seleciona todos os slides
const slides = document.querySelectorAll('.slide');

// Variável para acompanhar o slide atual
let currentSlide = 0;

// Função para exibir o slide atual e ocultar os demais
const showSlide = () => {
  slides.forEach((slide, index) => {
    if (index === currentSlide) {
      slide.classList.add('active');
    } else {
      slide.classList.remove('active');
    }
  });
};

// Função para exibir o slide anterior
const previous = () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
};

// Função para exibir o próximo slide
const next = () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  showSlide();
};

// Adiciona eventos de clique para os botões de navegação
document.querySelector('#previous').addEventListener('click', previous);
document.querySelector('#next').addEventListener('click', next);

// Define um intervalo de tempo para avançar automaticamente os slides
const interval = 3000;
let autoSlide = setInterval(next, interval);

// Pausa o avanço automático quando o cursor está sobre o slide
const containerSlide = document.querySelector('.container-slide');
containerSlide.addEventListener('mouseenter', () => {
  clearInterval(autoSlide);
});

// Retoma o avanço automático quando o cursor sai do slide
containerSlide.addEventListener('mouseleave', () => {
  autoSlide = setInterval(next, interval);
});

document.addEventListener("DOMContentLoaded", function() {
  var sendButton = document.getElementById("send-button");
  var clearButton = document.getElementById("clear-button");
  var attachFileInput = document.getElementById("attach-file");
  var messageInput = document.getElementById("message-input");
  var chatMessages = document.getElementById("chat-messages");

  sendButton.addEventListener("click", function() {
    var message = messageInput.value.trim();
    if (message !== "") {
      var messageElement = document.createElement("p");
      messageElement.textContent = message;
      chatMessages.appendChild(messageElement);
      messageInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  clearButton.addEventListener("click", function() {
    chatMessages.innerHTML = "";
  });

  attachFileInput.addEventListener("change", function() {
    var file = attachFileInput.files[0];
    if (file) {
      var messageElement = document.createElement("p");
      messageElement.textContent = "Arquivo anexado: " + file.name;
      chatMessages.appendChild(messageElement);
      attachFileInput.value = "";
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }
  });

  messageInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      sendButton.click();
    }
  });
});

// Emoticon
var emoticonButton = document.getElementById("emoticonButton");
var emoticonPanel = document.getElementById("emoticonPanel");
var messageInput = document.getElementById("message-input");

emoticonButton.addEventListener("click", function() {
  emoticonPanel.style.display = (emoticonPanel.style.display === "block") ? "none" : "block";
});

var emoticons = document.getElementsByClassName("emoticon");
for (var i = 0; i < emoticons.length; i++) {
  emoticons[i].addEventListener("click", function() {
    var selectedEmoticon = this.alt; // Ou use o caminho da imagem, se necessário
    messageInput.value += selectedEmoticon;
  });
}

const topicForm = document.getElementById('topic-form');
const topicList = document.getElementById('topic-list');

topicForm.addEventListener('submit', createTopic);

function createTopic(event) {
  event.preventDefault();

  const titleInput = document.getElementById('topic-title');
  const contentInput = document.getElementById('topic-content');
  const fileInput = document.getElementById('topic-file');

  const title = titleInput.value;
  const content = contentInput.value;
  const file = fileInput.files[0];

  if (title && content) {
    const topic = document.createElement('div');
    topic.classList.add('topic');

    const titleElement = document.createElement('h2');
    titleElement.textContent = title;

    const contentElement = document.createElement('p');
    contentElement.textContent = content;

    const commentForm = document.createElement('form');
    commentForm.classList.add('comment-form');

    const commentTextarea = document.createElement('textarea');
    commentTextarea.placeholder = 'Adicionar um comentário...';
    commentForm.appendChild(commentTextarea);

    const commentButton = document.createElement('button');
    commentButton.textContent = 'Comentar';
    commentForm.appendChild(commentButton);

    const commentList = document.createElement('div');

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.classList.add('delete-button');
    deleteButton.addEventListener('click', function() {
      topic.remove();
    });

    topic.appendChild(deleteButton);
    topic.appendChild(titleElement);
    topic.appendChild(contentElement);
    topic.appendChild(commentForm);
    topic.appendChild(commentList);

    topicList.appendChild(topic);

    titleInput.value = '';
    contentInput.value = '';

    commentForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const commentContent = commentTextarea.value;
      const commentFile = fileInput.files[0];

      if (commentContent) {
        const comment = document.createElement('div');
        comment.classList.add('comment');

        const commentText = document.createElement('p');
        commentText.textContent = commentContent;

        const commentFileElement = document.createElement('div');
        commentFileElement.classList.add('file-name');
        if (commentFile) {
          const fileName = document.createElement('span');
          fileName.textContent = commentFile.name;
          commentFileElement.appendChild(fileName);

          const removeFileButton = document.createElement('span');
          removeFileButton.textContent = 'Remover';
          removeFileButton.classList.add('remove-file');
          removeFileButton.addEventListener('click', function() {
            fileInput.value = '';
            commentFileElement.remove();
          });
          commentFileElement.appendChild(removeFileButton);
        }

        const timestamp = document.createElement('span');
        timestamp.classList.add('timestamp');
        timestamp.textContent = getCurrentTimestamp();

        comment.appendChild(commentText);
        comment.appendChild(commentFileElement);
        comment.appendChild(timestamp);

        commentList.appendChild(comment);

        commentTextarea.value = '';
        fileInput.value = '';
      }
    });
  }
}

function getCurrentTimestamp() {
  const now = new Date();
  const options = { year: 'numeric', month: 'short', day: 'numeric', hour: 'numeric', minute: 'numeric' };
  return now.toLocaleDateString('en-US', options);
}
