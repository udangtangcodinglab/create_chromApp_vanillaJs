const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");

function handleLoginButton() {
  console.log("click");
  console.log(loginInput.value);
}

loginButton.addEventListener("click", handleLoginButton);
