import "./About.css";
import img from "../../assets/presentation-21.png";
import { useState } from "react";
import { motion } from "motion/react";

const About = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <section className="about-v2" id="about">

      {/* =================================================
          HEADER
      ================================================= */}

      <div className="about-top">

        <motion.div
          className="about-index"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.5 }}
        >
          <span>01</span>
          <div />
          <span>ABOUT ME</span>
        </motion.div>

        <motion.p
          className="about-top-note"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          A developer who enjoys turning ideas
          into useful digital experiences.
        </motion.p>

      </div>


      {/* =================================================
          MAIN
      ================================================= */}

      <div className="about-main">

        {/* =================================================
            IMAGE
        ================================================= */}

        <motion.div
          className="about-visual"
          initial={{
            opacity: 0,
            x: -70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <div className="about-image-frame">

            <img
              src={img}
              alt="Parth working on web development"
              className="about-image"
              loading="lazy"
              onLoad={() => setLoaded(true)}
              style={{
                opacity: loaded ? 1 : 0,
              }}
            />

            <div className="about-image-overlay" />

          </div>


          {/* Image metadata */}

          <div className="about-image-meta">

            <span>BASED IN INDIA</span>

            <span>·</span>

            <span>WEB DEVELOPER</span>

          </div>

        </motion.div>


        {/* =================================================
            CONTENT
        ================================================= */}

        <motion.div
          className="about-content"
          initial={{
            opacity: 0,
            x: 70,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          transition={{
            duration: 0.8,
            ease: [0.16, 1, 0.3, 1],
          }}
        >

          <h2>
            Building things
            <br />
            <span>that actually work.</span>
          </h2>


          <div className="about-line" />


          <p className="about-lead">
            I'm a MERN Stack Developer focused on
            building modern, scalable web applications
            from frontend to backend.
          </p>


          <p className="about-text">
            I enjoy working with React, Node.js and
            MongoDB to turn ideas into complete digital
            products. For me, good development isn't
            just about making something function. It's
            about making it fast, intuitive and enjoyable
            to use.
          </p>


          <p className="about-text">
            I'm also interested in understanding what
            happens underneath the interface, from
            JavaScript runtimes and system design to
            application architecture and deployment.
          </p>


          {/* =================================================
              LINKS
          ================================================= */}

          <div className="about-links">

            <a
              href="https://www.linkedin.com/in/parth-baria-bbb563265/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
              <span>↗</span>
            </a>

            <a
              href="https://github.com/ParthBaria"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
              <span>↗</span>
            </a>

          </div>

        </motion.div>

      </div>


      {/* =================================================
          BOTTOM INFORMATION
      ================================================= */}

      <motion.div
        className="about-bottom"
        initial={{
          opacity: 0,
          y: 20,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
          amount: 0.3,
        }}
        transition={{
          duration: 0.6,
        }}
      >

        <div className="about-stat">
          <span className="about-stat-number">MERN</span>
          <span className="about-stat-label">
            Primary Stack
          </span>
        </div>


        <div className="about-stat">
          <span className="about-stat-number">FULL</span>
          <span className="about-stat-label">
            Stack Development
          </span>
        </div>


        <div className="about-stat">
          <span className="about-stat-number">01</span>
          <span className="about-stat-label">
            Developer mindset
          </span>
        </div>


        <div className="about-availability">
          <span className="about-availability-dot" />
          Open to opportunities
        </div>

      </motion.div>

    </section>
  );
};

export default About;