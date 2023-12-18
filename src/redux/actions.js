export const addTask = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const removeTask = (index) => ({
  type: "REMOVE_TASK",
  payload: index,
});

export const deleteAllTasks = () => ({
  type: "REMOVE_ALL",
});
