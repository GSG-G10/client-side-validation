const containerForm = document.querySelector('#registerForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const registerBtn = document.querySelector('#submit-btn')
const errorMS = document.querySelector('.error')

containerForm.addEventListener('submit', (e) => {
  e.preventDefault()
  if (email.value == "") {
    errorMS.textContent = 'You must enter an Email '
    return ;
  }
  if (password.value.length < 9) {
    errorMS.textContent = ' You must set password length more than 9 character  '
    return ;
    
  }
  if ( password.value !== confirmPassword.value) {
    errorMS.textContent = ' The confirm password dose not match password'
    return; 
  }
  errorMS.textContent="Successful"
  errorMS.style.color="green"
})

