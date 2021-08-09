const registerForm = document.querySelector('#registerForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const submitBtn = document.querySelector('#submit-btn')
const message = document.querySelector('#message')
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
registerForm.addEventListener('submit', (e) => {
  message.style.color = 'green'
  e.preventDefault()
  if (!email.value.match(mailformat)) {
    message.style.color = 'red'
    return (message.textContent = 'you should enter valid email ')
  }
  if (password.value.length < 6) {
    message.style.color = 'red'
    return (message.textContent = 'password length must be more than 6 ')
  }
  if (password.value !== confirmPassword.value) {
    message.style.color = 'red'
    return (message.textContent = 'passwords you entered do not match')
  }

  return (message.textContent = 'Pravo')
})
