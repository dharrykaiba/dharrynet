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
          Una edición completa para comenzar tu aventura agrícola con todo lo necesario para crecer sin límites.
          Incluye el juego base y la expansión “Highlands Fishing Expansion”, además de todos los contenidos
          del Año 1 que se lanzan a lo largo del calendario oficial.
        </p>

        <p>
          <strong>Construye tu imperio agrícola en tres regiones únicas:</strong> un paisaje del sudeste asiático
          con arrozales y terrenos inundables, un mapa norteamericano de grandes espacios abiertos y una región
          centroeuropea rodeada de ríos, estanques y bosques. Cada zona ofrece desafíos distintos, nuevos cultivos
          (como arroz y espinacas) y animales adicionales como los poderosos búfalos.
        </p>

        <p>
          Maneja más de <strong>400 máquinas reales de más de 150 marcas líderes</strong> — CASE IH, John Deere,
          Fendt, Valtra, Massey Ferguson, Kubota y muchas más. Lleva tu granja en solitario o con amigos en
          multijugador, gestionando ganadería, silvicultura, cadenas de producción, misiones de construcción
          y nuevas oportunidades de negocio.
        </p>

        <p>
          <strong>Tecnología renovada:</strong> FS25 estrena el Engine 10 de GIANTS, con mejoras visuales,
          físicas mejoradas, clima dinámico, niebla a distancia, sombras más realistas, terreno deformable
          y un ecosistema más vivo que nunca.
        </p>

        <p>
          <strong>Incluye todo el contenido del Year 1 Season Pass:</strong>
          <ul>
            <li>FS25 – NEXAT Pack</li>
            <li>FS25 – Plains and Prairies Pack</li>
            <li>FS25 – Mercedes-Benz Trucks Pack</li>
            <li>FS25 – Highlands Fishing Expansion</li>
          </ul>
          Recibes cada pack automáticamente al momento de su lanzamiento, ampliando tu experiencia durante todo el año.
        </p>

        <p>
          La expansión Highlands Fishing añade acuicultura, cebollas como nuevo cultivo, ganado de tierras altas,
          más de 20 máquinas adicionales y el mapa costero de Kinlaig inspirado en Escocia: pesca, canales,
          paisajes verdes y una nueva forma de vivir cerca del agua.
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

              <div className="inner-price-action">
                {/* ❌ Precio destacado arriba (no hay precio aquí, solo botón) */}
                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="action-button">
                  Adquirir en la web oficial →
                </a>
              </div>

              <div className="featured-description">{featured.description}</div>

              <div className="inner-price-action">
                {/* ❌ Precio principal comentado */}
                {/* <span className="price">${featured.price}</span> */}

                <a href={featured.link} target="_blank" rel="noopener noreferrer" className="action-button">
                  Adquirir en la web oficial →
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
                    {/* ❌ Precio en otras ediciones */}
                    {/* <span>${item.price}</span> */}

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
                {/* ❌ Precio del Season Pass destacado */}
                {/* <span className="price">${featured.price}</span> */}

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
                    {/* ❌ Precio Season Passes secundarios */}
                    {/* <span>${pass.price}</span> */}

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
