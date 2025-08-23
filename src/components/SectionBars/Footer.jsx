//src/components/SectionBars/Footer.jsx
import React from "react";
import "./footer.css";
import { links, socialLinks } from "./links";

const Footer = () => {
  return (
    <footer className="footer">
      {/* 🔥 Logo / Nombre */}
      <a href="#" className="footer__logo">
        Dharry
      </a>

      {/* 🔗 Links de navegación */}
      <ul className="permalinks">
        {links.map(({ id, label }) => (
          <li key={id}>
            <a href={id}>{label}</a>
          </li>
        ))}
      </ul>

      {/* 🌐 Redes sociales */}
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

      {/* 📄 Copyright */}
      
      <div className="footer__copyright">
        <small>
          &copy; {new Date().getFullYear()} <strong>Dharry</strong>. Todos los
          derechos reservados.
        </small>
      </div>
    </footer>
  );
};

export default Footer;
