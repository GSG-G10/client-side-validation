console.log('hello');
const inputBox = document.querySelector('.input-box')
const passwordField = document.querySelector('#password');
const showPass = document.querySelector('.show-password')
const hidePass = document.querySelector('.hide-password')
const confirmPasswordField = document.querySelector('#confirmPassword');
const hideConfirmPass = document.querySelector('.hide-confirm-password')
const showConfirmPass = document.querySelector('.show-confirm-password')



passwordField.setAttribute('pattern', '(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}');
passwordField.addEventListener('focusin', () => {
    hidePass.style.display = 'block';
})
confirmPasswordField.addEventListener('focusin', () => {
    hideConfirmPass.style.display = 'block';
})


hidePass.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    showPass.style.display = 'block';
    if (passwordField.type === 'password') {
        passwordField.setAttribute('type', 'text')
    }
})
showPass.addEventListener('click', (e) => {
    if (passwordField.type === 'text') {
        passwordField.setAttribute('type', 'password')
    }

})


hideConfirmPass.addEventListener('click', (e) => {
    e.target.parentNode.remove();
    showConfirmPass.style.display = 'block';
    if (confirmPasswordField.type === 'password') {
        confirmPasswordField.setAttribute('type', 'text')
    }
})
showConfirmPass.addEventListener('click', (e) => {
    if (confirmPasswordField.type === 'text') {
        confirmPasswordField.setAttribute('type', 'password')
    }

})