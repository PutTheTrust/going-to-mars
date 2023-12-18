import GMButton from "../GMButton/GMButton";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      {/* TODO */}
      <p className="sidebar__tasks">Current use</p>

      {/* TODO */}
      <p className="sidebar__tasks">Number of tasks (25)</p>

      {/* TODO */}
      <GMButton text="Delete All Tasks" />
    </aside>
  );
};

export default Sidebar;
