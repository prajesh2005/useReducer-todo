import { useReducer } from "react";

const reducer = (state, action) => {
  if (action.type === "INCREMENT") {
    return (state = state + 1);
  } else if (action.type === "DECREMENT") {
    return (state = state - 1);
  }
  return state;
  //   reducer must return a value
};

const initialState = 0;

const UseReducerCounter = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  //   return two things.... state,dispatch
  // takes two arguments....reducer,initialState
  //   dispatch triggers the action method
  return (
    <div
      style={{
        backgroundColor: "whiteSmoke",
        padding: "40px",
        borderRadius: "10px",
        border: "2px solid black",
        boxShadow: "0 2 5 0.5 gray",
      }}
    >
      <h1 style={{ fontSize: "1.8rem", color: "Blue", marginBottom: "15px" }}>
        Counter Application
      </h1>

      <button
        onClick={() => dispatch({ type: "INCREMENT" })}
        style={{ marginRight: "10px", backgroundColor: "lightGreen" }}
      >
        Increase Count
      </button>
      <button
        onClick={() => dispatch({ type: "DECREMENT" })}
        disabled={state === 0}
        style={{
          backgroundColor: "orangeRed",
          cursor: state === 0 ? "not-allowed" : "pointer",
        }}
        // the dispatch has a inbuilt property..type...where we state the task we want to do...and write its functionality in reducer function
      >
        Decrease Count
      </button>
      <h2 className="text-xl font-semibold mt-4">Counter Value: {state}</h2>
    </div>
  );
};

export default UseReducerCounter;
