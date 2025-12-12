import React from "react";
import "../styles/FS25Purchase.css";
import Footer from "../components/SectionBars/Footer";
import StreamingStatus from "../components/streamstate/streamstate";
import logo from "../assets/logodiesel200.png";


// Imágenes de FS25
import fs25BaseImg from "../assets/fs25/fs25_pc_cover_en_giantsbonus.png";
import fs25Y1BundleImg from "../assets/fs25/Banner_HF_DIESELD.png";
import fs25HighlandsImg from "../assets/fs25/fs25highlandsfishingedition_pc_cover_en_giantsbonus.png";
import fs25SeasonPass1Img from "../assets/fs25/fs25seasonpass1_pc_cover.png";
import fs25SeasonPass2Img from "../assets/fs25/Banner_Y2SP_DIESELD.png";
import fs25SeasonPass2Cover from "../assets/fs25/fs25seasonpass2_pc_cover.png";
import fs25Y1BundleGiantsBonus from "../assets/fs25/fs25y1bundle_pc_cover_giantsbonus.png";
import fs25seasonpass2content1 from "../assets/fs25/fs25seasonpass2-content1.jpg";
import fs25seasonpass1content1 from "../assets/fs25/fs25seasonpass1-content1.jpg";

const mainEditions = [
  {
    name: "Farming Simulator 25 (Juego Base)",
    price: 29.99,
    featured: false,
    link: "https://www.farming-simulator.com/buy-now.php?platform=pcdigital&code=DIESELD",
    img: fs25BaseImg,
    shortDesc: (
      <>
        <p>
          Juego base: un punto de partida para disfrutar la experiencia agrícola y, si lo deseas,
          más adelante sumar expansiones. Explora distintos mapas, cultiva y trabaja
          con maquinaria realista a tu propio ritmo.
        </p>

        <p className="partner-note">
          Si deseas apoyar mi contenido, recuerda usar mi código de partner: <strong>DIESELD</strong>.
        </p>
      </>
    )
  },

  {
    name: "Farming Simulator 25 – Year 1 Bundle",
    price: 59.99,
    featured: true,
    link: "https://www.farming-simulator.com/buy-now.php?platform=pcdigital&code=DIESELD",
    img: fs25Y1BundleImg,
    description: (
      <>
        <div className="featured-description-image">
          <img src={fs25Y1BundleGiantsBonus} alt="Highlands Fishing Edition" />
        </div>

        <p>
          Edición que incluye el juego base y la expansión “Highlands Fishing Expansion”.
          Añade acuicultura, nuevos cultivos (cebollas), ganado de tierras altas,
          más de 20 máquinas nuevas y el mapa de Kinlaig inspirado en Escocia.
        </p>

        <p>
          Explora cuatro mapas globales, cultiva 26 tipos de cultivos,
          gestiona más de 400 máquinas y expande tu granja tanto en tierra como en agua.
          Incluye nuevas marcas: Monosem, Can-Am, Agri-Spread y GT Bunning.
        </p>

        <p className="partner-note">
          Si deseas apoyar mi contenido, recuerda usar mi código de partner: <strong>DIESELD</strong>.
        </p>
      </>
    )
  },

  {
    name: "Farming Simulator 25 Highlands Fishing Edition",
    price: 49.99,
    featured: false,
    link: "https://www.farming-simulator.com/buy-now.php?platform=pcdigital&code=DIESELD",
    img: fs25HighlandsImg,
    shortDesc: (
      <>
        <p>
          Juego base con la expansión Highlands Fishing: explora Kinlaig, un mapa costero único
          con pesca, nuevos cultivos y vida rural junto al agua.
        </p>

        <p className="partner-note">
          Si deseas apoyar mi contenido, recuerda usar mi código de partner: <strong>DIESELD</strong>.
        </p>
      </>
    )
  }
];


