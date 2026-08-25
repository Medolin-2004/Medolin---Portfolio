import { FiBookOpen } from "react-icons/fi";
import { education } from "../data/resume";
import useReveal from "../hooks/useReveal";
import "./Education.css";

export default function Education() {
  const ref = useReveal();

  return (
    <section id="education" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">education</span>
          <h2 className="section-title">Education</h2>
        </div>

        <div className="education-card reveal">
          <div className="education-icon">
            <FiBookOpen />
          </div>
          <div className="education-content">
            <h3 className="education-degree">{education.degree}</h3>
            <p className="education-institution">{education.institution}</p>
            <div className="education-meta">
              <span className="tag">{education.duration}</span>
              <span className="education-cgpa mono">
                CGPA: {education.cgpa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
