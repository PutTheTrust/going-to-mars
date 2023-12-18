import { useState } from "react";
import { useDispatch } from "react-redux";

import GMButton from "../GMButton/GMButton";
import GMInput from "../GMInput/GMInput";

import close from "../../assets/icon-close.svg";
import "./Modal.css";
import { addTask } from "../../redux/actions";

const Modal = ({ setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [assigned, setAssigned] = useState("");
  // used to keep track of id being added
  const [tmpId, setTmpId] = useState(21);

  const dispatch = useDispatch();

  const handleAddNewTask = () => {
    if (!title || !description || !creator || !assigned) {
      alert("please fill in all inputs");
      return;
    }

    dispatch(
      addTask({
        id: tmpId,
        title,
        description,
        createdBy: creator,
        assignedTo: assigned,
      })
    );
    setTmpId(tmpId + 1);
  };

  return (
    <div className="modal">
      <div className="modal__content">
        <div className="modal__content-btn">
          <button onClick={setIsOpen}>
            <img src={close} alt="close" />
          </button>
        </div>

        <h2>Create Task</h2>

        <hr />

        <GMInput name="title" title="Title" value={title} setValue={setTitle} />
        <GMInput
          name="description"
          title="Description"
          value={description}
          setValue={setDescription}
        />
        <GMInput
          name="creator"
          title="Creator"
          value={creator}
          setValue={setCreator}
        />
        <GMInput
          name="assigned"
          title="Assigned to"
          value={assigned}
          setValue={setAssigned}
        />

        <div style={{ marginTop: "16px" }}>
          <GMButton text="Create Task" onClick={() => handleAddNewTask()} />
        </div>
      </div>
    </div>
  );
};

export default Modal;