const seasonPasses = [
  {
    name: "Year 2 Season Pass",
    price: 34.99,
    featured: true,
    link: "https://www.farming-simulator.com/dlc-detail.php?dlc_id=fs25seasonpass2&code=DIESELD",
    img: fs25SeasonPass2Img,
    description: (
      <>
        <p>
          Season Pass del Año 2: acceso a dos packs (Q1 y Q2 2026) y una gran expansión
          planeada para el cuarto trimestre. El contenido se desbloquea a medida que se lanza.
        </p>

        <div className="featured-description-image">
          <img src={fs25SeasonPass2Cover} alt="Year 2 Season Pass Cover" />
          <img src={fs25seasonpass2content1} alt="Year 2 Content Preview" />
        </div>

        <p>
          Incluye un bono inmediato: el JCB Fastrac Two, el tractor más rápido del mundo.
          Ahorra hasta un 30% comparado con comprar los contenidos por separado.
        </p>

        <p className="partner-note">
          Si deseas apoyar mi contenido, recuerda usar mi código de partner: <strong>DIESELD</strong>.
        </p>
      </>
    )
  },

  {
    name: "Year 1 Season Pass",
    price: 39.99,
    featured: false,
    link: "https://www.farming-simulator.com/dlc-detail.php?dlc_id=fs25seasonpass1&code=DIESELD",
    img: fs25SeasonPass1Img,
    description: (
      <>
        <p>
          Todas las expansiones del Año 1. No incluye el juego base.
        </p>

        <div className="featured-description-image">
          <img src={fs25seasonpass1content1} alt="Year 1 Season Pass Cover" />
        </div>

        <p className="partner-note">
          Si deseas apoyar mi contenido, recuerda usar mi código de partner: <strong>DIESELD</strong>.
        </p>
      </>
    )
  }
];


// Componente para ediciones principales (con destacado)
function MainEditionsCard({ editions }) {
  const featured = editions.find(p => p.featured);
  const others = editions.filter(p => !p.featured);

  return (
    <div className="fs25-unified-card">
      {featured && (
        <div className="featured-inner-card">
          <div className="inner-card-content">
            <div className="inner-card-image">
              <img src={featured.img} alt={featured.name} />
            </div>
            <div className="inner-card-info">
              <div className="featured-badge">★ MEJOR VALOR ★</div>
              <h3>{featured.name}</h3>
              <div className="featured-description">{featured.description}</div>
              <div className="inner-price-action">
                <span className="price">${featured.price}</span>
                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="action-button">
                  Comprar ahora →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {others.length > 0 && (
        <div className="other-options-section">
          <h4>Otras ediciones completas</h4>
          <div className="other-options-grid">
            {others.map((item, i) => (
              <div key={i} className="other-option-card">
                <img src={item.img} alt={item.name} className="other-img" />
                <div className="other-info">
                  <h5>{item.name}</h5>
                  <p>{item.shortDesc}</p>
                  <div className="other-price-action">
                    <span>${item.price}</span>
                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="other-button">
                      Ver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// Componente para Season Passes con soporte de "featured"
function SeasonPassesCard({ passes }) {
  const featured = passes.find(p => p.featured);
  const others = passes.filter(p => !p.featured);

  return (
    <div className="fs25-season-unified-card">
      {featured && (
        <div className="featured-season-card">
          <div className="season-featured-content">
            <div className="season-featured-image">
              <img src={featured.img} alt={featured.name} />
            </div>
            <div className="season-featured-info">
              <div className="featured-badge">★ CONTENIDO EN PROGRESO ★</div>
              <h3>{featured.name}</h3>
              <div className="featured-description">{featured.description}</div>
              <div className="season-price-action">
                <span className="price">${featured.price}</span>
                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="action-button">
                  Reservar ahora →
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {others.length > 0 && (
        <div className="other-seasons-section">
          <h4>Otros Season Passes</h4>
          <div className="other-seasons-grid">
            {others.map((pass, i) => (
              <div key={i} className="other-season-card">
                <img src={pass.img} alt={pass.name} className="other-season-img" />
                <div className="other-season-info">
                  <h5>{pass.name}</h5>
                  <div className="featured-description">{pass.description}</div>
                  <div className="other-season-action">
                    <span>${pass.price}</span>
                    <a href={pass.link} target="_blank" rel="noopener noreferrer" className="other-button">
                      Ver
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function FS25Purchase() {
  return (
    <div className="fs25-themegreen">
      <header className="fs25purchase-header">
        <div className="logo-title">
          <img src={logo} alt="DieselDharry Logo" className="header-logo" />
          <h1>DieselDharry</h1>
        </div>
        <StreamingStatus />
      </header>

      <main className="fs25purchase-main">
        {/* 🔹 Sección 1: Ediciones del juego */}
        <section className="fs25-section">
          <h2 className="section-title">Farming Simulator 25 – Ediciones del Juego</h2>
          <p className="section-description">
            Elige tu versión completa de Farming Simulator 25. Todas incluyen el juego base.
          </p>
          <div className="fs25-section-content">
            <MainEditionsCard editions={mainEditions} />
          </div>
        </section>

        {/* 🔹 Sección 2: Expansiones / Season Passes */}
        <section className="fs25-section">
          <h2 className="section-title">Expansiones y Season Passes</h2>
          <p className="section-description">
            Agrega más contenido a tu juego. Requieren el juego base de Farming Simulator 25.
          </p>
          <div className="fs25-section-content">
            <SeasonPassesCard passes={seasonPasses} />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}