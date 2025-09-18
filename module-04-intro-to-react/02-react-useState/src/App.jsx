// As best practice, we have third part library imports on top and our own modules at the bottom.
import { useState } from "react";

import Counter from "./components/Counter";

function App() {
  const [darkTheme, setDarkTheme] = useState(false);

  const toggleTheme = () => {
    setDarkTheme((prev) => !prev);
  };

  const styles = darkTheme ? "bg-slate-800" : "bg-white";

  return (
    <main className={`h-screen ${styles}`}>
      <label className={darkTheme ? "text-white" : "text-black"}>
        <input type="checkbox" onChange={toggleTheme} />
        Dark mode
      </label>

      {/* How to pass props */}
      <Counter darkTheme={darkTheme} text="Hello" />
    </main>
  );
}

export default App;
