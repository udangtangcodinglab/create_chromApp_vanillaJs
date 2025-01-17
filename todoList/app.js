const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

const naver = document.querySelector("a");
const loginSuccess = document.querySelector("#loginSuccess");

const HIDDEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  // submit 이벤트 후 새로고침과 같은 기본 이벤트가 발생하는 것을 막아줌
  event.preventDefault();
  const userName = loginInput.value;
  loginForm.classList.add(HIDDEN_CLASSNAME);
  console.log(userName);
  loginSuccess.innerText = `${userName}님이 로그인했습니다.`;
  loginSuccess.classList.remove(HIDDEN_CLASSNAME);
}

function onNaverClick(event) {
  event.preventDefault();
  alert("naver로 이동");
  console.dir(event);
}

loginForm.addEventListener("submit", onLoginSubmit);
naver.addEventListener("click", onNaverClick);
