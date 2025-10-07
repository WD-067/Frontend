// # Built-in Generics

const stringArray: Array<string> = ["1", "2", "3", "4"];

// # Promises as Generics

// # Generic Functions

type Duck = {
  _id: string;
  name: string;
  imgUrl: string;
  quote: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

const fetchData = async <T>(url: string, options?: RequestInit): Promise<T> => {
  //   const res = await fetch(url);
  const res = await fetch(url, options);

  if (!res.ok) throw new Error("Fetch failed");

  return res.json();
};

// const ducks = await fetchData<Duck[]>(
//   "https://duckpond-89zn.onrender.com/wild-ducks"
// );

// ducks.forEach((duck) => console.log(duck.name, duck.imgUrl));

// # Generic Type Aliases

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZTQxYjQyOWE1Yjc5Y2NlNWU5ZDVlOGRkN2I1ZTBiZiIsIm5iZiI6MTc1MjA1NTI0My40MDYwMDAxLCJzdWIiOiI2ODZlM2RjYjQwMjcyOTQ2MTY1MWVhZWMiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.mOYov4BfVmQENUBBXFhVELz6GnVTfGZPsIN4ZVBjDvk",
  },
};

type Movie = {
  original_title: string;
  poster_path: string;
  id: number;
};

type Actors = {
  firstname: string;
  lastname: string;
  id: number;
  image: string;
};

type ApiResponse<T> = {
  page: number;
  results: T[];
  total_pages: number;
  total_reults: number;
};

const tmdbResponse = await fetchData<ApiResponse<Movie>>(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
);

const tmdbFetchactors = await fetchData<ApiResponse<Actors>>(
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
  options
);

// console.log(tmdbResponse);

// console.log(
//   tmdbResponse.results.forEach((movie) => console.log(movie.original_title))
// );

// # Constraining Generics
type LengthWise = {
  length: number;
};

const logLength = <T extends LengthWise>(value: T) => {
  console.log(value.length);
};

// logLength(4); // Error, numbers don't have a length property
// logLength("45");
// logLength([1, 2, 3, 4]);
// logLength({ name: "Sally", age: 36, length: 8 });

// # Default Types

// # Using Several Types in a Generic

const makeTuple = <T, U>(item1: T, item2: U): [T, U] => [item1, item2];

const myTuple = makeTuple(3, "Jimmy");

console.log(myTuple);

// # The `object` Type vs `{}`

const makeTupleArray = <T extends object>(obj: T) => Object.entries(obj);

const myObj = {
  a: "some string",
  b: "another string",
};

// `unkown`: accepts anything but requires us to type check
// `{}`: same as `unkown` but doesn't include `undefined` or `null`

console.log(makeTupleArray(myObj));
// console.log(makeTupleArray(42));
// console.log(makeTupleArray("string"));
// console.log(makeTupleArray(null));
// console.log(makeTupleArray(undefined));

// # The `keyof` Keyword
type SomeObject = {
  a: string;
  b: number;
};

// SomeObjectKeys = "a" | "b"
type SomeObjectKeys = keyof SomeObject;

const someKey: SomeObjectKeys = "a";
// const someKey: SomeObjectKeys = "c";

// # Built-in Utiliy Types
type User = {
  name: string;
  email: string;
  password: string;
};

const validateUserForm = ({ name, email, password }: User) => {
  const newErrors: Partial<User> = {};

  if (!name.trim()) {
    newErrors.name = "Name is required";
  }
  if (!email.trim()) {
    newErrors.email = "Email is required";
  }
  if (!password.trim()) {
    newErrors.password = "Password is required";
  }

  return newErrors;
};
