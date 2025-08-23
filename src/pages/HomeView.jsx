// src/pages/HomeView.jsx
import React from "react";
import "../styles/HomeView.css";

// Importa los componentes que usabas en App
import Intro from "../components/intro/Intro";
import Navbar from "../components/SectionBars/Navbar";
 import About from "../components/about/About";
// import Experience from "../components/experience/Experience";
// import Services from "../components/services/Services";
// import Portfolio from "../components/portfolio/Portfolio";
// import Testimonials from "../components/testimonials/Testimonials";
// import Contact from "../components/contact/Contact";
import Footer from "../components/SectionBars/Footer";

const HomeView = () => {
  return (
     <div className="homeView">
      {/* Encabezado */}
      <Intro />

      {/* Barra de navegación */}
      <Navbar />

      {/* Sección Acerca de mí */}
      <About />

      {/* Sección de Experiencia */}
      {/* <Experience /> */}

      {/* Sección de Servicios */}
      {/* <Services /> */}

      {/* Sección de Portafolio */}
      {/* <Portfolio /> */}

      {/* Sección de Testimonios */}
      {/* <Testimonials /> */}

      {/* Sección de Contacto */}
      {/* <Contact /> */}

      {/* Pie de página */}
      <Footer />
    </div>
  );
};

export default HomeView;
