const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const rePasswordInput = document.querySelector("#confirmPassword");
const form = document.querySelector("#registerForm");
const emailError = document.querySelector("#email-error");
const rePasswordError = document.querySelector("#repasword-error");
const passwordError = document.querySelector("#password-error");

form.addEventListener("submit", (event) => {
  if (
    !/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      emailInput.value.toLowerCase()
    )
  ) {
    emailError.textContent = "PLEASE ENTER A VALID EMAIL ADRESS";
    emailInput.style.border = "2px solid red";
    event.preventDefault();
  } else {
    emailInput.style.border = "1px solid #827e7e";
    emailError.textContent = "";
  }
  if (passwordInput.value !== rePasswordInput.value) {
    event.preventDefault();
    passwordInput.style.border = "2px solid red";
    rePasswordInput.style.border = "2px solid red";
    rePasswordError.textContent = "PASSWORDS YOU'VE ENTERED DO NOT MATCH";
    passwordError.textContent = "PASSWORDS YOU'VE ENTERED DO NOT MATCH";
  } else {
    rePasswordInput.style.border = "1px solid #827e7e";
    passwordInput.style.border = "1px solid #827e7e";
    rePasswordError.textContent = "";
    passwordError.textContent = "";
  }
});
