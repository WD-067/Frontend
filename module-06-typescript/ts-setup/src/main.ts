console.log("Sanity check!");

// let num = 6;

// num = "Not anymore!";

// num.array.forEach((element) => {
//   console.log(element);
// });

// # Primitive Types in TS

// string
let myString = "This is a string";

let templateLiteral = `Here is an example ${67}`;
// console.log(templateLiteral);
// console.log(67);

// number
let num = 6;

// boolean
let bool = false;

// null
let nullVar: null = null;

// undefined
let undef: undefined;

// any
let anything: any = "This can be reassigned";
anything = 42;

// # literal types
// # when declaring primitive type with const
const constString = "I cannot be changed";
// constString = "A different string";

const constBool = false;

// # Basic function annotation
// function shout(spoken: string): string {
//   return spoken.toUpperCase();
// }
const shout = (spoken: string): string => {
  return spoken.toUpperCase();
};

console.log(shout("hey, how are you?"));

// console.log(shout(42));

const print = (content: any): void => {
  console.log(content);
};

print(shout("hey, how are you?"));

const isOldEnough = (age: number): string => {
  if (age >= 18) {
    return "You are old enough";
  } else {
    return "You are not old enough";
  }
};

// ###################

const logMessage = (message: string, userId?: number): void => {
  console.log(`${message} ${userId ? `From user ${userId}` : ""}`);
};

logMessage("Hello there!");
logMessage("Something", 6);

// ###################

const greetUser = (name: string = "Guest"): string => {
  return `Welcome, ${name}`;
};

console.log(greetUser());
console.log(greetUser("Ada"));
