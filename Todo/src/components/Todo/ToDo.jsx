import { useReducer, useState } from "react";
import TodoList from "./TodoList";
import reducer from "./reducer";

// empty array representing there are no prior tasks
const initialState = [];


// const reducer = (state, action) => {
//   switch (action.type) {
//     // to addd new task
//     case "ADD_TASK":
//       return [
//         ...state,
//         // creating copy of the existing tasks array
//         {
//           id: state.length + 1,
//           name: action.payload,
//         },
//       ];

//     //   to delete the task
//     case "DELETE_TASK":
//         // deleting the tasks on the basis of their ids
//       return state.filter((d) => d.id !== action.payload);

//     //   to clear all the task
//     case "CLEAR_ALL":
//       return initialState;
//     // returning initial state means i.e. setting empty array

//     default:
//       return state;
//   }
// };

const ToDo = () => {
  const [todos, dispatch] = useReducer(reducer, initialState);
  const [inputValue, setInputValue] = useState("");

  const handleAddTask = () => {
    dispatch({ type: "ADD_TASK", payload: inputValue });
    setInputValue("");
  };

  return (
    <div className="container mx-auto mt-8 p-8 bg-gray-100 rounded-md shadow-md">
      <h1 className="text-2xl font-bold mb-4">Total Tasks: {todos.length}</h1>

      <div className="flex mb-4 justify-between">
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          className="p-2 border w-96 border-gray-300 mr-2 rounded"
        />
        <button
          onClick={handleAddTask}
          disabled={inputValue.trim() === ""}
          className={`p-2 bg-green-500 text-white rounded border-none hover:scale-105 ${
            inputValue.trim() === "" ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          ADD TASK
        </button>
        <button
          onClick={() => dispatch({ type: "CLEAR_ALL", payload: initialState })}
          className={`p-2 bg-red-500 text-white ml-2 rounded border-none hover:scale-105 ${
            todos.length === 0 ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={todos.length === 0}
        >
          CLEAR ALL
        </button>
      </div>

      <hr className="my-4" />
      <TodoList todos={todos} dispatch={dispatch} />
    </div>
  );
};

export default ToDo;
