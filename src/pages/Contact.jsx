import React from "react";
import "../styles/Contact.scss";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTranslation } from "react-i18next";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <section className="contact-page">
      
      <h1>{t("contact.header")}</h1>

      <p className="email-label">{t("contact.subtext")}</p>
      <a href="mailto:furkanuzumcu053@gmail.com" className="email-link">
        furkanuzumcu053@gmail.com
      </a>

      <div className="social-buttons">
        <a
          href="https://github.com/Furkanuzumcu"
          target="_blank"
          rel="noopener noreferrer"
          className="btn github"
        >
          <FaGithub /> {t("contact.github")}
        </a>
        <a
          href="https://www.linkedin.com/in/furkanuzumcu/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn linkedin"
        >
          <FaLinkedin /> {t("contact.linkedin")}
        </a>
      </div>
    </section>
  );
};

export default Contact;
