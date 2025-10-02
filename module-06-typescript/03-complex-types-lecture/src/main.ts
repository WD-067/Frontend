const strings: string[] = ["hi", "bye", "what?"];

const nums: number[] = [1, 3, 5, 6, 7];

// nums.push("4");

const bools: Array<boolean> = [true, false, false, true];

// # Tuples

const graphCoordinates: [number, number, number?] = [23, -3];

// graphCoordinates[0] = "string";

// const [counter, setCounter] = useState(0);

// # Object Types
// # Read Only
// # Union Types
// # Type Aliases

type StringOrNumber = number | string;

type Person = {
  id: StringOrNumber;
  readonly name: string;
  age: number;
  city?: string;
};

const person: Person = {
  id: "2dsf34-234",
  name: "Steve",
  age: 72,
  // city: "Berlin",
};

const person2: Person = {
  id: 4,
  name: "Reed",
  age: 43,
};

const people: Person[] = [];

people.push(person);
people.push(person2);

// people.push({ name: "Susan" });

// person.name = "Captain America";
person.age = 73;

// if (person.city) {
//   console.log(person.city.toUpperCase());
// }

console.log(person.city?.toUpperCase());

// # Logical OR ||
// if "falsy" (0, false, "", NaN, null, undefined), then default
console.log(person.city || "Unkown");

// # Nullish coalescing operator (??)
// if "nullish" (null or undefined), then default
console.log(person.city ?? "Unkown");

console.log(0 || "Default"); // "Default"
// console.log(0 ?? "Default"); // 0
// console.log(null || "Default"); // "Default"
// console.log(null ?? "Default"); // "Default"

// # Array of Objects
// # Interfaces
interface User {
  name: string;
  age: number;
}

const user: User[] = [
  { name: "Ada", age: 36 },
  { name: "Grace", age: 30 },
];

console.log(user);

user.forEach((user) => {
  console.log(
    `${user.name} if ${user.age} years old.
    `
  );
});

// # Type Intersections

type Role = "admin" | "user" | "staff";

type DBEntry = {
  _id: string;
  createdAt: string;
};

type DBUser = DBEntry & {
  name: string;
  email: string;
  password: string;
  role: Role;
};

const userTI: DBUser = {
  _id: "123sdfgd",
  name: "Steve rogers",
  email: "captain@america.com",
  password: "stevepass",
  createdAt: "2025-10-02",
  role: "user",
};

interface DBEntryInterface {
  _id: string;
  createdAt: string;
}

interface DBUserInterfacee extends DBEntryInterface {
  name: string;
  email: string;
  password: string;
}

const userI: DBUserInterfacee = {
  _id: "123sdfgd",
  name: "Steve rogers",
  email: "captain@america.com",
  password: "stevepass",
  createdAt: "2025-10-02",
};

// # Mapped Objects
// # Literal Unions
type Direction = "left" | "right" | "up" | "down";

// Example 1: Using in a variable
let move: Direction = "up";

// Example 2: Function accepting a Direction
function movePlayer(direction: Direction) {
  console.log(`Player moves ${direction}`);
}

movePlayer("left"); //
movePlayer("down"); //
// movePlayer("forward"); //  Error: Argument of type '"forward"' is not assignable to type 'Direction'

// Example 3: Switch statement with exhaustive checking
function handleDirection(dir: Direction) {
  switch (dir) {
    case "left":
      console.log("Moving left");
      break;
    case "right":
      console.log("Moving right");
      break;
    case "up":
      console.log("Moving up");
      break;
    case "down":
      console.log("Moving down");
      break;
    default:
      // TypeScript will warn if we forget a case
      const _exhaustiveCheck: never = dir;
      return _exhaustiveCheck;
  }
}

handleDirection("up");
// handleDirection("forward"); //  Error: Argument of type '"forward"' is not assignable to type 'Direction'

// # Function Types
type Calculation = (num1: number, num2: number) => number;

const add: Calculation = (a, b) => a + b;

const subtract: Calculation = (a, b) => a - b;

// add("4", 5);
