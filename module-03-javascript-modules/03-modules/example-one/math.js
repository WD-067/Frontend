function add(num1, num2) {
  return num1 + num2;
}

function substract(num1, num2) {
  return num1 - num2;
}

const name = "Anila";

const email = "anila@mail.com";

// export default {
//   apiKey: "xyz1234",
//   timeout: 500,
// };

function sayHello(name) {
  console.log(`Hello ${name}`);
}

export { add, name as firstName, substract }; // bindings
// export default email; // ! Only one export default per module!
export default sayHello;
