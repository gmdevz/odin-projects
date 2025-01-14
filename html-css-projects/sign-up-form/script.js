// Create a script.js file and link it in your HTML
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("form");

function validatePassword() {
  if (password.value !== confirmPassword.value) {
    confirmPassword.setCustomValidity("Passwords don't match");
  } else {
    confirmPassword.setCustomValidity("");
  }
}

password.addEventListener("change", validatePassword);
confirmPassword.addEventListener("change", validatePassword);
