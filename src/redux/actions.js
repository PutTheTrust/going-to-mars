export const addItem = (task) => ({
  type: "ADD_TASK",
  payload: task,
});

export const removeItem = (index) => ({
  type: "REMOVE_TASK",
  payload: index,
});
