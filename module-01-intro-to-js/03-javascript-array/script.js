// ##### Primite Data Types #####
// Integer
// BigInt
// String
// Boolean
// Symbols
// indefined
// null

// ##### Objects / Reference (memory address) Data Types #####
// Array
// Object
// Function
// Date
// RegExp

let a = 10;
let b = 10;

// console.log(a === b); // true

let obj1 = { value: 10 };
let obj2 = { value: 10 };
// console.log(obj1 === obj2); // false

let obj3 = obj1;
// console.log(obj1 === obj3); // true

// ### ARRAYS!
const array = ['John', 40, true];

// console.log(array);

const names = ['Anila', 'Hashi', 'Aziz'];

// console.log(['Anila', 'Hashi', 'Aziz'][0]);
// console.log(names[0]);

// console.log(names);
names.push('Reagen', 'Maria');
// console.log(names);
names.pop();
console.log(names);

// console.log(names.length);

// console.log('Before toReversed:', names);
// const newArray = names.toReversed();
// console.log('After toReversed:', names);
// console.log('NewArray:', newArray);

// console.log('Before slice', names);
const slicedArray = names.slice(1, 3);
// console.log('original array names:', names);
// console.log('copy of array:', slicedArray);

// .splice() removes or replaces existing elements and/or adds new elements in place (Mutates original array)
// Example below removes 2 items starting from index 1 and inserts 'Mango'
const fruits = ['Apple', 'Banana', 'Orange', 'Kiwi'];
fruits.splice(1, 2, 'Mango'); // Output: ['Apple', 'Mango', 'Kiwi']
// console.log(fruits);

// .join()
const joinedString = names.join(', ');
// console.log('Names of WD67: ' + names.join(', '));
// console.log('Names of WD67: ' + joinedString);

// console.log(joinedString.toUpperCase());

const string = 'abcde';
// console.log(string.toUpperCase());
// console.log(string.split());
// console.log(string.split(''));

const sentence = 'Hi, my name is Renke';
const splitString = sentence.split(' ');
// console.log(splitString);

// console.log(splitString.join(' '));

// LOOPS
// for loop
for (let i = 0; i < names.length; i += 2) {
  const upperCaseName = names[i].toUpperCase();
  console.log(`Name at index No. ${i}: ${upperCaseName}`);
}

// for..of loop
for (const studentName of names) {
  console.log(studentName.toUpperCase());
}
