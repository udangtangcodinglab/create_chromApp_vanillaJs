const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const naver = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  // submit 이벤트 후 새로고침과 같은 기본 이벤트가 발생하는 것을 막아줌
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function onNaverClick(event) {
  event.preventDefault();
  alert("naver로 이동");
  console.dir(event);
}
naver.addEventListener("click", onNaverClick);

function paintGreetings(username) {
  greeting.innerText = `${username}님이 로그인했습니다.`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);
if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
