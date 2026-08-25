import { FiAward } from "react-icons/fi";
import { certifications } from "../data/resume";
import useReveal from "../hooks/useReveal";
import "./Certifications.css";

export default function Certifications() {
  const ref = useReveal();

  return (
    <section id="certifications" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">certifications</span>
          <h2 className="section-title">Certifications &amp; training</h2>
        </div>

        <div className="cert-grid">
          {certifications.map((cert) => (
            <div className="cert-card reveal" key={cert.title}>
              <div className="cert-icon">
                <FiAward />
              </div>
              <h3 className="cert-title">{cert.title}</h3>
              <p className="cert-org">{cert.org}</p>
              <p className="cert-desc">{cert.description}</p>
              {cert.tech && (
                <div className="cert-tech">
                  {cert.tech.map((t) => (
                    <span key={t} className="project-tech-pill mono">
                      {t}
                    </span>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
