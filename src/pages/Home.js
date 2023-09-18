import Hero from "../components/Hero";
import Fetured from "../components/Fetured";
import About from "../components/About";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div className="home ">
      <Hero />
      <Fetured />
      <About />
      <Gallery />
    </div>
  );
};

export default Home;
