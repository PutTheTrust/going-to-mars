import { useSelector } from "react-redux";

import GMButton from "../GMButton/GMButton";
import "./Sidebar.css";

const Sidebar = () => {
  const tasks = useSelector((state) => state.tasks);
  return (
    <aside className="sidebar">
      {/* TODO */}
      <p className="sidebar__tasks">Current use</p>

      <p className="sidebar__tasks">Number of tasks ({tasks.length})</p>

      {/* TODO */}
      <GMButton text="Delete All Tasks" />
    </aside>
  );
};

export default Sidebar;
