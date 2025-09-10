// # setTimeout
const callbackFunc = () => {
  console.log("Hello");
};

const milliseconds = 2000;

setTimeout(callbackFunc, milliseconds);

// setTimeout(() => {
//   console.log("Hello again");
//   setTimeout(() => {
//     console.log("Hello again!!!!");
//   }, 3000);
// }, 3000);

// # setInterval
const number = document.getElementById("number");

const interval = setInterval(() => {
  //   console.log("Bye");
  number.textContent = Number(number.textContent) + 1;
  //   number.textContent = Date.now();
}, 1000);

// clearTimeout();
setTimeout(() => {
  clearInterval(interval);
}, 10000);
