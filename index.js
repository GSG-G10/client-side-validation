const form = document.querySelector("#registerForm");
const email = document.querySelector('#email')
const submit = document.querySelector('#submit')
const error = document.querySelector('#error')
const pass1 = document.querySelector('#password')
const pass2 = document.querySelector('#confirmPassword')


form.addEventListener("submit",(event) => {
    if (password.validity.valueMissing || confirmPassword.validity.valueMissing) {
        error.textContent = 'Enter password'
        event.preventDefault();
    }
    if (pass1.value != pass2.value) {
        error.textContent = 'password not equal password 2'
        event.preventDefault();
    }
    if (email.validity.typeMismatch) {
        error.textContent = 'enter valid email';
        event.preventDefault();
      } 
});

