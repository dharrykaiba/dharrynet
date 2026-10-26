
import React from "react";
import { Link } from "react-router-dom";
import "./intro.css";
import StreamingStatus from "../streamstate/streamstate";
import LanguageSwitcher from "../SectionBars/LanguageSwitcher";
import { useLanguage } from "../../i18n/LanguageContext";

const channels = [
  {
    id: "wow",
    title: "WoW Forever",
    subtitle: "WORLD OF WARCRAFT",
    to: "/wowforever",
  },
  {
    id: "farming",
    title: "Farming Simulator",
    subtitle: "LA ISLA PERDIDA",
    to: "/fs25",
  },
  {
    id: "truck",
    title: "Euro Truck Simulator 2",
    subtitle: "LA RUTA PERDIDA",
    to: "/ets2",
  },
];

const Intro = () => {
  const { language } = useLanguage();

  // Evita generar una ruta sin idioma.
  const currentLanguage = language || "es";

  return (
    <header className="hero" id="inicio">
      <div className="header__container">
        <div className="brand">
          <div className="brand__identity">
            <div className="brand__name">
              Dharry<span>Net</span>
            </div>
          </div>

          
          <StreamingStatus />
          <LanguageSwitcher />
        </div>

        <main
          className="channels"
          aria-label="Canales y proyectos"
        >
          {channels.map((channel) => (
            <Link
              key={channel.id}
              className={`channel channel--${channel.id}`}
              to={`/${currentLanguage}${channel.to}`}
              aria-label={`Entrar a ${channel.title}`}
            >
              <div className="channel__content">
                <span className="channel__subtitle">
                  {channel.subtitle}
                </span>

                <h2 className="channel__title">
                  {channel.title}
                </h2>

                <span
                  className="channel__indicator"
                  aria-hidden="true"
                >
                  <span className="channel__arrow">↗</span>
                </span>
              </div>
            </Link>
          ))}
        </main>
      </div>
    </header>
  );
};

export default Intro;
