import React from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
const Hero = () => {
    const navigate = useNavigate();

  const goToProjects = () => {
    navigate("/projects"); // navigate to Projects page
  };

  const openResume = () => {
    window.open("https://drive.google.com/file/d/1DW4C760mIUFlJrMBsVkdhiuqEmdNTO9h/view?usp=drive_link", "_blank"); // open resume in new tab
  };
  return (
    <>
      <section className="hero" id="home">
        <div className="hero-text">
          <h3>
            Hello<span className="dot highlight">.</span>
          </h3>
          <h1> I'm Parth</h1>
          <h2>Web Developer</h2>
          <div className="hero-buttons">
            <button className="btn primary" onClick={goToProjects}>
              Got a project?
            </button>
            <button className="btn secondary" onClick={openResume}>
              My resume
            </button>
          </div>
        </div>
      </section>

      {/* Skills Bar */}
      <section className="skills">
        <ul>
          <li>HTML5</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Node.js</li>
          <li>React</li>
          <li>Git</li>
          <li>Github</li>
        </ul>
      </section>
    </>
  );
};

export default Hero;
