import { FiGithub, FiExternalLink } from "react-icons/fi";
import { projects } from "../data/resume";
import useReveal from "../hooks/useReveal";
import "./Projects.css";

function ProjectCard({ project }) {
  return (
    <article className={`window project-card reveal ${project.featured ? "is-featured" : ""}`}>
      <div className="window-bar">
        <span className="window-dot red" />
        <span className="window-dot yellow" />
        <span className="window-dot green" />
        <span className="window-path">{project.fileName}</span>
        {project.featured && <span className="project-featured-badge">Featured Project</span>}
      </div>

      <div className="project-card-body">
        <div className="project-card-top">
          <span className="tag">{project.category}</span>
          <h3 className="project-card-title">{project.name}</h3>
          <p className="project-card-desc">{project.description}</p>
        </div>

        <div className="project-card-tech">
          {project.tech.map((t) => (
            <span key={t} className="project-tech-pill mono">
              {t}
            </span>
          ))}
        </div>

        <div className="project-card-features">
          <p className="project-features-label mono">key features</p>
          <ul className="project-features-list">
            {project.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>

        <div className="project-card-actions">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="btn btn-secondary btn-sm"
          >
            <FiGithub /> GitHub
          </a>
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary btn-sm"
          >
            <FiExternalLink /> Live Demo
          </a>
        </div>
      </div>
    </article>
  );
}

export default function Projects() {
  const ref = useReveal();

  return (
    <section id="projects" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">projects</span>
          <h2 className="section-title">Featured projects</h2>
          <p className="section-sub">
            A selection of full-stack and applied-AI projects, from
            production-style MERN applications to my final-year build.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
