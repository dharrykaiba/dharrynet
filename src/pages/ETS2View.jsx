
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ETS2View.css";
import Footer from "../components/SectionBars/Footer";
import LanguageSwitcher from "../components/SectionBars/LanguageSwitcher";
import StreamingStatus from "../components/streamstate/streamstate";
import { useLanguage } from "../i18n/LanguageContext";

const PLAYLIST_URL =
  "https://www.youtube.com/watch?v=03DTx4VteaQ&list=PLMuZGaMwCskM";

const FIRST_EPISODE_URL =
  "https://www.youtube.com/watch?v=03DTx4VteaQ&list=PLMuZGaMwCskM&index=1";

const PLAYLIST_EMBED_URL =
  "https://www.youtube-nocookie.com/embed/videoseries?list=PLMuZGaMwCskM";

export default function ETS2View() {
  const { language, t } = useLanguage();

  const goals = [
    {
      number: "01",
      title: "El primer camión",
      description:
        "Ahorrar nuestros primeros ingresos y dejar de depender de vehículos ajenos.",
      icon: "🚛",
    },
    {
      number: "02",
      title: "Nuestra empresa",
      description:
        "Convertirnos en transportistas independientes y construir una compañía propia.",
      icon: "🏢",
    },
    {
      number: "03",
      title: "Una flota en expansión",
      description:
        "Comprar garajes, contratar conductores y abrir nuevas rutas por Europa.",
      icon: "🌍",
    },
  ];

  return (
    <div className="ets2-page ruta-page">
      <header className="ets2-header">
        <Link
          className="ets2-brand"
          to={`/${language}`}
          aria-label={t("backHome")}
        >
          <span className="ets2-brand-mark">D</span>
          <span>
            <strong>DharryNet</strong>
            <small>Euro Truck Simulator 2</small>
          </span>
        </Link>

        <div className="ets2-header-actions">
          <LanguageSwitcher />
          <StreamingStatus />
        </div>
      </header>

      <main className="ets2-main ruta-main">
        <section className="ruta-hero">
          <div className="ruta-hero-copy">
            <span className="ruta-kicker">
              DIESELDHARRY PRESENTA
            </span>

            <h1>
              LA RUTA
              <span> PERDIDA</span>
            </h1>

            <p className="ruta-subtitle">
              Una historia que se construye kilómetro a kilómetro.
            </p>

            <p className="ruta-intro">
              Llegamos a Milán con <strong>0 € y sin camión propio</strong>.
              Tenemos una oportunidad para comenzar, una primera entrega
              que cumplir y un objetivo: construir nuestra propia empresa
              de transporte y recorrer toda Europa.
            </p>

            <div className="ruta-tags">
              <span>🚛 Progresión desde cero</span>
              <span>🎬 Serie narrativa</span>
              <span>🌍 Viajes por Europa</span>
            </div>

            <div className="ruta-actions">
              <a
                className="ets2-button ets2-button-primary"
                href={PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                ▶ Ver la serie
              </a>

              <a
                className="ets2-button ets2-button-secondary"
                href={FIRST_EPISODE_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Comenzar por el capítulo 1 ↗
              </a>
            </div>

            <p className="ruta-note">
              Sin prisas. Sin saltarnos el camino. Cada viaje cuenta.
            </p>
          </div>

          <div className="ruta-player-wrap">
            <div className="ruta-player-heading">
              <span className="ruta-live-dot" />
              <span>LA SERIE COMPLETA</span>
              <span className="ruta-player-label">YOUTUBE</span>
            </div>

            <div className="ruta-player">
              <iframe
                src={PLAYLIST_EMBED_URL}
                title="La Ruta Perdida — Serie de Euro Truck Simulator 2"
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>

            <div className="ruta-player-footer">
              <span>DieselDharry</span>
              <a
                href={PLAYLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Abrir playlist en YouTube ↗
              </a>
            </div>
          </div>
        </section>

        <section className="ruta-chapter">
          <div className="ruta-chapter-number">
            <span>CAPÍTULO</span>
            <strong>01</strong>
          </div>

          <div className="ruta-chapter-copy">
            <span className="ruta-section-label">
              TODO GRAN VIAJE TIENE UN COMIENZO
            </span>

            <h2>Milán, Italia. Una oportunidad.</h2>

            <p>
              No tenemos dinero, camión, empleados ni una empresa propia.
              Nuestro primer trabajo será como conductor contratado,
              llevando un contenedor de zanahorias de 15,4 toneladas
              a bordo de un Volvo FH16 que todavía no nos pertenece.
            </p>

            <p>
              La primera entrega nos deja <strong>1.182 €</strong>.
              Es poco para construir un imperio, pero suficiente para
              dar el primer paso.
            </p>

            <div className="ruta-chapter-facts">
              <div>
                <span>📍 Ubicación</span>
                <strong>Milán, Italia</strong>
              </div>
              <div>
                <span>📦 Primera carga</span>
                <strong>Zanahorias · 15,4 t</strong>
              </div>
              <div>
                <span>💰 Primeros ingresos</span>
                <strong>1.182 €</strong>
              </div>
            </div>

            <a
              className="ruta-inline-link"
              href={FIRST_EPISODE_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Ver el comienzo de la historia ↗
            </a>
          </div>
        </section>

        <section className="ruta-progression">
          <div className="ruta-section-heading">
            <span className="ruta-section-label">
              NUESTRO OBJETIVO
            </span>
            <h2>De conductor contratado a empresario.</h2>
            <p>
              Nada llegará de golpe. Cada entrega nos acercará un poco
              más a la empresa que queremos construir.
            </p>
          </div>

          <div className="ruta-goals">
            {goals.map((goal) => (
              <article className="ruta-goal-card" key={goal.number}>
                <div className="ruta-goal-top">
                  <span className="ruta-goal-icon">{goal.icon}</span>
                  <span className="ruta-goal-number">{goal.number}</span>
                </div>
                <h3>{goal.title}</h3>
                <p>{goal.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="ruta-cta">
          <div>
            <span className="ruta-section-label">
              LA CARRETERA SERÁ NUESTRA HISTORIA
            </span>
            <h2>El viaje acaba de comenzar.</h2>
            <p>
              Acompáñanos en La Ruta Perdida. Cada capítulo es un nuevo
              viaje, una decisión y un paso más hacia nuestro objetivo.
            </p>
          </div>

          <div className="ruta-cta-actions">
            <a
              className="ets2-button ets2-button-primary"
              href={PLAYLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶ Ver todos los capítulos
            </a>

            <a
              className="ruta-members-link"
              href="https://www.youtube.com/@DieselDharry/join"
              target="_blank"
              rel="noopener noreferrer"
            >
              ❤️ Apoyar el canal
            </a>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
