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

export const updateTask = (taskId, updatedTask) => ({
  type: "UPDATE_TASK",
  payload: {
    id: taskId,
    updatedTask: updatedTask,
  },
});

export const getTaskById = (taskId) => ({
  type: "GET_TASK_BY_ID",
  payload: taskId,
});
