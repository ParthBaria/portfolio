import { useState, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";

const NavBar = () => {
  const navLinks = useRef();
  const location = useLocation(); // get current path
  const currentPath = location.pathname;
  const [openMenu, setOpenMenu] = useState(false);

  const menuToggle = () => {
    navLinks.current.classList.toggle("active");

    setOpenMenu((val) => !val);
  };
  return (
    <nav className="navbar">
      <div className="logo">Parth Baria</div>
      <ul className="nav-links" ref={navLinks}>
        <li className={currentPath === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={currentPath === "/projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={currentPath === "/Learning" ? "active" : ""}>
          <Link to="/Learning">Learning</Link>
        </li>
        <li className={currentPath === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
        {openMenu && (
          <div
            className="barBtn"
            onClick={() => {
              menuToggle();
            }}
          >
            <FaTimes />
          </div>
        )}
      </ul>
      {!openMenu && (
        <div
          id="menu-toggle"
          className="barBtn"
          onClick={() => {
            menuToggle();
          }}
        >
          <FaBars />
        </div>
      )}
    </nav>
  );
};

export default NavBar;
