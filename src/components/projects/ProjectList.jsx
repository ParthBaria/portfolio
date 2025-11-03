import React, { useRef } from "react";
import "./ProjectList.css";
import { motion, useScroll, useSpring, useTransform } from "motion/react";

const projects = [
  {
    title: "Digital Health Card",
    description:
      "A full-stack MERN app that stores patient medical history and doctor consultations securely with role-based access.",
    tech: ["MongoDB", "Express", "React", "Node.js"],
  },
  {
    title: "Theft Detection System (IoT)",
    description:
      "Built using NodeMCU, PIR sensor, and buzzer to detect unauthorized motion and trigger instant alerts.",
    tech: ["IoT", "NodeMCU", "PIR Sensor", "Buzzer"],
  },
  {
    title: "Food Delivery Website",
    description:
      "Responsive web platform for ordering food online with cart management and order tracking.",
    tech: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Skill-Based Learning Platform",
    description:
      "Gamified e-learning site with 1v1 challenges, ranking system, and practical labs for real skill growth.",
    tech: ["React", "Firebase", "Node.js"],
  },
  {
    title: "User Authentication System",
    description:
      "PHP and MySQL-based registration and login system with session handling and secure password storage.",
    tech: ["PHP", "MySQL", "HTML", "CSS"],
  },
];

function ProjectCard({ project, key, index }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [400, -400]);

  return (
    <div className="projectWrapper" ref={ref}>
      <div className="project-card">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tech-list">
          {project.tech.map((t, i) => (
            <li key={i}>{t}</li>
          ))}
        </ul>

        <motion.h2
          style={{ y }}
          className="card-index"
        >{`#00${index}`}</motion.h2>
      </div>
    </div>
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
