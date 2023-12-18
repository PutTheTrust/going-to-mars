import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTask } from "../../redux/actions";

import GMButton from "../GMButton/GMButton";
import Modal from "../Modal/Modal";

import "./Tasks.css";
import deleteIcon from "../../assets/icon-trash.svg";
import editIcon from "../../assets/icon-edit.svg";
import UpdateModal from "../UpdateModal/UpdateModal";

const Tasks = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(false);

  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  const handleUpdateTask = (id) => {
    setIsUpdateOpen(true);
    // console.log(id);
    setSelectedId(id);
  };

  return (
    <>
      <div className="tasks">
        <h1>Tasks</h1>
        <div className="task__btnContainer">
          <GMButton text="Add" onClick={() => setIsOpen(true)} />
        </div>

        <div style={{ overflow: "auto" }}>
          {tasks.length > 0 ? (
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
                      <GMButton
                        text="update"
                        onClick={() => handleUpdateTask(task.id)}
                        image={editIcon}
                        colour={"green"}
                      />
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
          ) : (
            <p className="tasks__empty">No Tasks yet</p>
          )}
        </div>
      </div>

      {/* Only show modal if isOpen is true */}
      {isOpen && <Modal setIsOpen={() => setIsOpen(false)} />}
      {isUpdateOpen && (
        <UpdateModal setIsOpen={() => setIsUpdateOpen(false)} id={selectedId} />
      )}
    </>
  );
};

export default Tasks;
