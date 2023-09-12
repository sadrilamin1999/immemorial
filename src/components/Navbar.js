import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar wrapper flex justify-between items-start py-8 px-[4.7rem] lowercase text-[1.5rem]">
      {/* Nav Links */}
      <ul className="links flex flex-col ">
        <Link to="/fetured">Fetured</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
      </ul>
      {/* Logo */}
      <div className="logo">
        <Link to="/">
          <h2 className=" font-[700] text-custom-darker text-[2.2rem]">
            Immemorial
          </h2>
        </Link>
      </div>

      <div className="favourite-link">
        <Link to="/favourites">Favourites</Link>
      </div>
    </nav>
  );
};

export default Navbar;
