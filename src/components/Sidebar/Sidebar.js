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
      <div>
        <p className="sidebar__tasks">Current use</p>
        <div className="sidebar__tasks-current">
          {tasks.map((task) => (
            <p key={task.id}>{task.title}</p>
          ))}
        </div>
      </div>

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
