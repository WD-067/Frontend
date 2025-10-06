// # Enums
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

let move: Direction = Direction.Up;

type DirectionUnion = "left" | "right" | "up" | "down";

// ## Enums vs Literal Unions
function turnWithLiteralUnion(dir: DirectionUnion) {
  if (dir === "left") {
    console.log("Turning left");
  }
}

turnWithLiteralUnion("left");

function turnWithEnum(dir: Direction) {
  if (dir === Direction.Left) {
    console.log("Turning left");
  }
}

// turnWithEnum(Direction.Left);

// # Type Narrowing
// ## Truthiness Narrowing
const alertMe = (msg: string): void => {
  if (msg) {
    alert(msg);
  } else {
    alert("Did you forget why you wanted to be alerted?");
  }
};

// alertMe("");

// ## Equality Narrowing
const compare = (x: string | number, y: string | boolean) => {
  if (x === y) {
    console.log(x.toUpperCase());
  }
};

// compare(4, "4"); // no output
// compare(4, true); // no output
// compare("Girrafe", "Girrafe"); // String 3 (in upperCase)

// # Type Guards with `typeof`
// console.log(typeof false); // "boolean"
// console.log(typeof "I am a string"); // "string"
// console.log(typeof 35); // "number"

const printValue = (value: string | number): void => {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else {
    console.log(value.toFixed(2));
  }
};

// printValue(4);
// printValue("test");

// # Type guarding Objects
// console.log(typeof { firstname: "Bob" }); // "object"
// console.log(typeof [1, 2, 3]); // "object"
// console.log(Array.isArray({ firstname: "Bob" })); // false
// console.log(Array.isArray([1, 2, 3])); // true

// # Checking Classes with `instanceof`
const logDateOrString = (val: Date | string) => {
  if (val instanceof Date) {
    console.log(
      val.toLocaleDateString("de-DE", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      })
    );
  } else {
    console.log(val.trim());
  }
};

// logDateOrString("1989-12-24"); // Outputs trimmed string
// logDateOrString(new Date("1989-12-24")); // Outputs formatted date

// ## The `unkown` type
const throwSoemthing = (throwError: boolean) => {
  try {
    if (throwError) {
      throw new Error("This will be the message property");
    } else {
      throw "This wouldn't have a message property, and would cause a runtime error, if we try to access it";
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
    } else {
      console.log(error);
      console.log("Default error message");
    }
  }
};

// throwSoemthing(true);
// throwSoemthing(false);

// # Checking for a Property with `in`
// type Dog = { bark: () => void };
// type Cat = { meow: () => void };

// type Pet = Dog | Cat;

// const isDog = (pet: Pet) => {
//   return "bark" in pet;
// };

// function speak(pet: Pet) {
//   if (isDog(pet)) {
//     pet.bark();
//   } else {
//     pet.meow();
//   }
// }

// const dog: Dog = {
//   bark: () => console.log("Woof!"),
// };

// const cat: Cat = {
//   meow: () => console.log("Meow!"),
// };

// speak(dog);
// speak(cat);

// # Discriminated Unions
type Dog = { kind: "dog"; bark: () => void };
type Cat = { kind: "cat"; meow: () => void };
type Bird = { kind: "bird"; tweet: () => void };

type Pet = Dog | Cat | Bird;

function speak(pet: Pet) {
  if (pet.kind === "dog") {
    pet.bark();
  } else if (pet.kind === "cat") {
    pet.meow();
  } else {
    pet.tweet();
  }
}

const dog: Dog = {
  kind: "dog",
  bark: () => console.log("Woof!"),
};

const dog2: Dog = {
  kind: "dog",
  bark: () => console.log("Wuuf!"),
};

const cat: Cat = {
  kind: "cat",
  meow: () => console.log("Meow!"),
};

speak(dog);
speak(dog2);
speak(cat);

// # Type Assertions
const btn = document.querySelector("#btn")!;
// ## Type-Casting with `as`
const input = document.querySelector("#text-input") as HTMLInputElement;
// const input = document.querySelector<HTMLInputElement>("#text-input")!;

console.log(input.value);

// ## Not Null Assertion
btn.textContent = "CLICK!!!";
btn.classList.add("px-4");
