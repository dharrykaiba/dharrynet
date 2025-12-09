import React from "react";
import "../styles/FS25Purchase.css";
import Footer from "../components/SectionBars/Footer";
import StreamingStatus from "../components/streamstate/streamstate";

// Importar la imagen local
import fs25SeasonPassImg from "../assets/fs25seasonpass1.png";
import logo from "../assets/logodiesel200.png";

const items = [
  {
    name: "FS25 - Year 1 Season Pass: ¡Tu mejor inicio en Farming Simulator 25!",
    link: "https://www.farming-simulator.com/dlc-detail.php?dlc_id=fs25seasonpass1&code=DIESELD",
    img: fs25SeasonPassImg, // <-- Aquí usamos la imagen local
    description: `
  <p>¡Comienza tu aventura agrícola con todo lo esencial! El <strong>Year 1 Season Pass</strong> es la mejor opción para quienes quieren disfrutar de FS25 al máximo desde el primer día, incluyendo todos los packs oficiales y la gran expansión <strong>Highlands Fishing Expansion</strong>.</p>
  
  <h4>📦 Contenido incluido:</h4>
  <ul>
    <li><strong>NEXAT Pack</strong> – 11 de marzo de 2025: nuevas máquinas y tecnología de cultivo avanzada.</li>
    <li><strong>Plains & Prairies Pack</strong> – 3 de junio de 2025: más de 20 vehículos y herramientas de 3 nuevas marcas para expandir tu granja.</li>
    <li><strong>Mercedes-Benz Trucks Pack</strong> – 9 de septiembre de 2025: 17 camiones y equipos premium para tu operación agrícola.</li>
    <li><strong>Highlands Fishing Expansion</strong> – 4 de noviembre de 2025: explora nuevas áreas, cultiva, pesca y usa más de 38 máquinas.</li>
  </ul>

  <p>✅ Con el <strong>Year 1 Season Pass</strong> ahorras hasta un <strong>25%</strong> comparado con la compra de los contenidos por separado.</p>
  
  <h4>💚 Código de partner GIANTS:</h4>
  <p>Usa el código <strong class="partner-code">DIESELD</strong> al momento de comprar para asegurar que tu compra esté registrada correctamente y apoyar a la comunidad.</p>

  <p><em>Plataformas compatibles: PC (Steam/Epic), Mac OS X.</em></p>
  <p>¡Todo lo que necesitas para disfrutar FS25 de manera completa y optimizada!</p>
`,
    video: "https://www.youtube.com/embed/FM8sMm1RCmA?autoplay=1&mute=1",
    featured: true
  },
];

export default function FS25Purchase() {
  return (
    <div className="fs25-themegreen">
      <header className="fs25purchase-header">
        <div className="logo-title">
          <img src={logo} alt="DieselDharry Logo" className="header-logo" />
          <h1>DieselDharry </h1>
        </div>

        <StreamingStatus />
      </header>
      <main className="fs25purchase-main">
        <section className="fs25-main-section">
          <div className="fs25purchase-grid">
            {items.map((item, i) => (
              <ProductCard key={i} item={item} />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function ProductCard({ item }) {
  const { name, link, img, description, video, featured } = item;
  const wrapperClass = featured ? "featured-wrapper" : "normal-wrapper";

  return (
    <div className={`fs25purchase-card-wrapper ${wrapperClass}`}>
      <div className="fs25purchase-card">
        <div className="fs25-card-content">
          {/* Video solo en destacado */}
          {video && (
            <div className="media-section">
              <div className="video-wrapper">
                <iframe
                  src={video}
                  title={name}
                  frameBorder="0"
                  allow="autoplay; encrypted-media"
                  allowFullScreen
                />
              </div>
            </div>
          )}

          {/* Contenido principal */}
          <div className="info-section">
            <h3>{name}</h3>

            {/* Imagen y botón siempre juntos */}
            <div className="image-button-row">
              {img && <img src={img} alt={name} className="card-image" />}
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="action-button"
              >
                Ver en tienda oficial →
              </a>
            </div>

            {/* Renderiza HTML en la descripción */}
            <div
              className="description-html"
              dangerouslySetInnerHTML={{ __html: description }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}