import AnimatedCard from "./AnimatedCard";
import React, { useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PhoneIcon from "@mui/icons-material/Phone";
import SendIcon from "@mui/icons-material/Send";
import "../assets/styles/Contact.scss";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({
    name: false,
    email: false,
    message: false,
  });
  const [loading, setLoading] = useState(false);
  const timer = React.useRef<ReturnType<typeof setTimeout>>();
  React.useEffect(() => () => clearTimeout(timer.current), []);
  const [sent, setSent] = useState(false);

  const update =
    (key: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    const errs = {
      name: form.name.trim() === "",
      email: form.email.trim() === "",
      message: form.message.trim() === "",
    };
    setErrors(errs);

    if (!errs.name && !errs.email && !errs.message) {
      setLoading(true);
      // No delivery service is configured: hand off to the visitor's email app.
      window.location.href = `mailto:emzomatewere@gmail.com?subject=${encodeURIComponent(`Portfolio enquiry from ${form.name}`)}&body=${encodeURIComponent(`${form.message}\n\nReply to: ${form.email}`)}`;
      timer.current = setTimeout(() => { setLoading(false); setSent(true); }, 650);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <AnimatedCard tilt={false} className="contact-wrap">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">
            Let's <span className="highlight">Work Together</span>
          </h2>
          <p className="section-subtitle">
            Have a project in mind? I'd love to hear about it.
          </p>
        </div>

        <div className="contact-grid">
          {/* ── Info panel ── */}
          <aside className="contact-info">
            <p className="info-intro">
              I'm currently available for freelance projects and full-time
              opportunities. Whether you need a website, a web application, or
              digital strategy — let's connect.
            </p>

            <ul className="info-details">
              {[
                {
                  icon: <EmailIcon />,
                  label: "Email",
                  value: "emzomatewere@gmail.com",
                  href: "mailto:emzomatewere@gmail.com",
                },
                {
                  icon: <LocationOnIcon />,
                  label: "Location",
                  value: "Blantyre Malawi",
                  href: null,
                },
                {
                  icon: <PhoneIcon />,
                  label: "Phone number",
                  value: "+265 994 167 753",
                  href: null,
                },
                {
                  icon: <LinkedInIcon />,
                  label: "LinkedIn",
                  value: "View Profile",
                  href: "https://www.linkedin.com/in/emmanuel-matewere-b5a39218b/",
                },
              ].map(({ icon, label, value, href }) => (
                <li key={label} className="info-item">
                  <span className="info-icon">{icon}</span>
                  <div>
                    <span className="info-label">{label}</span>
                    {href ? (
                      <a
                        href={href}
                        className="info-value info-link"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {value}
                      </a>
                    ) : (
                      <span className="info-value">{value}</span>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <div className="avail-badge">
              <span className="avail-dot" />
              Available for new projects
            </div>
          </aside>

          {/* ── Form ── */}
          <form className="contact-form" onSubmit={handleSend}>
            {sent && (
              <div className="success-toast" role="status">
                Email draft requested. Please send it from your email app.
              </div>
            )}

            {(["name", "email"] as const).map((field) => (
              <div className="field" key={field}>
                <label className="field-label" htmlFor={`contact-${field}`}>
                  {field === "name" ? "Your Name" : "Email / Phone"} *
                </label>
                <input
                  id={`contact-${field}`}
                  type="text"
                  autoComplete={field === "name" ? "name" : "email"}
                  className={`field-input ${errors[field] ? "has-error" : ""}`}
                  placeholder={
                    field === "name"
                      ? "What's your name?"
                      : "How can I reach you?"
                  }
                  value={form[field]}
                  onChange={update(field)}
                />
                {errors[field] && (
                  <span className="field-error">
                    Please enter your{" "}
                    {field === "name" ? "name" : "email or phone number"}
                  </span>
                )}
              </div>
            ))}

            <div className="field">
              <label className="field-label" htmlFor="contact-message">Message *</label>
              <textarea
                id="contact-message"
                className={`field-input field-textarea ${errors.message ? "has-error" : ""}`}
                placeholder="Tell me about your project or idea..."
                rows={6}
                value={form.message}
                onChange={update("message")}
              />
              {errors.message && (
                <span className="field-error">Please enter a message</span>
              )}
            </div>

            <button className="send-btn" type="submit" disabled={loading} aria-busy={loading}>
              {loading ? "Opening email..." : sent ? "Open another draft" : "Send Message"} <SendIcon sx={{ fontSize: 18 }} />
            </button>
          </form>
        </div>
      </AnimatedCard>
    </section>
  );
}

export default Contact;
