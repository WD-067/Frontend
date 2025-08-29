// You can work here or download the template!
// # 1 Initialize an Array of Numbers:
const numbers = [1, 2, 3, 4, 5];

// # 2. Use the forEach Method to Print Each Number
// numbers.forEach((number) => {
//   console.log(number);
// });

// # 3. Use the forEach Method to Calculate the Sum of the Numbers:
let sum = 0;
numbers.forEach((number) => {
  sum += number;
});

console.log(sum);

// # 4. Use the forEach Method to Create a New Array with Squared Values:
const squaredNumbers = [];
numbers.forEach((number) => {
  squaredNumbers.push(number * number);
});
// console.log(numbers);
// console.log(squaredNumbers);

const squaredNum = numbers.map((number) => number * number);

console.log(numbers);
console.log(squaredNum);
