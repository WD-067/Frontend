import { useState } from "react";

const Counter = ({ darkTheme }) => {
  const [counter, setCounter] = useState(0);

  console.log(counter);

  const handleClick = (e) => {
    const operation = e.target.value;

    if (operation === "+") {
      setCounter((prev) => prev + 1);
    } else if (operation === "-") {
      //  if (counter <= 0) return;
      setCounter((prev) => prev - 1);
    }
  };

  const textColor = darkTheme ? "text-white" : "text-black";

  return (
    <>
      <div
        className={`border-2 ${darkTheme ? "border-gray-100" : "border-black"} flex w-36 justify-between`}
      >
        <button
          value="+"
          onClick={handleClick}
          className={"cursor-pointer bg-green-400 p-4 font-bold " + textColor}
        >
          +
        </button>

        <span className={`p-4 ${textColor}`}>{counter}</span>

        <button
          disabled={counter === 0 ? true : false}
          value="-"
          onClick={handleClick}
          //   className={
          //     counter === 0
          //       ? "bg-gray-400 p-4 font-bold"
          //       : "bg-red-400 p-4 font-bold cursor-pointer"
          //   }
          className={`p-4 font-bold ${counter === 0 ? "bg-gray-400" : "cursor-pointer bg-red-400"} ${textColor}`}
        >
          -
        </button>
      </div>

      <button
        onClick={() => {
          setCounter(0);
        }}
        className="mt-1 cursor-pointer bg-gray-300 p-2"
      >
        Clear
      </button>
    </>
  );
};

export default Counter;
