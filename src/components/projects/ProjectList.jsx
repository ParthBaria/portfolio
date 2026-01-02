import { useRef } from "react";
import "./ProjectList.css";
import Infoimg from "../../assets/project-image/infostream.png";
import { motion, useScroll, useSpring, useTransform } from "motion/react";
import { FaGithub } from "react-icons/fa";
import { FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Digital Health Card",
    description:
      "A secure MERN-based platform for storing patient medical history, prescriptions, and doctor consultations with strict role-based access control for doctors and patients.",
    tech: ["MongoDB", "Express", "React", "Node.js", "JWT", "RBAC"],
    image: "/projects/health-card.png",
    github: "https://github.com/yourusername/digital-health-card",
    live: "https://digitalhealthcard.vercel.app",
  },

  {
    title: "InfoStream",
    description:
      "A real-time information streaming platform that delivers categorized updates using Redis-backed caching, optimized APIs, and a responsive React frontend for high-performance data consumption.",
    tech: ["React", "Node.js", "Redis", "MongoDB", "REST API", "Caching"],
    image: Infoimg,
    github: "https://github.com/yourusername/infostream",
    live: "https://infostream-523f0.web.app",
  },

  {
    title: "Theft Detection System (IoT)",
    description:
      "An IoT-based security system using NodeMCU and PIR sensors to detect unauthorized motion and trigger real-time alerts through buzzer and notifications.",
    tech: ["IoT", "NodeMCU", "PIR Sensor", "Embedded C"],
    image: "/projects/theft-detection.png",
    github: "https://github.com/yourusername/theft-detection-iot",
    live: "",
  },

  {
    title: "Food Delivery Website",
    description:
      "A responsive food ordering platform featuring menu browsing, cart management, and basic order tracking with a clean UI.",
    tech: ["HTML", "CSS", "JavaScript"],
    image: "/projects/food-delivery.png",
    github: "https://github.com/yourusername/food-delivery-website",
    live: "https://fooddelivery-demo.netlify.app",
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
      <div
        className="project-card image-bg"
        style={{ backgroundImage: `url(${project.image})` }}
      >
        {/* CONTENT OVERLAY */}
        <div className="project-overlay">
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
