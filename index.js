const registerForm = document.querySelector('#registerForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const message = document.querySelector('#message')
const submit = document.querySelector('#submit')

// email.includes('@')


registerForm.addEventListener('submit' , (elm) =>{
  message.style.color = 'green'
  email.preventDefault()

  if (!email.includes('@')) {
    message.style.border = '2px solid red'
    return (message.textContent = 'you should enter right email ')
  }
  if (password.nodeValue.length < 9 ) {
    message.style.border = 'red'
    return (message.textContent = 'your password is valid ')
  }
  if (password.value !== confirmPassword.value) {
    message.style.border = 'red'
    return (message.textContent = 'passwords you entered do not match')
}
})

// const registerForm = document.querySelector('#registerForm')
// const email = document.querySelector('#email')
// const password = document.querySelector('#password')
// const confirmPassword = document.querySelector('#confirmPassword')
// const submitBtn = document.querySelector('#submit-btn')
// const message = document.querySelector('#message')
// var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
// registerForm.addEventListener('submit', (e) => {
//   message.style.color = 'green'
//   e.preventDefault()
//   if (!email.value.match(mailformat)) {
//     message.style.color = 'red'
//     return (message.textContent = 'you should enter valid email ')
//   }
//   if (password.value.length < 6) {
//     message.style.color = 'red'
//     return (message.textContent = 'password length must be more than 6 ')
//   }
//   if (password.value !== confirmPassword.value) {
//     message.style.color = 'red'
//     return (message.textContent = 'passwords you entered do not match')
//   }

//   return (message.textContent = 'Pravo')
// })






// const email = document.querySelector("#email");

// email.addEventListener("input", function (event) {
//   if (email.validity.typeMismatch) {
//     email.setCustomValidity("I am expecting an e-mail address!");
//   } else {
//     email.setCustomValidity("");
//   }
// });

// const passwordInput = document.querySelector("#password").value
// const confirmPasswordInput = document.querySelector("#confirmPassword").value

// console.log(passwordInput);
// console.log(confirmPasswordInput);



















