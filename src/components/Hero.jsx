import { useEffect, useState } from "react";
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from "react-icons/fi";
import { profile } from "../data/resume";
import "./Hero.css";

const LINES = [
  { prompt: "$", text: "whoami" },
  { prompt: ">", text: profile.name, result: true },
  { prompt: "$", text: "cat role.txt" },
  {
    prompt: ">",
    text: "Junior Software Developer · MERN Stack Developer",
    result: true,
  },
  { prompt: "$", text: "node status.js" },
  { prompt: ">", text: "available for opportunities ✓", result: true, accent: true },
];

function useTypedLines(lines) {
  const [visibleCount, setVisibleCount] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    let lineIndex = 0;
    let charIndex = 0;
    let cancelled = false;

    function typeNextChar() {
      if (cancelled || lineIndex >= lines.length) return;
      const line = lines[lineIndex];

      if (charIndex <= line.text.length) {
        setCurrentText(line.text.slice(0, charIndex));
        charIndex += 1;
        const speed = line.result ? 22 : 45;
        setTimeout(typeNextChar, speed);
      } else {
        setVisibleCount((v) => v + 1);
        lineIndex += 1;
        charIndex = 0;
        setCurrentText("");
        setTimeout(typeNextChar, 260);
      }
    }

    const start = setTimeout(typeNextChar, 500);
    return () => {
      cancelled = true;
      clearTimeout(start);
    };
  }, [lines]);

  return { visibleCount, currentText };
}

export default function Hero() {
  const { visibleCount, currentText } = useTypedLines(LINES);
  const activeLine = LINES[visibleCount];

  return (
    <section id="home" className="hero">
      <div className="container hero-inner">
        <div className="hero-copy">
          <p className="hero-greeting">Hi, I&rsquo;m {profile.name}</p>
          <h1 className="hero-heading">
            Junior Software Developer <span className="hero-heading-divider">|</span> MERN
            Stack Developer
          </h1>
          <p className="hero-text">
            An aspiring software developer with hands-on experience in React.js,
            Node.js, Express.js, MongoDB, JavaScript and responsive web
            development.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="btn btn-primary">
              View My Projects
            </a>
            <a href={profile.resumeFile} download className="btn btn-secondary">
              Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost">
              Contact Me →
            </a>
          </div>

          <div className="hero-socials">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
            >
              <FiGithub />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
            >
              <FiLinkedin />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <div className="window hero-terminal">
            <div className="window-bar">
              <span className="window-dot red" />
              <span className="window-dot yellow" />
              <span className="window-dot green" />
              <span className="window-path">~/medolin/introduce.sh</span>
            </div>
            <div className="hero-terminal-body">
              {LINES.slice(0, visibleCount).map((line, i) => (
                <p
                  key={i}
                  className={`hero-terminal-line ${line.accent ? "is-accent" : ""}`}
                >
                  <span className="hero-terminal-prompt">{line.prompt}</span>
                  {line.text}
                </p>
              ))}
              {activeLine && (
                <p
                  className={`hero-terminal-line ${
                    activeLine.accent ? "is-accent" : ""
                  }`}
                >
                  <span className="hero-terminal-prompt">{activeLine.prompt}</span>
                  {currentText}
                  <span className="hero-cursor" />
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      <a href="#about" className="hero-scroll-cue" aria-label="Scroll to About">
        <FiArrowDown />
      </a>
    </section>
  );
}