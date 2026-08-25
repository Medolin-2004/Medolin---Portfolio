import { experience } from "../data/resume";
import useReveal from "../hooks/useReveal";
import "./Experience.css";

export default function Experience() {
  const ref = useReveal();

  return (
    <section id="experience" className="section" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">experience</span>
          <h2 className="section-title">Internship experience</h2>
          <p className="section-sub">
            A timeline of the internships where I've applied and grown my
            MERN stack and frontend skills.
          </p>
        </div>

        <div className="timeline">
          {experience.map((role, index) => (
            <div className="timeline-item reveal" key={role.role}>
              <div className="timeline-marker">
                <span className="timeline-index mono">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="timeline-line" />
              </div>

              <div className="timeline-card">
                <div className="timeline-card-head">
                  <div>
                    <h3 className="timeline-role">{role.role}</h3>
                    <p className="timeline-org">{role.org}</p>
                  </div>
                  <div className="timeline-meta">
                    <span className="tag">{role.duration}</span>
                    <span className="timeline-mode mono">{role.mode}</span>
                  </div>
                </div>

                <ul className="timeline-points">
                  {role.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
