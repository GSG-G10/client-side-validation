const form = document.querySelector('#registerForm')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const confirmPassword = document.querySelector('#confirmPassword')
const submit = document.querySelector('#registerForm button')
const emailMsg = document.querySelector('#emailMsg')
const passwordMsg = document.querySelector('#passwordMsg')
const confirmMsg = document.querySelector('#confirmMsg')


const formHandler = () => {
    const emailVal = email.value
    if(!email.value || !emailVal.includes('@')) {
        emailMsg.textContent = 'Please enter a valid email'
        email.classList.add('err-input');
    }
    if (!password.value || password.value.length < 8){
        passwordMsg.textContent = 'Password should have at least 8 characters'
        password.classList.add('err-input')
    }
    if (confirmPassword.value !== password.value){
        confirmMsg.textContent = "two passwords doesn't match"
    }
}
form.addEventListener('submit', formHandler)