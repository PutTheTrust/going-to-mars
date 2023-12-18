import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Sidebar from "../components/Sidebar/Sidebar";
import Tasks from "../components/Tasks/Tasks";

// import "./Home.css";

const Home = () => {
  return (
    <div className="home">
      <Header />
      <Hero />
      <Sidebar />
      <Tasks />
    </div>
  );
};

export default Home;
