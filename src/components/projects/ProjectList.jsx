import { useRef } from "react";
import "./ProjectList.css";
import Infoimg from "../../assets/project-image/infostream.png";
import Digimg from "../../assets/project-image/health-card.png";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { FaGithub, FaImage } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Digital Health Card",
    description:
      "A MERN-based application for managing patient medical records, prescriptions, and doctor consultations. Includes authentication, role-based access control, and secure CRUD operations for doctors and patients.",
    tech: [
      "MongoDB",
      "Express.js",
      "React",
      "Node.js",
      "JWT Authentication",
      "Role-Based Access Control",
    ],
    image: Digimg,
    github: "https://github.com/yourusername/digital-health-card",
    live: "https://digitalhealthcard.vercel.app",
  },

  {
    title: "InfoStream",
    description:
      "A web application for displaying categorized information using REST APIs, featuring optimized API calls and a responsive React frontend for efficient data consumption.",
    tech: ["React", "Node.js", "Express.js", "MongoDB", "REST API"],
    image: Infoimg,
    github: "https://github.com/yourusername/infostream",
    live: "https://infostream-523f0.web.app",
  },

  {
    title: "Theft Detection System (IoT)",
    description:
      "An IoT-based security system that detects motion using a PIR sensor and NodeMCU, triggering alerts through a buzzer for unauthorized access.",
    tech: ["IoT", "NodeMCU (ESP8266)", "PIR Sensor", "Embedded C"],
    image: null,
  },

  {
    title: "Food Delivery Website",
    description:
      "A responsive frontend web application for browsing food menus, managing a cart, and placing orders with a simple and user-friendly interface.",
    tech: ["HTML5", "CSS3", "JavaScript"],
    image: null,
  },
];

function ProjectCard({ project, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [400, -400]);

  return (
    <div className="projectWrapper" ref={ref}>
      <div className="project-card image-bg">
        {/* CONTENT OVERLAY */}
        <div className="project-overlay">
          <div className="img-bg">
            {project.image ? (
              <img src={project.image} alt="" />
            ) : (
              <div className="image-wrapper">
                <FaImage className="image-fallback" />
              </div>
            )}
          </div>
          <div className="project-details">
            <h3>{project.title}</h3>
            <p>{project.description}</p>

            <ul className="tech-list">
              {project.tech.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="image-actions">
          {project.github && (
            <ActionButton
              label="GitHub"
              link={project.github}
              icon={<FaGithub />}
            />
          )}

          {project.live && (
            <ActionButton
              label="Live Demo"
              link={project.live}
              icon={<FaExternalLinkAlt />}
            />
          )}
        </div>
        {/* SCROLL INDEX — UNTOUCHED */}
        <motion.h2 style={{ y }} className="card-index">
          {`#00${index}`}
        </motion.h2>
      </div>
    </div>
  );
}

function ActionButton({ label, link, icon }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="action-btn">
      <span className="icon">{icon}</span>
      <span className="label">{label}</span>
    </a>
  );
}

const ProjectList = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <section className="projects" id="projects" ref={containerRef}>
      <h2>Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} index={index} />
        ))}
      </div>

      <motion.div className="progress-bar" style={{ scaleX }} />
    </section>
  );
};

export default ProjectList;
