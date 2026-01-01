import React from "react";
import "./About.css";
import img from "../../assets/presentation-21.png";
const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <div className="about-left">
            <img src={img} alt="Web Development Logo" className="profile-img" />
        </div>

        <div className="about-right">
          <h2>About Me</h2>
          <p>
            I’m a MERN Stack Developer passionate about building complete,
            high-performance web applications from front to back. I enjoy
            crafting dynamic user interfaces with React and bringing them to
            life through robust Node.js and MongoDB backends. My goal is to
            create seamless digital experiences that are both functional and
            visually engaging.
            <br />
            <br />I love sharing my knowledge about full-stack development,
            JavaScript, and modern web technologies to help others in the
            developer community. You can find me on{" "}
            <span>
              {" "}
              <a
                href="https://www.linkedin.com/in/parth-baria-bbb563265/"
                target="_blank"
                rel="noreferrer"
                 style={{ textDecoration: "underline" }}
              >
                LinkedIn
              </a>
            </span>{" "}
            and{" "}
            <span>
              <a
                href="https://github.com/ParthBaria"
                target="_blank"
          
                rel="noreferrer"
                style={{ textDecoration: "underline" }}
              >
                GitHub
              </a>
            </span>
            , where I post insights, projects, and technical breakdowns.
            <br />
            <br />
            I’m open to exciting opportunities where I can apply my skills,
            collaborate with creative teams, and continue growing as a
            developer. If you’re looking for someone who can build, optimize,
            and maintain scalable web solutions — let’s connect.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
