import React from "react";
import "./intro.css";
import Socials from "../SectionBars/Socials";
import StreamingStatus from "../streamstate/streamstate";
import LastProjects from "../SectionBars/LastProjects";
//import UnderConstruction from "../SectionBars/UnderConstruction";

const projects = [
  {
    title: "🎮 Canal Gaming",
    link: "https://youtube.com/@dieseldharry",
  },
  {
    title: "💻 GitHub",
    link: "https://github.com/dharrynet",
  },
  {
    title: "🔒 Seguridad Electrónica",
    link: "https://youtube.com/security",
  },
];

const Header = () => {
  return (
    <header className="hero">
      <div className="container header__container">
        <div className="header__intro">
          <StreamingStatus /> {/* Estado centrado */}
          <p className="tagline">Gaming • Code • Seguridad</p>
        </div>

        <Socials />

        {/* Reemplazo del figure */}
        <LastProjects />

        {/* <UnderConstruction /> */}

        <a
          href="#contact"
          className="scroll__down"
          aria-label="Scroll down to contact section"
        >
          Scroll Down
        </a>
      </div>
    </header>
  );
};

export default Header;
