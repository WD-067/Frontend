// new Date(); // creates an OBJECT of Date

// const groceryPromise = new Promise((resolve, reject) => {
//   resolve("Wohoo");
// });

// const groceryPromise = new Promise((resolve, reject) => {
//   reject("Failed");
// });

// groceryPromise
//   .then((resolvedPromise) => {
//     console.log("Promise was a success:", resolvedPromise);
//   })
//   .catch((rejectedPromise) => {
//     console.log("Promise was a fail:", rejectedPromise);
//   });

// fetch("http://example.com").then().catch();

// # FETCH API
// # GET
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json(); //convert JSON to JavaScript
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

// # POST
const newPost = {
  title: "My new post",
  body: "This is the actual content of the post",
  userId: 5,
};

// console.log(JSON.stringify(newPost)); // A String

fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-type": "application/json",
  },
  body: JSON.stringify(newPost),
})
  .then((response) => {
    if (!response.ok) {
      throw new Error("Soemthing went wrong");
    }
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });
