const title = document.querySelector("div.hello:first-child h1");

function handleTitleClick() {
    title.style.color="blue";
    console.log("click");
}
function handleWindowResize() {
    document.body.style.backgroundColor = "pink";
}
function handleWindowCopy() {
    alert("copier!");
}
function handleWindowOffline() {
    alert("SOS no WIFI");
}
function handleWindowOnline() {
    alert("connect WIFI");
}
 
// title.addEventListener("click", handleTitleClick);
title.onclick = handleTitleClick;
// window.addEventListener("resize", handleWindowResize);
window.onresize = handleWindowResize;

window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);