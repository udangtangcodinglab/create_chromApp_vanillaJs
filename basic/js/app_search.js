// HTML에 작성된 내용을 JS에서 검색하는 방법

// # 직접 검색
console.log(document.title);


// # id로 검색
const title_id = document.getElementById("title");
console.log(title.innerText); // 제목
title_id.innerText = "제목12345";
console.log(title.innerText); // 제목12345
title_id.className = "hello";
console.log(title.className);


// # 태그명으로 검색
const title_tag = document.getElementsByTagName("h1");
console.log(title_tag);


// # 클래스명으로 검색
const title_class = document.getElementsByClassName("content");
console.log(title_class);


// # CSS 방식으로 검색
const content = document.querySelector(".hellos h3");
console.log(content);
const content_id = document.querySelector("#hello");
console.log(content_id);
const content_all = document.querySelectorAll(".hellos h3");
console.log(content_all);
const content_firstChild = document.querySelectorAll(".hellos h3:first-child");
console.log(content_firstChild);