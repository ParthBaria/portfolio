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

const nameText = "I am Parth";
const LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

const ScrambleLetter = ({ char }) => {
  const [display, setDisplay] = useState(char);
  const intervalRef = useRef(null);

  const scramble = () => {
    let iterations = 0;
    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplay(
        iterations > 6
          ? char
          : LETTERS[Math.floor(Math.random() * LETTERS.length)]
      );
      iterations++;
      if (iterations > 6) {
        clearInterval(intervalRef.current);
        setDisplay(char);
      }
    }, 30);
  };

  const reset = () => {
    clearInterval(intervalRef.current);
    setDisplay(char);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  if (char === " ") {
    return <span style={{ width: "0.5em" }} />;
  }

  return (
    <motion.span
      onMouseEnter={scramble}
      onMouseLeave={reset}
      whileHover={{ scale: 1.3, color: "#fb923c" }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
      className="inline-block cursor-pointer"
    >
      {display}
    </motion.span>
  );
};

const Hero = () => {
  const navigate = useNavigate();
  const skillRef = useRef(null);

  const [visibleItems, setVisibleItems] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  

  const { scrollYProgress } = useScroll({
    target: skillRef,
    offset: ["start end", "end start"],
  });

  const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const items = skillRef.current.querySelectorAll("li");

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
      { threshold: 0.5 }
    );

    items.forEach((item) => observer.observe(item));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="hero" id="home">
        <div className="hero-text">
          <motion.h3
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            Hello<span className="highlight">.</span>
          </motion.h3>

          {/* NAME */}
          <motion.h1
            initial={{ x: -130 }}
            animate={{ x: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex font-bold cursor-pointer select-none"
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {nameText.split("").map((char, index) => {
              if (char === " ") {
                return <span key={index} style={{ width: "0.6em" }} />;
              }

              return (
                <motion.span
                  key={index}
                  onMouseEnter={() => setHoveredIndex(index)}
                  animate={{
                    scale:
                      hoveredIndex === null
                        ? 1
                        : hoveredIndex === index
                        ? 1.8
                        : 0.75,
                    color:
                      hoveredIndex === index
                        ? "#fb923c"
                        : "#ffffff",
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 280,
                    damping: 16,
                  }}
                >
                  {char}
                </motion.span>
              );
            })}
          </motion.h1>

          {/* SCRAMBLE */}
          <motion.h2
  initial={{ x: -140 }}
  animate={{ x: 0 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="flex select-none"
>
  {"Web Developer".split("").map((char, index) => (
    <ScrambleLetter key={index} char={char} />
  ))}
</motion.h2>


          <motion.div
            className="hero-buttons"
            initial={{ x: -140, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <button className="btn primary" onClick={() => navigate("/projects")}>
              Got a project?
            </button>
            <button
              className="btn secondary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1DW4C760mIUFlJrMBsVkdhiuqEmdNTO9h/view",
                  "_blank"
                )
              }
            >
              My resume
            </button>
          </motion.div>
        </div>

        <motion.div
          className="cowork-container"
          initial={{ x: 100 }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <img
            src={cowroking}
            loading="lazy"
            alt="coworking"
            style={{
              filter: loaded ? "blur(0)" : "blur(20px)",
              transition: "filter 0.4s ease",
            }}
            onLoad={() => setLoaded(true)}
          />
        </motion.div>
      </section>

      <section className="skills" ref={skillRef}>
        <motion.div className="scroll-line" style={{ width }} />
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
