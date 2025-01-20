const quotes = [
  {
    quote: "명언1",
    author: "작가1",
  },
  {
    quote: "명언2",
    author: "작가2",
  },
  {
    quote: "명언3",
    author: "작가3",
  },
  {
    quote: "명언4",
    author: "작가4",
  },
  {
    quote: "명언5",
    author: "작가5",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

// # Math 내용
// Math.ceil(); // 올림
// Math.round(); // 반올림
// Math.floor(); // 내림
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

// console.dir(quotes);
// console.log(quotes.length);

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
