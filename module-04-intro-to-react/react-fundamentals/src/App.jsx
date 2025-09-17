import Footer from "./components/Footer";
import NavBar from "./components/NavBar";
import StudentList from "./components/StudentList";

function App() {
  const name = "Aziz";

  const add = (num1, num2) => {
    return num1 + num2;
  };

  // List of names
  const students = ["Anila", "Aziz", "Harshi"];

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event.target["user-email"].value);
  };

  return (
    <>
      <NavBar />
      <h1>Hello {name.toUpperCase()}</h1>
      <h2>Sum of 4 and 5 is: {add(4, 5)}</h2>
      <h2>{students[0]}</h2>
      <StudentList />
      <button
        onClick={() => {
          alert("Button was clicked");
        }}
      >
        Alert
      </button>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="email"
          name="user-email"
          className="border-2"
        />
        <button>Submit email</button>
      </form>
      <Footer />
    </>
  );
}

export default App;
