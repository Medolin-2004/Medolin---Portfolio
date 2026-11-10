import {
  FiCode,
  FiServer,
  FiDatabase,
  FiTool,
  FiTerminal,
  FiShield,
  FiCloud,
  FiUploadCloud,
} from "react-icons/fi";
import { skills } from "../data/resume";
import useReveal from "../hooks/useReveal";
import "./Skills.css";

const groupMeta = {
  Programming: { icon: <FiTerminal /> },
  Frontend: { icon: <FiCode /> },
  Backend: { icon: <FiServer /> },
  Databases: { icon: <FiDatabase /> },
  Concepts: { icon: <FiShield /> },
  "Tools & Version Control": { icon: <FiTool /> },
  Cloud: { icon: <FiCloud /> },
  Deployment: { icon: <FiUploadCloud /> },
};

export default function Skills() {
  const ref = useReveal();

  return (
    <section id="skills" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">skills</span>
          <h2 className="section-title">Technical skills</h2>
          <p className="section-sub">
            The languages, frameworks and tools I use to build and ship
            full-stack applications.
          </p>
        </div>

        <div className="skills-grid">
          {Object.entries(skills).map(([group, items]) => (
            <div className="skill-card reveal" key={group}>
              <div className="skill-card-head">
                <span className="skill-card-icon">{groupMeta[group]?.icon}</span>
                <h3 className="skill-card-title">{group}</h3>
              </div>
              <ul className="skill-list">
                {items.map((item) => (
                  <li key={item} className="skill-chip">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}