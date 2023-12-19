const initialState = {
  tasks: [
    {
      id: 1,
      title: "maintain space rover",
      description: "Clean the wheels and check rover electonics",
      createdBy: "Elon",
      assignedTo: "Rob",
    },
    {
      id: 5,
      title: "maintain space rover",
      description: "Clean the wheels and check rover electonics",
      createdBy: "Professor",
      assignedTo: "Fry",
    },
  ],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "REMOVE_TASK":
      const newTasks = state.tasks.filter((task) => task.id !== action.payload);
      return {
        ...state,
        tasks: newTasks,
      };

    case "REMOVE_ALL":
      return {
        ...state,
        tasks: [],
      };
    //  Update Task with matching payload id
    case "UPDATE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((task) =>
          task.id === action.payload.id
            ? { ...task, ...action.payload.updatedTask }
            : task
        ),
      };

    case "GET_TASK_BY_ID":
      const taskById = state.tasks.find((task) => task.id === action.payload);
      return {
        ...state,
        selectedTask: taskById || null,
      };

    default:
      return state;
  }
};

export default rootReducer;
