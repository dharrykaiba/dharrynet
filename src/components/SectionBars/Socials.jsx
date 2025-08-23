import React from "react";
import "../SectionBars/Socials.css";
import { socialLinks } from "./links";

const Socials = () => {
  return (
    <div className="header__socials">
      {socialLinks.map(({ id, url, icon, label }) => (
        <a
          key={id}
          href={url}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
        >
          {icon}
        </a>
      ))}
    </div>
  );
};

export default Socials;
