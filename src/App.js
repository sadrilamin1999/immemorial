import { useSmoothSscroll } from "./hooks/smoothScroll";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Fetured from "./components/Fetured";
import About from "./components/About";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";

const App = () => {
  useSmoothSscroll();
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fetured" element={<Fetured />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
