// function() {}
// array[]
// objects{}
// .method()

// JS OBJECTS
const person = {
  firstName: 'John',
  age: 40,
  isStudent: true,
  address: { street: 'Sesame street', houseNo: '40c', city: 'Berlin' },
  languages: ['english', 'german', 'spanish'],
  'user-id': '003423',
  //   Getters
  //   sayHi: function () {
  sayHi() {
    console.log(`Hi my name is, ${person.firstName} `);
    console.log(`Hi my name is, ${this.firstName} `);
  },
  //   Setter
  setNew(newAge) {
    person.age = newAge;
  },
};

const person2 = {
  firstName: 'Mary',
  age: 40,
  isStudent: true,
  address: { street: 'Sesame street', houseNo: '40c', city: 'Berlin' },
  languages: ['english', 'german', 'spanish'],
  'user-id': '003423',
  //   Getters
  //   sayHi: function () {
  sayHi() {
    console.log(`Hi my name is, ${person.firstName} `); // John
    console.log(`Hi my name is, ${this.firstName} `); // Mary or Jane
  },
  //   Setter
  setNew(newAge) {
    person.age = newAge;
  },

  //   For now: Do not use arrow functions inside of objects
  //   sayArrow: () => {
  //     console.log(`Hi my name is, ${this.firstName} `); // global context (window/global) - undefind
  //   },
};

person.sayHi();
person.setNew(47);

person2.sayHi();
person2.firstName = 'Jane';
person2.sayHi();
// person2.sayArrow();

console.log(person.firstName);
console.log(person.address.city);

const whatUSerClickedOn = 'age';
console.log(person[whatUSerClickedOn]);

// Change values
console.log('Age before changing: ', person.age);
person.age = 45;
console.log('Age after changing: ', person.age);

// person = {}; // ERROR! No reassighning with const

const array = [1, 4, 6];
array[1] = 7;
console.log(array);

// Alternative way of creating objects
let make = 'Toyota';
const model = 'Corolla';
const year = 2025;

const car = {
  make, // make: make
  model,
  year,
};

car.year = 2024; // changing properties
car.color = 'Yellow'; //adding properties
console.log(car);

// Object .methods()
// static .methods()
console.warn(Object.keys(car));

console.log(Math.random()); // number between 0 -1
console.log(Math.round(4.7)); // nearest integer
console.log(Math.max(1, 5, 28)); // gives highest number of a list (29)
console.log(Math.min(1, 5, 28)); //1

const date = new Date(); // creates a new Date Object
console.log(date.getFullYear());
console.log(date.getDate());
console.log(date.getMonth() + 1);
console.log(date.getSeconds());

const birthday = new Date('2000-01-01');
console.log(birthday.getFullYear());

const date2 = Date();
console.log(date2); // returns a string of the current date
console.log(typeof Date()); // string

// instance .methods()

// # DESTRUCTURING
// const firstName = person.firstName;
// const age = person.age;
// const isStudent = person.isStudent;
// const city = person.address.city

person.nationality = 'German'; // add nationality
// console.log(person);
// person.address.city = 'Munich';

const {
  firstName,
  age: age2,
  isStudent,
  nationality = 'Unkown nationality',
  address: { city },
} = person;

console.log(firstName);
console.log(age2);
console.log(isStudent);
console.log(city);
console.log(nationality);

// # ARRAY Destructuring
const array2 = [3, 7, 9, 16];

console.log(array2);

// const thirdNumber = array2[2]
const { 2: thirdNumber } = array2;

console.log(thirdNumber);

// const firstNumber = array2[0];
// const secondNumber = array2[1];

const [firstNumber, secondNumber] = array2;
console.log(firstNumber);
console.log(secondNumber);

const [, , , fourthNumber] = array2;
console.log(fourthNumber);

const myArray = [
  // 56 elements
  'item at index 56',
  'item at index 57',
  // ... more elements
];

const { 57: item } = myArray;
console.log(item); // item at index 57
