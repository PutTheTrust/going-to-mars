import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import GMButton from "../GMButton/GMButton";
import GMInput from "../GMInput/GMInput";

import close from "../../assets/icon-close.svg";
import { updateTask, getTaskById } from "../../redux/actions";

const UpdateModal = ({ setIsOpen, id }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [creator, setCreator] = useState("");
  const [assigned, setAssigned] = useState("");

  const dispatch = useDispatch();
  const selectedTask = useSelector((state) => state.selectedTask);

  useEffect(() => {
    const fetchTask = async () => {
      await dispatch(getTaskById(id));
    };

    fetchTask();
  }, [dispatch, id]);

  useEffect(() => {
    if (selectedTask) {
      setTitle(selectedTask.title);
      setCreator(selectedTask.createdBy);
      setAssigned(selectedTask.assignedTo);
      setDescription(selectedTask.description);
    }
  }, [selectedTask]);

  const handleUpdateTask = () => {
    if (!title || !description || !creator || !assigned) {
      alert("please fill in all inputs");
      return;
    }

    dispatch(
      updateTask(id, {
        id: id,
        title,
        description,
        createdBy: creator,
        assignedTo: assigned,
      })
    );
    setIsOpen();
  };

  return (
    <div className="modal" data-testid="updateTask">
      <div className="modal__content">
        <div className="modal__content-btn">
          <button onClick={setIsOpen}>
            <img src={close} alt="close" />
          </button>
        </div>

        <h2>Update Task</h2>

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
          <GMButton text="Update Task" onClick={() => handleUpdateTask()} />
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
