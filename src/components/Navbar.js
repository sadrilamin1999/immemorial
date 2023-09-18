import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDownStager } from "../hooks/gsap";

const Navbar = () => {
  const li1 = useRef(null);
  const li2 = useRef(null);
  const li3 = useRef(null);
  const blogRef = useRef(null);
  const logoRef = useRef(null);

  const liArr = [li1, li2, li3];
  const favArr = [blogRef];
  const logoArr = [logoRef];

  useDownStager(liArr, 1);
  useDownStager(logoArr, 1.4);
  useDownStager(favArr, 1.8);

  return (
    <nav className="navbar wrapper flex justify-between items-start py-8 px-[4.7rem] lowercase text-[1.5rem]">
      {/* Nav Links */}
      <ul className="links flex flex-col ">
        <li ref={li1}>
          <Link to="/fetured">Fetured</Link>
        </li>
        <li ref={li2}>
          <Link to="/about">About</Link>
        </li>
        <li ref={li3}>
          <Link to="/gallery">Gallery</Link>
        </li>
      </ul>
      {/* Logo */}
      <div className="logo" ref={logoRef}>
        <Link to="/">
          <h2 className=" font-[700] text-custom-darker text-[2.2rem]">
            Immemorial
          </h2>
        </Link>
      </div>

      <div ref={blogRef} className="favourite-link">
        <Link to="/blog">Blog</Link>
      </div>
    </nav>
  );
};

export default Navbar;
