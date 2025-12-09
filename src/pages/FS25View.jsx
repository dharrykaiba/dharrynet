import React from "react";
import "../styles/FS25View.css";
import Footer from "../components/SectionBars/Footer";
import StreamingStatus from "../components/streamstate/streamstate";

import defaultImg from "../assets/default.png";
// 📦 Mods
const mods = [
  {
    name: "John Deere 8Rssssssssssssssssss",
    category: "🚜 Tractor",
    img: defaultImg,
    description: "Potente tractor para grandes cultivos con motor de 400 HP."
  },
  {
    name: "Claas Lexion 8900",
    category: "🌾 Cosechadora",
    img: defaultImg,
    description: "Cosechadora de alta capacidad, ideal para grandes campos."
  },
  {
    name: "Krone Big X 1180",
    category: "🌱 Forraje",
    img: defaultImg,
    description: "Picadora de forraje perfecta para maíz y pasto."
  }
];

// 📊 Estado de la granja
const farmStatus = {
  dinero: "💰 125,000 €",
  estado: "🌱 Expansión de cultivos de maíz en progreso"
};

// ▶️ Capítulos
const episodes = [
  {
    title: "Capítulo 1 - Comenzamos la granja",
    link: "https://www.youtube.com/watch?v=-QzLam_03VU&t",
    thumb: "https://img.youtube.com/vi/-QzLam_03VU/mqdefault.jpg"
  },
  {
    title: "Capítulo 2 - Primeras cosechas",
    link: "https://youtube.com/watch?v=ihNnaeUwKeY",
    thumb: "https://img.youtube.com/vi/ihNnaeUwKeY/mqdefault.jpg"
  }
];

function FS25View() {
  return (
    <div className="fs25-theme"> {/* 🔐 Aísla todo el componente */}
      <header className="fs25-header">
        <h1>DieselDharry</h1>
        <StreamingStatus />
      </header>

      <main className="fs25-main">
        {/* Estado */}
        <section className="status-card fs25-status-card">
          <h2>📊 Estado de la granja</h2>
          <p className="dinero fs25-dinero">{farmStatus.dinero}</p>
          <p className="estado fs25-estado">{farmStatus.estado}</p>
        </section>

        {/* Mods */}
        <section>
          <h2>🛠️ Mods destacados</h2>
          <div className="dark-grid fs25-grid">
            {mods.map((mod, i) => (
              <div key={i} className="dark-card fs25-card">
                <img src={mod.img} alt={mod.name} />
                <div className="card-body fs25-card-body">
                  <h3>{mod.name}</h3>
                  <p className="categoria fs25-categoria">{mod.category}</p>
                  <p>{mod.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Episodios */}
        <section>
          <h2>▶️ Últimos capítulos</h2>
          <div className="dark-grid fs25-grid">
            {episodes.map((ep, i) => (
              <a
                key={i}
                href={ep.link}
                target="_blank"
                rel="noopener noreferrer"
                className="dark-card fs25-card fs25-episode"
              >
                <img src={ep.thumb} alt={ep.title} />
                <div className="card-body fs25-card-body">
                  <h3>{ep.title}</h3>
                  <p className="ver-mas fs25-ver-mas">Ver en YouTube →</p>
                </div>
              </a>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default FS25View;
