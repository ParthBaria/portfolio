import React, { useEffect, useRef, useState } from "react";
import "./Hero.css";
import { useNavigate } from "react-router-dom";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";

import {
  FaHtml5,
  FaCss3Alt,
  FaGit,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiMongodb,
  SiTypescript,
} from "react-icons/si";

import cowroking from "../../assets/coworking-31.png";


/* =====================================================
   SKILLS
===================================================== */

const skills = [
  {
    name: "React",
    icon: <SiReact />,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
  },
  {
    name: "Node.js",
    icon: <SiNodedotjs />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
  },
  {
    name: "Docker",
    icon: <FaDocker />,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
  },
  {
    name: "CSS",
    icon: <FaCss3Alt />,
  },
  {
    name: "Git",
    icon: <FaGit />,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
  },
];


/* =====================================================
   FLOATING TECHNOLOGIES
===================================================== */

const floatingTech = [
  {
    label: "React",
    position: "tech-react",
  },
  {
    label: "Node.js",
    position: "tech-node",
  },
  {
    label: "MongoDB",
    position: "tech-mongo",
  },
  {
    label: "Docker",
    position: "tech-docker",
  },
];


/* =====================================================
   SCRAMBLE
===================================================== */

const LETTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const ScrambleLetter = ({ char }) => {
  const [display, setDisplay] = useState(char);
  const intervalRef = useRef(null);

  const scramble = () => {
    if (char === " ") return;

    let iterations = 0;

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setDisplay(
        iterations > 7
          ? char
          : LETTERS[Math.floor(Math.random() * LETTERS.length)]
      );

      iterations++;

      if (iterations > 7) {
        clearInterval(intervalRef.current);
        setDisplay(char);
      }
    }, 35);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  if (char === " ") {
    return (
      <span
        style={{
          width: "0.3em",
          display: "inline-block",
        }}
      />
    );
  }

  return (
    <motion.span
      className="hero-scramble-letter"
      onMouseEnter={scramble}
      whileHover={{
        color: "#fb923c",
        y: -4,
      }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 18,
      }}
    >
      {display}
    </motion.span>
  );
};


/* =====================================================
   HERO
===================================================== */

