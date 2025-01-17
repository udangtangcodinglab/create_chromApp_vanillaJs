const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

function onLoginSubmit(event) {
  // submit 이벤트 후 새로고침과 같은 기본 이벤트가 발생하는 것을 막아줌
  event.preventDefault();
  console.log(event);
  const userName = loginInput.value;
  console.log(userName);
}

loginForm.addEventListener("submit", onLoginSubmit);
