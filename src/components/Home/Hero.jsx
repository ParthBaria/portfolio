import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import { FaHtml5, FaCss3Alt, FaGit, FaGithub } from "react-icons/fa";
import { SiJavascript, SiNodedotjs, SiReact } from "react-icons/si";

import cowroking from "../../assets/coworking-31.png";

const skills = [
  { name: "HTML5", icon: <FaHtml5 /> },
  { name: "CSS", icon: <FaCss3Alt /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "React", icon: <SiReact /> },
  { name: "Git", icon: <FaGit /> },
  { name: "GitHub", icon: <FaGithub /> },
];

const Hero = () => {
  const navigate = useNavigate();
  const skillRef = useRef(null);
  const lineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);
  const [loaded, setLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start end", "end start"],
  });
  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const skillItems = skillRef.current.querySelectorAll("li");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute("data-index");
          if (entry.isIntersecting) {
            setVisibleItems((prev) =>
              prev.includes(id) ? prev : [...prev, id]
            );
          }
        });
      },
      {
        root: null, // observe relative to viewport
        threshold: 0.5, // trigger when 50% of li visible
      }
    );

    skillItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const goToProjects = () => {
    navigate("/projects");
  };

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1DW4C760mIUFlJrMBsVkdhiuqEmdNTO9h/view?usp=drive_link",
      "_blank"
    );
  };

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-text">
          <h3>
            Hello<span className=" highlight">.</span>
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
        <div className="cowork-container">
          <img
            src={cowroking}
            loading="lazy"
            alt="cowroking"
            style={{
              filter: loaded ? "blur(0)" : "blur(20px)",
              transition: "filter 0.4s ease",
            }}
            onLoad={() => setLoaded(true)}
          />
        </div>
      </section>

      {/* Skills Bar */}
      <section className="skills" ref={skillRef}>
        <motion.div ref={lineRef} className="scroll-line" style={{ width }} />

        <ul>
          {skills.map((skill, i) => (
            <li
              key={i}
              data-index={i}
              className={visibleItems.includes(String(i)) ? "active" : ""}
            >
              <span className="icon">{skill.icon}</span>
              <span className="text">{skill.name}</span>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Hero;
