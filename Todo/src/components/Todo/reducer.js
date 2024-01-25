const initialState = [];
const reducer = (state, action) => {
  switch (action.type) {
    // to addd new task
    case "ADD_TASK":
      return [
        ...state,
        // creating copy of the existing tasks array
        {
          id: state.length + 1,
          name: action.payload,
        },
      ];

    //   to delete the task
    case "DELETE_TASK":
      // deleting the tasks on the basis of their ids
      return state.filter((d) => d.id !== action.payload);

    //   to clear all the task
    case "CLEAR_ALL":
      return initialState;
    // returning initial state means i.e. setting empty array

    // to update the task
    case "UPDATE_TASK":
      return state.map((task) =>
        task.id === action.payload.id
          ? { ...task, name: action.payload.name }
          : task
      );
    default:
      return state;
  }
};

export default reducer;
