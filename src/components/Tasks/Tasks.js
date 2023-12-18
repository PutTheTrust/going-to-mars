import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../redux/actions";

import GMButton from "../GMButton/GMButton";
import Modal from "../Modal/Modal";

import "./Tasks.css";
import deleteIcon from "../../assets/icon-trash.svg";
import editIcon from "../../assets/icon-edit.svg";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState();
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  return (
    <>
      <div className="tasks">
        <h1>Tasks</h1>
        <div className="task__btnContainer">
          <GMButton text="Add" onClick={() => setIsOpen(true)} />
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
              {tasks.map((task) => (
                <tr key={task.id}>
                  <td>{task.id}</td>
                  <td>{task.title}</td>
                  <td>{task.createdBy}</td>
                  <td>{task.assignedTo}</td>
                  <td className="tasks__table-actions">
                    <GMButton text="update" image={editIcon} colour={"green"} />
                    <GMButton
                      text="delete"
                      onClick={() => dispatch(removeTask(task.id))}
                      image={deleteIcon}
                      colour="red"
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Only show modal if isOpen is true */}
      {isOpen && <Modal setIsOpen={() => setIsOpen(false)} />}
    </>
  );
};

export default Tasks;
