const {
  render,
  fireEvent,
  getByRole,
  getByTestId,
  getByAltText,
  act,
} = require("@testing-library/react");
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { deleteAllTasks, removeTask } from "../redux/actions";
import userEvent from "@testing-library/user-event";

import store from "../redux/store";

import Tasks from "../components/Tasks/Tasks";

describe("Modal Tests", () => {
  it("Should open the Create Task Modal", async () => {
    const { getByText, getByTestId } = render(
      <Provider store={store}>
        <Tasks />
      </Provider>
    );

    await act(async () => {
      const addButton = getByText("Add");
      await userEvent.click(addButton);
    });

    const createTaskModal = getByTestId("createTask");
    expect(createTaskModal).toBeInTheDocument();
  });

  it("Should open the Update Task Modal", async () => {
    const { getByTestId, getAllByLabelText } = render(
      <Provider store={store}>
        <Tasks />
      </Provider>
    );

    await act(async () => {
      const buttons = getAllByLabelText("update");
      await userEvent.click(buttons[0]);
    });

    // Perform assertions on the updated state or UI
    const updateTaskModal = getByTestId("updateTask");
    expect(updateTaskModal).toBeInTheDocument();
  });
});
