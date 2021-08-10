const regForm = document.getElementById("registerForm");
const inputEmail = document.querySelector(".input-email");
const inputPassword = document.querySelector(".input-password");
const inputRePassword = document.querySelector(".input-re-password");
const submitBtn = document.querySelector(".submit-btn");

const emailLabel = document.querySelector(".email-label");
const passwordLabel = document.querySelector(".password-label");
const rePasswordLabel = document.querySelector(".re-password-label");

const alertMessage = document.querySelector(".alert-message");

const alertSpan = document.createElement("span");
alertSpan.classList.add("alert");
alertMessage.appendChild(alertSpan)

const emailRegEx = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

regForm.addEventListener("submit", (e) => {
  e.preventDefault()

  if (!inputEmail.value.match(emailRegEx)) {
    alertSpan.textContent = "invalid email!";
    inputEmail.style.borderColor = "#ff6262";
  } else if (inputPassword.value === "") {
    alertSpan.textContent = "fill password field";
    inputPassword.style.borderColor = "#ff6262";
  } else if (inputPassword.value.length < 7) {
    alertSpan.textContent = "passwrod should be 8 characters and more";
  }
  else if (inputPassword.value !== inputRePassword.value) {
    alertSpan.textContent = "passwrods does not match";
    inputRePassword.style.borderColor = "#ff6262";

  }
  else {
    regForm.submit()
  }
})


