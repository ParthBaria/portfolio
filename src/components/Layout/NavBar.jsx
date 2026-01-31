import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { FaTimes } from "react-icons/fa";
import { FaBars } from "react-icons/fa";
import { motion, useScroll } from "motion/react";
const NavBar = () => {
  const navLinks = useRef();
  const location = useLocation(); // get current path
  const currentPath = location.pathname;
  const [openMenu, setOpenMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  const menuToggle = () => {
    navLinks.current.classList.toggle("active");

    setOpenMenu((val) => !val);
  };
  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      setIsScrolled(latest > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);
  return (
    <motion.nav
      className="navbar"
      style={{
        backgroundColor: isScrolled ? "#0f172a" : "transparent",
        transition: "background-color 0.3s ease",
      }}
      initial={{
        y: -100,
      }}
      animate={{
        y: 0,
      }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
      }}
    >
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

        <li className={currentPath === "/blogs" ? "active" : ""}>
          <Link
            to="/blogs"
            onClick={() => {
              menuToggle();
            }}
          >
            blogs
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
          <FaBars color="white" />
        </div>
      )}
    </motion.nav>
  );
};

export default NavBar;
