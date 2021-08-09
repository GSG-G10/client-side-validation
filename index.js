const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const form = document.getElementById('registerForm');

const emailError = document.getElementById('emailError');
const passwordError = document.getElementById('passwordError');
const passwordConfirmError = document.getElementById('passwordConfirmError');


const displayError = (element,message) => {
    element.textContent = message;
};

const redBorder = (element) => {
    element.style.borderColor = "red";
}

const blackBorder = (element) => {
    element.style.borderColor = "black";
}

const checkEmail = () => {
    if(emailInput.validity.valueMissing){

        displayError(emailError,"Please Enter Your Email");
        redBorder(emailInput);

    }else if(emailInput.validity.typeMismatch){
    
        displayError(emailError,"Please Enter a valid Email");
        redBorder(emailInput);
    
    }else{
        displayError(emailError, "");
        blackBorder(emailInput);
        return true;
    }
};

const checkPassword = () => {
    if(password.validity.patternMismatch){

        displayError(passwordError,"Password must contain at least 8 characters, including one letter and one number");
        redBorder(passwordInput);

    }else if (passwordInput.validity.valueMissing) {
        
        displayError(passwordError,"Please Enter Your Password");
        redBorder(passwordInput);

    }else{

        displayError(passwordError, "");
        blackBorder(passwordInput);
        return true;
        
    }
};


const checkPasswordConfirmation = () => {
    if (confirmPasswordInput.validity.valueMissing) {

        displayError(passwordConfirmError,"Please Confirm Your Password");
        redBorder(confirmPasswordInput);

    
    }else if (passwordInput.value != confirmPasswordInput.value) {
        
        displayError(passwordConfirmError, "Passwords does not Match");
        redBorder(confirmPasswordInput);
        redBorder(passwordInput);

        
    }else{
        
        displayError(passwordConfirmError, "");
        blackBorder(confirmPasswordInput);
        blackBorder(passwordInput);

    }
};

emailInput.addEventListener('blur', checkEmail);
passwordInput.addEventListener('blur', checkPassword);
confirmPasswordInput.addEventListener('blur', checkPasswordConfirmation);


form.addEventListener('submit', (e) => {  
    if (!checkEmail()) {
        e.preventDefault();
    }

    if (!checkPassword()) {
        e.preventDefault();
    }
    
    if (!checkPasswordConfirmation()) {
        e.preventDefault();
    }   
});