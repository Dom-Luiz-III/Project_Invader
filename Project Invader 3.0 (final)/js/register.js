let profilePic = document.getElementById("foto");
let inputFile = document.getElementById("input-file");

inputFile.onchange = function() {
    profilePic.src = URL.createObjectURL(inputFile.files[0]);
}

let usernameRef = document.getElementById("nome");
let emailRef = document.getElementById("email");
let numberRef = document.getElementById("numero");
let passwordRef = document.getElementById("senha");
let submitBtn = document.getElementById("botaoCadastro");
let messageRef = document.getElementById("message");

function isUsernameValid() {
    const usernameRegex = /^[a-zA-Z0-9\s]{3,20}$/gi;
    return usernameRegex.test(usernameRef.value);
}

function isEmailValid() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailRef.value);
}

function isPasswordValid() {
    const passwordRegex = /^[a-zA-Z0-9]{8,22}$/gi;
    return passwordRegex.test(passwordRef.value);
}

function validateFields() {
    let isUsernameValidValue = isUsernameValid();
    let isEmailValidValue = isEmailValid();
    let isPasswordValidValue = isPasswordValid();

    if (!isUsernameValidValue || !isEmailValidValue || !isPasswordValidValue) {
        messageRef.style.visibility = "hidden";

        if (!isUsernameValidValue) {
            usernameRef.style.borderColor = "#fe2e2e";
            usernameRef.style.backgroundColor = "#ffc2c2";
        } else {
            usernameRef.style.borderColor = "#34bd34";
            usernameRef.style.backgroundColor = "#c2ffc2";
        }

        if (!isEmailValidValue) {
            emailRef.style.borderColor = "#fe2e2e";
            emailRef.style.backgroundColor = "#ffc2c2";
        } else {
            emailRef.style.borderColor = "#34bd34";
            emailRef.style.backgroundColor = "#c2ffc2";
        }

        if (!isPasswordValidValue) {
            passwordRef.style.borderColor = "#fe2e2e";
            passwordRef.style.backgroundColor = "#ffc2c2";
        } else {
            passwordRef.style.borderColor = "#34bd34";
            passwordRef.style.backgroundColor = "#c2ffc2";
        }
    } else {
        messageRef.style.visibility = "visible";
        usernameRef.style.borderColor = "#34bd34";
        usernameRef.style.backgroundColor = "#c2ffc2";
        emailRef.style.borderColor = "#34bd34";
        emailRef.style.backgroundColor = "#c2ffc2";
        passwordRef.style.borderColor = "#34bd34";
        passwordRef.style.backgroundColor = "#c2ffc2";
        numberRef.style.borderColor = (numberRef.value.length === 11) ? "#34bd34" : "";
    }
}

usernameRef.addEventListener("blur", validateFields);

emailRef.addEventListener("blur", validateFields);

passwordRef.addEventListener("blur", validateFields);

submitBtn.addEventListener("mouseover", () => {
    if (!isUsernameValid() || !isEmailValid() || !isPasswordValid()) {
        let containerRect = document.querySelector(".container").getBoundingClientRect();
        let submitRect = submitBtn.getBoundingClientRect();
        let offset = submitRect.left - containerRect.left;
        console.log(offset);
        if (offset <= 100) {
            submitBtn.style.transform = "translateX(0)";
        } else {
            submitBtn.style.transform = "translateX(0)";
        }
    }
});

submitBtn.addEventListener("click", validateFields);
messageRef.style.visibility = "hidden";
