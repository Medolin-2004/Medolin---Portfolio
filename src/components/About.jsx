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
              I have hands-on experience across the MERN stack — from
              responsive frontend interfaces to REST APIs and backend
              integrations. My work spans full-stack MERN applications,
              internship projects, and independent builds, with a focus on
              writing code that's clean, maintainable and genuinely functional.
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
