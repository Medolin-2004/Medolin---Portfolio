import { useEffect, useState } from "react";
import { navLinks, profile } from "../data/resume";
import "./Navbar.css";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLinkClick = () => setOpen(false);

  return (
    <header className={`navbar ${scrolled ? "navbar-scrolled" : ""}`}>
      <div className="container navbar-inner">
        <a href="#home" className="navbar-logo" onClick={handleLinkClick}>
          <span className="navbar-logo-bracket">&lt;</span>
          MEDOLIN
          <span className="navbar-logo-bracket">/&gt;</span>
        </a>

        <nav className="navbar-links navbar-links-desktop" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <a
            href={profile.resumeFile}
            download
            className="btn btn-secondary btn-sm navbar-resume-btn"
          >
            Download Resume
          </a>
          <button
            className={`navbar-burger ${open ? "is-open" : ""}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <nav
        className={`navbar-mobile ${open ? "is-open" : ""}`}
        aria-label="Mobile"
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={handleLinkClick}>
            {link.label}
          </a>
        ))}
        <a
          href={profile.resumeFile}
          download
          className="btn btn-primary navbar-mobile-resume"
          onClick={handleLinkClick}
        >
          Download Resume
        </a>
      </nav>
    </header>
  );
}
