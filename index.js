const form = document.querySelector(".container1");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#confirmPassword");
const msg = document.querySelector(".message");

const check = (str) => {
  const reg =
    /^(?=.*[0-9])(?=.*[.!@#/$%&*+?^${}()|[\]\\])(?=.*[a-z])(?=.*[A-Z])/;
  return reg.test(str);
};

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (password.value !== confirmPassword.value) {
    return (msg.textContent = "passwords you entered do not match");
  }

  if (!check(password.value)) {
    return (msg.textContent = "please write strong password contains Aa#1");
  }

  return (msg.textContent = "it's okay now  i can send it to server :)");
});
