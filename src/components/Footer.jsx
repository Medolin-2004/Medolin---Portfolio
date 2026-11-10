import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { profile } from "../data/resume";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-tagline mono">
            Junior Software Developer | MERN Stack Developer
          </p>
        </div>

        <div className="footer-socials">
          <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub">
            <FiGithub />
          </a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FiLinkedin />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <FiMail />
          </a>
        </div>
      </div>
      <div className="container">
        <p className="footer-copyright">
          © 2026 {profile.name}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}