const Hero = () => {
  const navigate = useNavigate();

  const heroRef = useRef(null);

  const [loaded, setLoaded] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  /* ===================================================
     MOUSE PARALLAX
  =================================================== */

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, {
    stiffness: 70,
    damping: 20,
  });

  const smoothY = useSpring(mouseY, {
    stiffness: 70,
    damping: 20,
  });

  const openResume = () => {
    window.open(
      "https://drive.google.com/file/d/1T8puh_ZteyZ-SvPINVFtz8JeETwRO_bF/view?usp=sharing",
      "_blank",
    );
  };

  return (
    <>
      {/* =================================================
          HERO
      ================================================= */}

      <section
        className="hero-v2"
        id="home"
        ref={heroRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >

        {/* Ambient background */}

        <div className="hero-grid" />

        <motion.div
          className="hero-ambient-glow"
          style={{
            x: glowX,
            y: glowY,
          }}
        />

        <div className="hero-orange-glow" />


        {/* =================================================
            LEFT CONTENT
        ================================================= */}

        <div className="hero-v2-content">

          {/* Status */}

          <motion.div
            className="hero-status"
            initial={{
              opacity: 0,
              y: 15,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.5,
            }}
          >
            <span className="status-dot" />

            <span>
              Available for opportunities
            </span>
          </motion.div>


          {/* Intro */}

          <motion.p
            className="hero-intro"
            initial={{
              opacity: 0,
              x: -40,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.1,
            }}
          >
            Hello, I'm
          </motion.p>


          {/* NAME */}

          <motion.h1
            className="hero-name"
            initial={{
              opacity: 0,
              x: -60,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
            onMouseLeave={() => setHoveredIndex(null)}
          >

            {"Parth".split("").map((char, index) => (
              <motion.span
                key={index}
                className="hero-name-letter"
                onMouseEnter={() =>
                  setHoveredIndex(index)
                }
                animate={{
                  scale:
                    hoveredIndex === null
                      ? 1
                      : hoveredIndex === index
                      ? 1.12
                      : 0.94,

                  color:
                    hoveredIndex === index
                      ? "#fb923c"
                      : "#f8fafc",
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 18,
                }}
              >
                {char}
              </motion.span>
            ))}

          </motion.h1>


          {/* PROFESSION */}

          <motion.div
            className="hero-profession"
            initial={{
              opacity: 0,
              x: -50,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
          >

            <span className="profession-light">
              Full-Stack
            </span>

            <span className="profession-bold">
              Developer
            </span>

          </motion.div>


          {/* DESCRIPTION */}

          <motion.p
            className="hero-description"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.45,
            }}
          >
            I build scalable web applications and
            thoughtful digital experiences using modern
            JavaScript technologies.
          </motion.p>


          {/* BUTTONS */}

          <motion.div
            className="hero-v2-buttons"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
              delay: 0.55,
            }}
          >

            <button
              className="hero-btn hero-btn-primary"
              onClick={() => navigate("/projects")}
            >
              <span>Explore my work</span>
              <span className="hero-btn-arrow">
                ↗
              </span>
            </button>


            <button
              className="hero-btn hero-btn-secondary"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/12TWt3RPGidpjmYtTtPLX_A6v5eJOb7pE/view?usp=sharing",
                  "_blank"
                )
              }
            >
              View resume
            </button>

          </motion.div>


          {/* SMALL INFO */}

          <motion.div
            className="hero-mini-info"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.8,
            }}
          >

            <span>
              Based in India
            </span>

            <span className="mini-line" />

            <span>
              Building for the web
            </span>

          </motion.div>

        </div>


        {/* =================================================
            RIGHT VISUAL
        ================================================= */}

        <div className="hero-visual">

          {/* Main purple glow */}

          <motion.div
            className="hero-image-glow"
            style={{
              x: glowX,
              y: glowY,
            }}
          />


          {/* Decorative circle */}

          <div className="hero-orbit hero-orbit-one" />
          <div className="hero-orbit hero-orbit-two" />


          {/* Floating technologies */}

          {floatingTech.map((tech, index) => (
            <motion.div
              key={tech.label}
              className={`floating-tech ${tech.position}`}
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -7, 0],
              }}
              transition={{
                opacity: {
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                },

                scale: {
                  duration: 0.5,
                  delay: 0.8 + index * 0.1,
                },

                y: {
                  duration: 3 + index * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              {tech.label}
            </motion.div>
          ))}


          {/* Image */}

          <motion.div
            className="hero-person"
            style={{
              x: imageX,
              y: imageY,
            }}
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
              delay: 0.25,
              ease: [0.16, 1, 0.3, 1],
            }}
          >

            <img
              src={cowroking}
              alt="Parth"
              loading="eager"
              onLoad={() => setLoaded(true)}
              style={{
                opacity: loaded ? 1 : 0,
              }}
            />

          </motion.div>


          {/* Bottom visual label */}

          <motion.div
            className="hero-visual-label"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 1,
            }}
          >
            <span className="visual-label-number">
              01
            </span>

            <span>
              Developer · Builder · Learner
            </span>
          </motion.div>

        </div>


        {/* =================================================
            SCROLL
        ================================================= */}

        <div className="hero-scroll">

          <span>SCROLL TO EXPLORE</span>

          <div className="scroll-line-v2">
            <motion.div
              animate={{
                y: [0, 22, 0],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

        </div>

      </section>


      {/* =================================================
          TECHNOLOGY STRIP
      ================================================= */}

      <section className="skills-v2">

        <div className="skills-v2-inner">

          <div className="skills-label">
            <span>TECHNOLOGY</span>
            <small>What I work with</small>
          </div>

          <div className="skills-list">

            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="skill-item-v2"
                initial={{
                  opacity: 0,
                  y: 15,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.4,
                }}
                transition={{
                  duration: 0.4,
                  delay: index * 0.05,
                }}
                whileHover={{
                  y: -4,
                }}
              >

                <span className="skill-icon-v2">
                  {skill.icon}
                </span>

                <span>
                  {skill.name}
                </span>

              </motion.div>
            ))}

          </div>

        </div>

      </section>
    </>
  );
};

export default Hero;