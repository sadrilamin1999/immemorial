import Hero from "../components/Hero";
import Fetured from "../components/Fetured";
import About from "../components/About";

const Home = () => {
  return (
    <div className="home px-[4.7rem]">
      <Hero />
      <Fetured />
      <About />
    </div>
  );
};

export default Home;
