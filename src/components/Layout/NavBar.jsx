import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import "./NavBar.css"

const NavBar = () => {
  const location = useLocation(); // get current path
  const currentPath = location.pathname;

  return (
    <nav className="navbar">
      <div className="logo">Parth Baria</div>
      <ul className="nav-links">
        <li className={currentPath === "/" ? "active" : ""}>
          <Link to="/">Home</Link>
        </li>
        <li className={currentPath === "/projects" ? "active" : ""}>
          <Link to="/projects">Projects</Link>
        </li>
        <li className={currentPath === "/contact" ? "active" : ""}>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar
