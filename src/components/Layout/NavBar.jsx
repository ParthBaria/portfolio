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
          <Link
            to="/"
            onClick={() => {
              menuToggle();
            }}
          >
            Home
          </Link>
        </li>
        <li className={currentPath === "/projects" ? "active" : ""}>
          <Link
            to="/projects"
            onClick={() => {
              menuToggle();
            }}
          >
            Projects
          </Link>
        </li>
        <li className={currentPath === "/Learning" ? "active" : ""}>
          <Link
            to="/Learning"
            onClick={() => {
              menuToggle();
            }}
          >
            Learning
          </Link>
        </li>
        <li className={currentPath === "/contact" ? "active" : ""}>
          <Link
            to="/contact"
            onClick={() => {
              menuToggle();
            }}
          >
            Contact
          </Link>
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
          <FaBars color="white"/>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
