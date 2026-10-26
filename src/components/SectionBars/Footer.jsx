
import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { socialLinks } from "./links";
import { useLanguage } from "../../i18n/LanguageContext";

const Footer = () => {
  const { language, t } = useLanguage();

  return (
    <footer className="footer">
      <Link to={`/${language}`} className="footer__logo">
        Dharry
      </Link>

      <ul className="permalinks">
        <li>
          <Link to={`/${language}`}>{t("home")}</Link>
        </li>
      </ul>

      <div className="footer__socials">
        {socialLinks.map(({ id, url, icon, label }) => (
          <a
            key={id}
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
          >
            {icon}
          </a>
        ))}
      </div>

      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()}{" "}
          <strong>Dharry</strong>. {t("allRightsReserved")}
        </small>
      </div>
    </footer>
  );
};

export default Footer;
