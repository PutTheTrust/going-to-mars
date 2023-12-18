import { useState } from "react";
import GMButton from "../GMButton/GMButton";
import GMInput from "../GMInput/GMInput";
import "./Modal.css";

const Modal = ({ setIsOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [assigned, setAssigned] = useState("");
  return (
    <div className="modal" onClick={setIsOpen}>
      <div className="modal__content">
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
          <GMButton text="Create Task" />
        </div>
      </div>
    </div>
  );
};

export default Modal;
