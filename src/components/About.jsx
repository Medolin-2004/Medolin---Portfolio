import { FiCode, FiServer, FiLayers } from "react-icons/fi";
import useReveal from "../hooks/useReveal";
import "./About.css";

const experienceAreas = [
  {
    icon: <FiCode />,
    title: "Responsive interfaces",
    text: "Building clean, accessible UIs with HTML, CSS, JavaScript and React.js.",
  },
  {
    icon: <FiServer />,
    title: "REST APIs & backends",
    text: "Designing and integrating REST APIs with Node.js, Express.js and MongoDB.",
  },
  {
    icon: <FiLayers />,
    title: "Full-stack MERN apps",
    text: "Connecting frontend, backend and database into complete working products.",
  },
];

export default function About() {
  const ref = useReveal();

  return (
    <section id="about" className="section" ref={ref}>
      <div className="container">
        <div className="about-grid">
          <div className="reveal">
            <span className="eyebrow">about</span>
            <h2 className="section-title">Building full-stack products, end to end</h2>
            <p className="about-lead">
              B.Tech Information Technology graduate with hands-on experience in
              software and web application development through internships and
              personal projects. Skilled in JavaScript, Python, HTML, CSS,
              React.js, Node.js and Express.js, with knowledge of SQL
              fundamentals and MongoDB. Experienced in developing application
              features, integrating REST APIs, implementing authentication,
              managing database operations and debugging application issues.
              Familiar with Git, GitHub and software development workflows.
              A quick learner with logical problem-solving skills, adaptability
              and a strong interest in learning new technologies and building
              reliable software solutions.
            </p>

            <div className="about-objective">
              <p className="about-objective-label mono">Career Objective</p>
              <p className="about-objective-text">
                To grow as a skilled software and full-stack developer,
                contributing to impactful products while continuously
                strengthening my expertise across the MERN stack.
              </p>
            </div>
          </div>

          <div className="about-cards reveal">
            {experienceAreas.map((area) => (
              <div className="about-card" key={area.title}>
                <div className="about-card-icon">{area.icon}</div>
                <h3 className="about-card-title">{area.title}</h3>
                <p className="about-card-text">{area.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}