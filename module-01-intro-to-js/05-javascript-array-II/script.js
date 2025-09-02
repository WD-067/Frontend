function add(num1, num2) {
  if (num1 === 0 && num2 === 0) {
    console.log('Please add positive integers');
    return; // gives back undefined
  }

  console.log('Function start');
  return (num1 + num2) * 2;
  console.log('Function end');
}

console.log(add(0, 0)); //undefined
console.log(add(1, 7)); //17
// console.log(add(1, 'asdf'));

function add2(num1, num2) {
  return (num1 + num2) * 2;
}

const addArrowFunc = (num1, num2) => {
  return (num1 + num2) * 2;
};

console.log(addArrowFunc(3, 7));

const addArrowFuncShort = (num1, num2) => (num1 + num2) * 2;

// ! Higher Order Functions

// # 1. Takes a function
function higherOrderFunc(func) {
  func(); // calling the function
}

// callback function - passed into another function
function callbackFunction() {
  console.log('Hi, I am a regular function');
}

higherOrderFunc(callbackFunction);

higherOrderFunc(function () {
  console.log('Hi, I am a regular function! TWO');
});

higherOrderFunc(() => console.log('Hi, I am a regular function! THREE'));

// # 2. returns a function
function multiplier(factor) {
  return (number) => {
    return number * factor;
  };
}

// console.log(multiplier(2));

const double = multiplier(2); // function: (number) => number * 2

console.log(double(3)); // function: (3) => 3 * 2

const triple = multiplier(3); // triple is a function: (number) => number * 3
console.log(triple(4)); // (4) => 4 * 3

// * Higher Order Array Methods
const numbers = [1, 2, 3, 4, 5];

// .forEach()
// numbers.forEach((num, index) => {
//   console.log(`Element at index ${index}: ${num}`);
//   console.log(num * 10);
// });

console.log('Before forEach: ', numbers);

numbers.forEach((num, index) => {
  numbers[index] = num * 10;
});

console.log('After forEach: ', numbers);

// .map() - creates a new array by transforming every element
const doubleNumbers = numbers.map((num) => {
  return num * 2;
  return 5; // get's never reached
});

console.log('Original array: ', numbers);
console.log('New map array: ', doubleNumbers);

// More .map()
const people = [
  { name: 'Alice', age: 15 },
  { name: 'Bob', age: 30 },
  { name: 'Carol', age: 35 },
  { name: 'Dave', age: 20 },
];

// Get ['ALICE', 'BOB', ...]
const namesUpperCase = people.map((person) => person.name.toUpperCase());

console.log(namesUpperCase);

// forEach
const namesUpperCaseForEach = [];
people.forEach((person) => {
  namesUpperCaseForEach.push(person.name.toUpperCase());
});

console.log(namesUpperCaseForEach);

// for loop
const namesUpperCaseFor = [];
for (let i = 0; i < people.length; i++) {
  namesUpperCaseFor.push(people[i].name.toUpperCase());
}

console.log(namesUpperCaseFor);

// * ...spread operator - creates a shallow copy of an array
const animals = ['tiger', 'zebra', 'lion', 'giraffe'];

// const copyOfAnimals = animals;

// copyOfAnimals[0] = 'elephant';
// console.log(animals);

// console.log(animals === copyOfAnimals); //true

console.log(...animals);

const copyOfAnimals2 = [...animals];
// console.log(animals === copyOfAnimals2); // false

copyOfAnimals2[0] = 'elephant';
console.log(copyOfAnimals2);
console.log(animals);

const person = { name: 'Alice', age: 15 };

const copyOfPerson = { ...person, age: 30, isStudent: false };

console.log(copyOfPerson);

// const people = [
//   { name: 'Alice', age: 15 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
//   { name: 'Dave', age: 20 },
// ];

const updatedPeople = people.map((person) => {
  return { ...person, age: person.age + 1, isStudent: false };
});

console.log('Updated people: ', updatedPeople);

// special syntax => without return {} keyword, when returning a object{}: use ({})
const updatedPeople2 = people.map((person) => ({
  ...person,
  age: person.age + 1,
  isStudent: false,
}));

// # .find() - returns the first(!) element that satisfies a condition or undefined
// const people = [
//   { name: 'Alice', age: 15 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
//   { name: 'Dave', age: 20 },
// ];

const firstPersonOver25 = people.find((person) => person.age > 25);
console.log(firstPersonOver25);

const personIs30YearsOld = people.find((person) => person.age === 30);
console.log(personIs30YearsOld);

// for (const person of people) {
//   if (person.age === 30) {
//     console.log('Found the person with age 30');
//     break;
//   }
// }

// # .filter() - creates a new array with ALL elements that pass a condition
// const people = [
//   { name: 'Alice', age: 15 },
//   { name: 'Bob', age: 30 },
//   { name: 'Carol', age: 35 },
//   { name: 'Dave', age: 20 },
// ];

const allPeopleOver25Filter = people.filter((person) => person.age > 25);
console.log(allPeopleOver25Filter);

// # .reduce() - reduces the array to a single value
const totalAge = people.reduce((acc, curr, index, array) => {
  console.log(`--- Step ${index + 1} ---`);
  console.log(`Current accumulator (acc): ${acc}`);
  console.log(`Current element (curr): ${curr.name}, age ${curr.age}`);

  const newAcc = acc + curr.age;
  console.log(`New accumulator after adding age: ${newAcc}`);
  console.log(`Remaining elements: ${array.length - index - 1}`);
  console.log('-----------------------\n');

  return newAcc;
}, 0);

console.log('Final sum:', totalAge);

// # .some() & .every()
// .some() - Boolean: checks if at least one element passes the condition
const isAnyoneAChild = people.some((person) => person.age < 18);
console.log(isAnyoneAChild);

// .every() - Boolean: checks if ALL elemets pass the condition
const areAlleAdults = people.every((person) => person.age >= 18);
console.log(areAlleAdults);
