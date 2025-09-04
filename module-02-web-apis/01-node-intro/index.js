// slice - starting point and optionally(!) and end point
const args = process.argv.slice(2);

// # check if we have excatly 2 arguments
if (args.length !== 2) {
  console.error('❌ Please provide exactly two arguments.');
  console.log('Usage: node index.js <number1> <number2>');
  return;
}

const [inputOne, inputTwo] = args;

// const [, , inputOne, inputTwo] = args;  // Skip first two elements (node path and script path)
// const [, , ...args] = args;

// if (!inputOne || !inputTwo) {...}

// console.log(args);
// console.log(inputOne);
// console.log(inputTwo);

// console.log(process.argv);

// Number('4px') // NaN
// parseInt("4.2px") // 4
// parseFloat("4.2px") // 4.2

const num1 = Number(inputOne);
// const num1 = +inputOne; // Shorthand for Number(inputOne)
const num2 = Number(inputTwo);

// Global isNaN - converts first, then checks
// isNaN('hello'); // true

// Number.isNan() - just checks if it is NaN already
// Number.isNaN('hello'); // false

// # check if both inputs are valid numbers
if (Number.isNaN(num1) || Number.isNaN(num2)) {
  console.error('❌ Both arguments must be valid numbers.');
  console.log(`Received: "${a}" and "${b}"`);
  return;
  // process.exit(); // optional
}

const sum = num1 + num2;
console.log(`✅ ${num1} + ${num2} = ${sum}`);
