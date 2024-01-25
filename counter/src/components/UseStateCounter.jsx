import { useState } from "react";

const UseStateCounter = () => {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter + 1);
  }

  function decrement() {
   setCounter(counter - 1);
  }
  return (
    <>
      <div
      style={{
        backgroundColor: "whiteSmoke",
        padding: "40px",
        borderRadius: "10px",
        border: "2px solid black",
        boxShadow: "0 2 5 0.5 gray",
      }}
      >
        <h1 style={{ fontSize: "1.8rem", color: "Blue" }}>
          Counter Application
        </h1>

        <button
          onClick={increment}
          style={{ marginRight: "10px", backgroundColor: "lightGreen" }}
        >
          Increase Count
        </button>
        <button
          onClick={decrement}
          disabled={counter===0}
          style={{ backgroundColor: "orangeRed", cursor:counter===0?"not-allowed":"pointer"}}
        >
          Decrease Count
        </button>
        <h2>Counter Value: {counter}</h2>
      </div>
    </>
  );
};

export default UseStateCounter;
