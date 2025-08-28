// What is this?

/* Multi line
asdf
asdf
Comments */

// console.log(20 + 5);
// Variables
let result = 20 + 5;
// console.log(result);

const constVar = "I'm the paradoxical constant variable";

// Legacy code
var imOld = "Don't use me!";

// Datatypes
result = '25';

// console.log(result);
// console.log(typeof result);

// constVar = 'Something new';

// Object: Collection of properties
let person = { firstName: 'John', age: 28 };

// console.log(person);

// Array
let fruits = ['Banana', 'Apple', 'Orange', 25];
// console.log(fruits);

// Arithmetic
// Increment (++)
// let num = 1;
// num++;
// ++num;
// num = num + 1;
// num--;

// num = num + 7;
// num += 7;
// console.log(num);

// Comparison
console.log(10 === '10'); // false
// console.log(0 == false); // true
console.log(0 === false); // false

// logical AND
console.log(10 === '10' && 0 === false); // false
console.log(10 === '10' && 0 === 0); // false
console.log(10 === 10 && 0 === 0); // true

// logical OR - at least ONE must be true
console.log(10 === 10 || 0 === 0); // true
console.log(10 === '10' || 0 === 0); // true
console.log(10 === '10' || 0 === false); // false

//  logical NOT
console.log(true);
console.log(!true);
// type cercion - changes to a boolean
console.log(!0); // true
console.log(!1); // false
console.log(!-3); // false

console.log(!null); // true
console.log(!undefined); // true

// Conditions
// if statements
// SCOPE
// let weatherToday = "I'm the weather";
// let temp = 30;
// const imLocal = "I'm a tourist";

// if (temp >= 20) {
//   const imALocal = "I'm not a tourist";
//   weatherToday = 'toasty';
//   console.log('local const:', imALocal);
// }

// console.log('global const:', imLocal);
// console.log(weatherToday);

// if-else
// let weatherToday = "I'm the weather";
// let temp = 5;

// if (temp >= 20) {
//   weatherToday = 'toasty';
// } else {
//   weatherToday = 'a bit chilly';
// }

// console.log(weatherToday);

let isPlayTime = true; // camelCase naming convention for variables

// if (isPlayTime === true) {
// if (isPlayTime) {
//   console.log('Yay! Time to play!');
// } else {
//   console.log('Oh no, I have to work :(');
// }

// teneray operator
// isPlayTime
//   ? console.log('Yay! Time to play!')
//   : console.log('Oh no, I have to work :(');

// if-else-if

let weatherToday = "I'm the weather";
let temp = 12;

if (temp >= 20) {
  weatherToday = 'toasty';
} else if (temp >= 10 && temp < 20) {
  weatherToday = 'a bit chilly';
} else {
  weatherToday = 'uncertain';
}

// console.log('The weather today is ' + weatherToday + '.');
// console.log(`The weather today is ${weatherToday}.`); // backticks ``  : template literal

//  Switch statements
// const charClass = 'wizard';

// switch (charClass) {
//   case 'fighter':
//     console.log("I'm very strategic!");
//     break;
//   case 'monk':
//     console.log('I fight with my fist!');
//     break;
//   case 'wizard':
//     console.log('I get my magic from books!');
//     break;
//   case 'sorcerer':
//   case 'warlock':
//     console.log('I can do powerful magic!');
//     break;
//   default:
//     console.log('I love DnD!');
// }

// ################################################
// Functions

// Function declaration
sayHelloWorld('Text');

function sayHelloWorld(chicken) {
  console.log(chicken);
}

function writeMessage() {
  return 'Hello world v2!';
}

const myMessage = writeMessage();
console.log(myMessage);

// Function expression
// const goodByeWorld = function myFunc() {

const goodByeWorld = function () {
  console.log('Goodbye awesome world!');
};

goodByeWorld();

// Arrow function
const sudoMakeMeASandwich = () => {
  console.log("Here's your sandwich!");
};

sudoMakeMeASandwich();

// const square = (num) => { return num * num };
const square = (num) => num * num;

// const square = (parameter) => parameter * parameter;

console.log(square(8)); // square(argument)

console.log(square('8'));
console.log(square('eight')); // NaN = Not a Number

const multiply = (numA, numB) => numA * numB;

const multNum = multiply(5, 6);
console.log(multNum);

// --- For Loop ---

// for (let i = 0; i < 5; i++) {
//   console.log(i);
// }

// --- Break and Continue --
// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; //exists the loop when i is 5
//   }
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 2) {
//     continue; // Skips the rest of the loop body, when i is 2
//   }
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

//  --- While Loop ---
let i = 0;

// while (i === 0) {  // DANGER ! Infinite Loop!
while (i < 5) {
  console.log(i);
  i++;
}

// --- Do-While Loop ---
i = 0;
do {
  console.log(i); // Always executes at least once
  i++;
} while (i < 5);

const animals = ['lion', 'tiger', 'bear', 'giraffe', 'zebra', 'monkey'];
// console.log(animals)

for (let i = 0; i < animals.length; i++) {
  console.log(animals[i]);
}

// for...of loop : direct access to values
for (const animal of animals) {
  console.log(animal);
}

const myString = 'hello';

for (const char of myString) {
  console.log(char);
}
