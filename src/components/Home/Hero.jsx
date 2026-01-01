import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "motion/react";
import cowroking from "../../assets/coworking-31.png";
const Hero = () => {
  const navigate = useNavigate();
  const skillRef = useRef(null);
  const lineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState([]);

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
          <img src={cowroking} alt="cowroking" />
        </div>
      </section>

      {/* Skills Bar */}
      <section className="skills" ref={skillRef}>
        <motion.div ref={lineRef} className="scroll-line" style={{ width }} />
        <ul>
          {[
            "HTML5",
            "CSS",
            "JavaScript",
            "Node.js",
            "React",
            "Git",
            "GitHub",
          ].map((skill, i) => (
            <li
              key={i}
              data-index={i}
              className={visibleItems.includes(String(i)) ? "active" : ""}
            >
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Hero;
