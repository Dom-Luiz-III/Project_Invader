window.onload = function() {
  var form = document.getElementById("login-form");
  var emailInput = document.getElementById("email");
  var passwordInput = document.getElementById("password");
  var loginButton = document.getElementById("login-button");

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Impede o envio do formulário

    var email = emailInput.value.trim();
    var password = passwordInput.value.trim();

    if (email === "" || password === "") {
      showMessage("Preencha todos os campos corretamente!", "error");
    } else {
      showMessage("Login realizado com sucesso!", "success");
    }
  });

  function showMessage(message, type) {
    var messageContainer = document.getElementById("message-container");
    messageContainer.innerHTML = message;
    messageContainer.classList.add(type);

    setTimeout(function() {
      messageContainer.innerHTML = "";
      messageContainer.classList.remove(type);
    }, 3000);
  }
};
