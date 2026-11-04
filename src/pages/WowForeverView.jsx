// src/pages/WowForeverView.jsx

import React from "react";
import { Link } from "react-router-dom";
import "../styles/WowForeverView.css";
import Footer from "../components/SectionBars/Footer";
import StreamingStatus from "../components/streamstate/streamstate";
import { useLanguage } from "../i18n/LanguageContext";
import LanguageSwitcher from "../components/SectionBars/LanguageSwitcher";

const YOUTUBE_URL = "https://www.youtube.com/@dharrystats";

export default function WowForeverView() {
  const { language, t } = useLanguage();
  const isSpanish = language === "es";

  const title = (en, es) => (isSpanish ? es : en);

  // Oculta la imagen si no existe, sin romper el layout
  const hideOnError = (e) => { e.currentTarget.style.display = "none"; };

  return (
    <div className="wowforever-page">

      <header className="wowforever-header">
        <Link
          className="wowforever-brand"
          to={`/${language}`}
          aria-label={t("backHome")}
        >
          {/* 👇 TU LOGO AQUÍ */}
          <img
            className="wowforever-brand-logo"
            src="/dharrystats-logo.png"
            alt="DharryNet"
          // onError={hideOnError}   ← comenta esto
          />
          <span>
            <strong>DharryStats</strong>
            <small>World of Warcraft · Forever</small>
          </span>
        </Link>

        <div className="wowforever-header-status">
          <LanguageSwitcher />
          <StreamingStatus />
        </div>
      </header>

      <main className="wowforever-main">

        {/* HERO */}
        <section className="wf-hero wf-hero-with-video">
          <div className="wf-hero-content">
            <span className="wf-eyebrow">WORLD OF WARCRAFT · FOREVER</span>

            <h1>
              WoW <span>Forever</span>
            </h1>

            <p className="wf-hero-subtitle">
              {title(
                "A new adventure begins in Azeroth.",
                "Una nueva aventura comienza en Azeroth."
              )}
            </p>

            <p className="wf-hero-description">
              {title(
                "We are heading into the world of Forever. One character, one journey, and countless challenges ahead.",
                "Nos adentramos en el mundo de Forever. Un personaje, un camino y numerosos desafíos por delante."
              )}
            </p>

            <a
              className="wf-button"
              href={YOUTUBE_URL}
              target="_blank"
              rel="noreferrer"
            >
              {title("Follow the adventure", "Seguir la aventura")} ↗
            </a>
          </div>

          {/* ===== TARJETA LIVE ÉPICA HORDA ===== */}
          <a
            className="wf-live-card"
            href={YOUTUBE_URL}
            target="_blank"
            rel="noreferrer"
            aria-label={title("Watch live on YouTube", "Ver en vivo en YouTube")}
          >
            {/* Esquinas ornamentales */}
            <span className="wf-corner wf-corner-tl" />
            <span className="wf-corner wf-corner-tr" />
            <span className="wf-corner wf-corner-bl" />
            <span className="wf-corner wf-corner-br" />

            {/* Insignia LIVE */}
            <div className="wf-live-badge">
              <span className="wf-live-dot" />
              LIVE
            </div>

            {/* 👇 LOGO WOW FOREVER COMO SELLO (esquina superior derecha) */}
            <img
              className="wf-live-wow-logo"
              src="/logo-wow-forever.png"
              alt="WoW Forever"
              onError={hideOnError}
            />

            {/* Área del "video" / miniatura */}
            <div className="wf-live-thumb">
              <img
                className="wf-live-thumb-img"
                src="/wowforever.avif"
                alt=""
                onError={hideOnError}
              />
              <span className="wf-live-runes">ᛚ ᛟ ᚲ ᛏ ᚨ ᚱ</span>
              <span className="wf-live-play">▶</span>
            </div>

            {/* Pie de la tarjeta */}
            <div className="wf-live-info">
              <strong>{title("WoW Forever · Live", "WoW Forever · En vivo")}</strong>
              <span className="wf-live-horde">FOR THE HORDE</span>
              <span className="wf-live-hint">
                {title("Click to watch on YouTube", "Haz clic para ver en YouTube")} ↗
              </span>
            </div>
          </a>
        </section>

        {/* OUR JOURNEY */}
        <section className="wf-journey">
          <span className="wf-eyebrow">
            {title("THE JOURNEY", "EL CAMINO")}
          </span>

          <h2>
            {title(
              "A tank's journey begins.",
              "Comienza el camino de un tanque."
            )}
          </h2>

          <p>
            {title(
              "Our goal is to grow as a Protection Warrior, explore Azeroth, face dungeon challenges, and become a reliable shield for our group.",
              "Nuestro objetivo es crecer como Guerrero Protección, explorar Azeroth, afrontar los desafíos de las mazmorras y convertirnos en un escudo confiable para nuestro grupo."
            )}
          </p>

          <div className="wf-goals">
            <article>
              <span>01</span>
              <h3>{title("Leveling", "Progresión")}</h3>
              <p>
                {title(
                  "Build our character and learn the path of protection.",
                  "Desarrollar nuestro personaje y aprender el camino de la protección."
                )}
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>{title("Dungeons", "Mazmorras")}</h3>
              <p>
                {title(
                  "Lead the way and protect our companions.",
                  "Abrir camino y proteger a nuestros compañeros."
                )}
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>{title("Adventure", "Aventura")}</h3>
              <p>
                {title(
                  "Discover what WoW Forever has waiting for us.",
                  "Descubrir todo lo que WoW Forever tiene preparado."
                )}
              </p>
            </article>
          </div>
        </section>

        {/* CLOSING */}
        <section className="wf-closing">
          <span>DHARRYNET · WOW FOREVER</span>

          <h2>
            {title(
              "The Horde needs a shield.",
              "La Horda necesita un escudo."
            )}
          </h2>

          <p>
            {title(
              "And our journey starts here.",
              "Y nuestra aventura comienza aquí."
            )}
          </p>
        </section>

      </main>

      <Footer />

      {/* ===== AVISO LEGAL AL PIE ===== */}
      <div className="wf-legal">
        {title(
          "© WoW Forever. All rights reserved. World of Warcraft is a trademark of Blizzard Entertainment.",
          "© WoW Forever. Todos los derechos reservados. World of Warcraft es una marca registrada de Blizzard Entertainment."
        )}
      </div>

    </div>
  );
}