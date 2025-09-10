// # getItem
const userName = localStorage.getItem("name");
console.log(userName);

const email = localStorage.getItem("email");
console.log(email);

const age = localStorage.getItem("age");
console.log(age); // null

// # setItem
localStorage.setItem("isStudent", false);

// # removeItem
// localStorage.removeItem("name");

// # Clear all items
// localStorage.clear();

// # updating value
localStorage.setItem("name", "Anila");
