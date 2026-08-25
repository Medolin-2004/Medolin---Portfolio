import { FiDownload, FiEye } from "react-icons/fi";
import { profile } from "../data/resume";
import useReveal from "../hooks/useReveal";
import "./Resume.css";

export default function Resume() {
  const ref = useReveal();

  return (
    <section id="resume" className="section" ref={ref}>
      <div className="container">
        <div className="resume-card reveal">
          <div className="resume-card-text">
            <span className="eyebrow">resume</span>
            <h2 className="section-title">Interested in working with me?</h2>
            <p className="resume-desc">
              Download my resume to learn more about my experience, skills
              and projects.
            </p>
          </div>
          <div className="resume-card-actions">
            <a
              href={profile.resumeFile}
              download="Medolin_Christiyana_Resume.pdf"
              className="btn btn-primary"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href={profile.resumeFile}
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary"
            >
              <FiEye /> View Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
