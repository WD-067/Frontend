// You can work here or download the template!
const numbers = [1, 2, 3, 4, 5];

// # 2. Use the map Method to Create a New Array with Doubled Values:
const doubleNumbers = numbers.map((num) => num * 2);

// console.log(numbers);
// console.log(doubleNumbers);

// # 3.Use the map Method to Create a New Array of Strings
const stringNumbers = numbers.map((num) => `Number: ${num}`);
// console.log(stringNumbers);

// # 4. Use the map Method to Create a New Array of Objects
const numberObjects = numbers.map((num) => ({
  original: num,
  squared: num * num,
  //   isEven: num % 2 === 0,
}));

// console.log(numberObjects);
const prices = [10, 92, 53, 34, 45];
