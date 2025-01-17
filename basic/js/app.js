const title = document.querySelector("div.hello:first-child h1");

// # JS에 CSS 코드를 직접 추가하는 방법
function handleTitleClick_1() {
    const currentColor = title.style.color;
    let newColor;
    if (currentColor === "blue") {
        newColor = "red";
    } else {
        newColor = "blue";
    }
    title.style.color = newColor;
    // console.log(title.style.color);
}

// # CSS파일을 연결해서 추가하는 방법
//  className : 해당하는 객체에 있는 모든 클래스를 제거 후 추가
function handleTitleClick_2() {
    const clickedClass = "clicked";
    if (title.className === clickedClass) {
        title.className ="";
    } else {
        title.className = clickedClass;
    }
}

//  classList : 해당하는 객체에 있는 클래스랑 상관없이 추가
function handleTitleClick_3() {
    const clickedClass = "clicked";
    if(title.classList.contains(clickedClass)) {
        title.classList.remove(clickedClass);
    } else {
        title.classList.add(clickedClass);
    }
}

//  toggle
function handleTitleClick_4() {
    title.classList.toggle("clicked");
}

 

title.addEventListener("click", handleTitleClick_4);
