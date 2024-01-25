// /* eslint-disable react/prop-types */

// const TodoList = ({ todos, dispatch }) => {
//   return (
//     <div className="mt-4">
//       {todos.map((todo) => (
//         <div
//           key={todo.id}
//           className="flex items-center justify-between p-2 mb-2 bg-white rounded shadow-md"
//         >
//           <span className="mr-2 font-semibold">
//             {todo.id}. {todo.name}
//           </span>
//           <button
//             onClick={() => dispatch({ type: "DELETE_TASK", payload: todo.id })}
//             className="px-4 py-2 bg-red-500 text-white rounded border-none hover:scale-105"
//           >
//             REMOVE TASK
//           </button>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TodoList;


/* eslint-disable react/prop-types */
import { useState } from "react";

const TodoList = ({ todos, dispatch }) => {
  const [editableId, setEditableId] = useState(null);
  const [editedTask, setEditedTask] = useState("");

  // to update the task
  const handleEdit = (todo) => {
    setEditableId(todo.id);
    setEditedTask(todo.name);
  };

  // to save the updated task
  const handleSave = (todo) => {
    dispatch({
      type: "UPDATE_TASK",
      payload: { id: todo.id, name: editedTask },
    });
    setEditableId(null);
  };

  return (
    <div className="mt-4">
      {todos.map((todo) => (
        <div
          key={todo.id}
          className="flex items-center justify-between p-2 mb-2 bg-white rounded shadow-md"
        >
          <div className="flex items-center">
            {editableId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                  className="p-2 border border-gray-300 mr-2 rounded"
                />
                <button
                  onClick={() => handleSave(todo)}
                  className="px-4 py-2 bg-green-500 text-white rounded border-none hover:scale-105"
                >
                  SAVE
                </button>
              </>
            ) : (
              <>
                <span className="mr-2 font-semibold">
                  {todo.id}. {todo.name}
                </span>
              </>
            )}
          </div>
          <div className="flex">
            {editableId !== todo.id && (
              <>
                <button
                  onClick={() => handleEdit(todo)}
                  className="px-4 py-2 bg-blue-500 text-white rounded border-none hover:scale-105"
                >
                  UPDATE
                </button>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_TASK", payload: todo.id })
                  }
                  className="px-4 py-2 bg-red-500 text-white rounded border-none hover:scale-105 ml-2"
                >
                  REMOVE TASK
                </button>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
