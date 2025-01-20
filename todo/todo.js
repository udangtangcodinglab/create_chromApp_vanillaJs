const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

console.log(toDoForm, toDoList);

function handleToDoSubmit(event) {
  // 작성 후 ENTER를 클릭했을 때 새로 고침 차단
  // 참고URL : https://developer.mozilla.org/ko/docs/Web/API/Event/preventDefault
  event.preventDefault();
  const newTodo = toDoInput.value;
  toDoInput.value = "";
}

toDoForm.addEventListener("submit", handleToDoSubmit);

console.dir(toDoInput);
