import { useDispatch, useSelector } from "react-redux";

import GMButton from "../GMButton/GMButton";
import { deleteAllTasks } from "../../redux/actions";

import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks);

  return (
    <aside className="sidebar">
      {/* TODO */}
      <p className="sidebar__tasks">Current use</p>

      <p data-testid="num-tasks" className="sidebar__tasks">
        Number of tasks ({tasks.length})
      </p>

      {/* TODO */}
      <GMButton
        text="Delete All Tasks"
        onClick={() => dispatch(deleteAllTasks())}
      />
    </aside>
  );
};

export default Sidebar;
