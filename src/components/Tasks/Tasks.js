import React from "react";

import "./Tasks.css";
import GMButton from "../GMButton/GMButton";

const Tasks = () => {
  const taskList = [
    {
      id: 1,
      title: "maintain space rover",
      description: "Clean the wheels and check rover electonics",
      createdBy: "Elon",
      assignedTo: "Rob",
    },
    {
      id: 2,
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
  ];

  return (
    <div className="tasks">
      <h1>Tasks</h1>
      <div className="task__btnContainer">
        <GMButton text="Add" />
      </div>

      <div style={{ overflow: "auto" }}>
        <table className="tasks__table">
          <thead>
            <tr>
              <td>ID</td>
              <td>Title</td>
              <td>Creator</td>
              <td>Asigned to</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            {taskList.map((task) => (
              <tr key={task.id}>
                <td>{task.id}</td>
                <td>{task.title}</td>
                <td>{task.createdBy}</td>
                <td>{task.assignedTo}</td>
                <td className="tasks__table-actions">
                  <GMButton text="update" />
                  <GMButton text="delete" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Tasks;
