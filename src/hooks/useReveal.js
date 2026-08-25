import { useEffect, useRef } from "react";

/**
 * Adds the `is-visible` class to every `.reveal` element inside the
 * returned ref once it scrolls into view. Respects prefers-reduced-motion
 * implicitly since the CSS transition is disabled at the media-query level.
 */
export default function useReveal() {
  const containerRef = useRef(null);

  useEffect(() => {
    const root = containerRef.current;
    if (!root) return undefined;

    const targets = root.classList.contains("reveal")
      ? [root, ...root.querySelectorAll(".reveal")]
      : [...root.querySelectorAll(".reveal")];

    if (targets.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return containerRef;
}
