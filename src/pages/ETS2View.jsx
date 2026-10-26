
import React from "react";
import { Link } from "react-router-dom";
import "../styles/ETS2View.css";
import Footer from "../components/SectionBars/Footer";
import LanguageSwitcher from "../components/SectionBars/LanguageSwitcher";
import StreamingStatus from "../components/streamstate/streamstate";
import { useLanguage } from "../i18n/LanguageContext";

export default function ETS2View() {
  const { language, t } = useLanguage();

  const routes = [
    {
      id: "travel",
      title: t("ets2TravelTitle"),
      category: t("ets2TravelCategory"),
      description: t("ets2TravelDescription"),
      image:
        "https://placehold.co/640x360/222431/1eb85c?text=Rutas+por+Europa",
    },
    {
      id: "trucks",
      title: t("ets2TrucksTitle"),
      category: t("ets2TrucksCategory"),
      description: t("ets2TrucksDescription"),
      image: "https://placehold.co/640x360/272937/c8c9d4?text=Camiones",
    },
    {
      id: "series",
      title: t("ets2SeriesTitle"),
      category: t("ets2SeriesCategory"),
      description: t("ets2SeriesDescription"),
      image:
        "https://placehold.co/640x360/222431/9295b2?text=Proximos+viajes",
    },
  ];

  const scrollToEpisodes = () => {
    document.getElementById("ets2-episodios")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div className="ets2-page">
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

      <main className="ets2-main">
        <section className="ets2-hero">
          <span className="ets2-eyebrow">{t("ets2Eyebrow")}</span>

          <h1>
            {t("ets2HeadlineStart")}{" "}
            <span>{t("ets2HeadlineEnd")}</span>
          </h1>

          <p>{t("ets2Description")}</p>

          <div className="ets2-actions">
            <a
              className="ets2-button ets2-button-primary"
              href="https://youtube.com/@dharrygames"
              target="_blank"
              rel="noopener noreferrer"
            >
              ▶ {t("ets2WatchYoutube")}
            </a>

            <button
              type="button"
              className="ets2-button ets2-button-secondary"
              onClick={scrollToEpisodes}
            >
              {t("ets2ViewEpisodes")}
            </button>
          </div>

          <div className="ets2-stats" aria-label={t("ets2ContentTypes")}>
            <div>
              <strong>{t("ets2Routes")}</strong>
              <span>{t("ets2Europe")}</span>
            </div>
            <div>
              <strong>{t("ets2Trucks")}</strong>
              <span>{t("ets2TruckSetup")}</span>
            </div>
            <div>
              <strong>{t("ets2Series")}</strong>
              <span>{t("ets2EpisodesAdventures")}</span>
            </div>
          </div>
        </section>

        <section className="ets2-section" id="ets2-episodios">
          <div className="ets2-section-heading">
            <div>
              <span className="ets2-eyebrow">
                {t("ets2FeaturedVideos")}
              </span>
              <h2>{t("ets2NextStop")}</h2>
            </div>

            <a
              className="ets2-text-link"
              href="https://youtube.com/@dharrygames"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t("ets2YoutubeChannel")} ↗
            </a>
          </div>

          <div className="ets2-grid">
            {routes.map((route) => (
              <article className="ets2-card" key={route.id}>
                <div className="ets2-card-image">
                  <img src={route.image} alt={route.title} loading="lazy" />
                </div>

                <div className="ets2-card-body">
                  <span className="ets2-card-category">
                    {route.category}
                  </span>
                  <h3>{route.title}</h3>
                  <p>{route.description}</p>
                  <span className="ets2-card-link">
                    {t("ets2WatchVideo")}
                  </span>
                </div>
              </article>
            ))}
          </div>

          <p className="ets2-note">{t("ets2ExampleNote")}</p>
        </section>

        <section className="ets2-bottom-panel">
          <div>
            <span className="ets2-eyebrow">{t("ets2BrandLine")}</span>
            <h2>{t("ets2BottomTitle")}</h2>
            <p>{t("ets2BottomDescription")}</p>
          </div>

          <a
            className="ets2-button ets2-button-primary"
            href="https://youtube.com/@dharrygames"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("ets2JoinJourney")} ↗
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
