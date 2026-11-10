import { useState } from "react";
import emailjs from "@emailjs/browser";
import {
  FiMail,
  FiPhone,
  FiLinkedin,
  FiGithub,
  FiSend,
  FiCopy,
  FiCheck,
} from "react-icons/fi";
import { profile } from "../data/resume";
import Toast from "./Toast";
import useReveal from "../hooks/useReveal";
import "./Contact.css";

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

// TEMPORARY DEBUG LOG — remove this once the contact form is confirmed working.
// Open the browser console (F12) and reload the page: this prints on load,
// no need to submit the form. If you see undefined for any value, the .env
// file is not being picked up by the dev server / build.
console.log("EmailJS env check:", {
  service: EMAILJS_SERVICE_ID,
  template: EMAILJS_TEMPLATE_ID,
  key: EMAILJS_PUBLIC_KEY,
});

const initialForm = { name: "", email: "", subject: "", message: "" };

function validate(form) {
  const errors = {};
  if (!form.name.trim()) errors.name = "Name is required.";
  if (!form.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.subject.trim()) errors.subject = "Subject is required.";
  if (!form.message.trim()) {
    errors.message = "Message is required.";
  } else if (form.message.trim().length < 10) {
    errors.message = "Message should be at least 10 characters.";
  }
  return errors;
}

const contactLinks = [
  { icon: <FiMail />, label: profile.email, href: `mailto:${profile.email}`, copy: true },
  { icon: <FiPhone />, label: profile.phone, href: `tel:+91${profile.phone}` },
  { icon: <FiLinkedin />, label: profile.linkedinLabel, href: profile.linkedin },
  { icon: <FiGithub />, label: profile.githubLabel, href: profile.github },
];

export default function Contact() {
  const ref = useReveal();
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState(null);
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(profile.email);
      } else {
        // Fallback for older browsers
        const input = document.createElement("textarea");
        input.value = profile.email;
        input.style.position = "fixed";
        input.style.opacity = "0";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      setToast({ type: "success", message: "Email address copied to clipboard." });
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setToast({
        type: "error",
        message: `Could not copy. My email is ${profile.email}`,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) return;

    if (!EMAILJS_SERVICE_ID || !EMAILJS_TEMPLATE_ID || !EMAILJS_PUBLIC_KEY) {
      setToast({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      });
      // eslint-disable-next-line no-console
      console.warn(
        "EmailJS is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID and VITE_EMAILJS_PUBLIC_KEY to your .env file."
      );
      return;
    }

    setSending(true);
    try {
      const result = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
          to_email: profile.email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      );

      // TEMPORARY DEBUG LOG — remove once confirmed working.
      console.log("EmailJS send success:", result);

      setToast({
        type: "success",
        message: "Message sent successfully! I'll get back to you soon.",
      });
      setForm(initialForm);
    } catch (err) {
      // TEMPORARY DEBUG LOG — this is the important one. Whatever prints
      // here (status + text) tells us exactly what EmailJS rejected.
      console.error("EmailJS send failed:", err);

      setToast({
        type: "error",
        message:
          "Something went wrong. Please try again or contact me directly by email.",
      });
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="section section-alt" ref={ref}>
      <div className="container">
        <div className="section-head reveal">
          <span className="eyebrow">contact</span>
          <h2 className="section-title">Let&rsquo;s work together</h2>
          <p className="section-sub">
            Have a role, project or idea in mind? Send a message and I'll
            reply as soon as I can.
          </p>
        </div>

        <div className="contact-grid">
          <form className="contact-form reveal" onSubmit={handleSubmit} noValidate>
            <div className="form-row">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                aria-invalid={Boolean(errors.name)}
              />
              {errors.name && <p className="form-error">{errors.name}</p>}
            </div>

            <div className="form-row">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@example.com"
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && <p className="form-error">{errors.email}</p>}
            </div>

            <div className="form-row">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                value={form.subject}
                onChange={handleChange}
                placeholder="What's this about?"
                aria-invalid={Boolean(errors.subject)}
              />
              {errors.subject && <p className="form-error">{errors.subject}</p>}
            </div>

            <div className="form-row">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell me a bit about the opportunity or project..."
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && <p className="form-error">{errors.message}</p>}
            </div>

            <button type="submit" className="btn btn-primary contact-submit" disabled={sending}>
              {sending ? "Sending..." : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </button>
          </form>

          <div className="contact-info reveal">
            <div className="window contact-window">
              <div className="window-bar">
                <span className="window-dot red" />
                <span className="window-dot yellow" />
                <span className="window-dot green" />
                <span className="window-path">contact.json</span>
              </div>
              <ul className="contact-links">
                {contactLinks.map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noreferrer">
                      <span className="contact-link-icon">{link.icon}</span>
                      {link.label}
                    </a>
                    {link.copy && (
                      <button
                        type="button"
                        className="contact-copy"
                        onClick={handleCopyEmail}
                        aria-label="Copy email address"
                      >
                        {copied ? <FiCheck /> : <FiCopy />}
                        <span>{copied ? "Copied" : "Copy"}</span>
                      </button>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <Toast toast={toast} onClose={() => setToast(null)} />
    </section>
  );
}