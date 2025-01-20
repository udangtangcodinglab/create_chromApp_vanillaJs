const images = ["view1.jpg", "view2.jpg", "view3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `../quotes/img/${chosenImage}`;

document.body.appendChild(bgImage);
