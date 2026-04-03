import React, { useState } from "react";
import EmailIcon       from "@mui/icons-material/Email";
import LocationOnIcon  from "@mui/icons-material/LocationOn";
import LinkedInIcon    from "@mui/icons-material/LinkedIn";
import SendIcon        from "@mui/icons-material/Send";
import "../assets/styles/Contact.scss";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: false, email: false, message: false });
  const [sent, setSent] = useState(false);

  const update = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [key]: e.target.value }));

  const handleSend = (e: React.MouseEvent) => {
    e.preventDefault();
    const errs = {
      name:    form.name.trim() === "",
      email:   form.email.trim() === "",
      message: form.message.trim() === "",
    };
    setErrors(errs);

    if (!errs.name && !errs.email && !errs.message) {
      // 👇 Plug in your emailjs call here
      // emailjs.send('service_id', 'template_id', form, 'api_key');
      setSent(true);
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setSent(false), 6000);
    }
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-wrap">
        <div className="section-header" style={{ textAlign: "center" }}>
          <span className="section-label">Get In Touch</span>
          <h1 className="section-title">
            Let's <span className="highlight">Work Together</span>
          </h1>
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

            <ul className="info-details" role="list">
              {[
                { icon: <EmailIcon />,      label: "Email",    value: "emmanuelmatewere@gmail.com", href: "mailto:emmanuelmatewere@gmail.com" },
                { icon: <LocationOnIcon />, label: "Location", value: "Lilongwe, Malawi",           href: null },
                { icon: <LinkedInIcon />,   label: "LinkedIn", value: "View Profile",               href: "https://www.linkedin.com/in/emmanuel-matewere-b5a39218b/" },
              ].map(({ icon, label, value, href }) => (
                <li key={label} className="info-item">
                  <span className="info-icon">{icon}</span>
                  <div>
                    <span className="info-label">{label}</span>
                    {href ? (
                      <a href={href} className="info-value info-link" target="_blank" rel="noreferrer">
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
          <div className="contact-form">
            {sent && (
              <div className="success-toast">
                ✓ Message sent — I'll get back to you soon!
              </div>
            )}

            {(["name", "email"] as const).map((field) => (
              <div className="field" key={field}>
                <label className="field-label">
                  {field === "name" ? "Your Name" : "Email / Phone"} *
                </label>
                <input
                  type="text"
                  className={`field-input ${errors[field] ? "has-error" : ""}`}
                  placeholder={field === "name" ? "What's your name?" : "How can I reach you?"}
                  value={form[field]}
                  onChange={update(field)}
                />
                {errors[field] && (
                  <span className="field-error">
                    Please enter your {field === "name" ? "name" : "email or phone number"}
                  </span>
                )}
              </div>
            ))}

            <div className="field">
              <label className="field-label">Message *</label>
              <textarea
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

            <button className="send-btn" onClick={handleSend}>
              Send Message <SendIcon sx={{ fontSize: 18 }} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
      </div>
    </div>
  );
}

export default Contact;
