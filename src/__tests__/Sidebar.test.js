const { render, fireEvent } = require("@testing-library/react");
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import { deleteAllTasks, removeTask } from "../redux/actions";
// import store from '../redux/store'

import Sidebar from "../components/Sidebar/Sidebar";

// Mock the redux store
const mockStore = configureStore([]);

const mockTasks = [
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
];

describe("Sidebar Tests", () => {
  let store;
  //   let sidebar;

  beforeEach(() => {
    store = mockStore({ tasks: mockTasks });
  });

  it("should clear all tasks", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    // Initial length should be 2
    expect(mockTasks.length).toBe(2);

    const deleteButton = getByText("Delete All Tasks");
    fireEvent.click(deleteButton);

    // Checking to see if Remove all dispatched was fired
    const actions = store.getActions();
    expect(actions).toEqual([deleteAllTasks()]);
  });

  it("should show correct number of tasks", () => {
    const { getByText } = render(
      <Provider store={store}>
        <Sidebar />
      </Provider>
    );

    const taskCount = getByText(`Number of tasks (${mockTasks.length})`);

    expect(taskCount.textContent).toBe("Number of tasks (2)");
  });
});
