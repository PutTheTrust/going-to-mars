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
    {
      id: 3,
      title: "maintain space rover",
      description: "Clean the wheels and check rover electonics",
      createdBy: "Zap",
      assignedTo: "Leela",
    },
    {
      id: 4,
      title: "maintain space rover",
      description: "Clean the wheels and check rover electonics",
      createdBy: "Bender",
      assignedTo: "Zoidberg",
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

    default:
      return state;
  }
};

export default rootReducer;
