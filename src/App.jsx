// Importamos React (necesario para trabajar con JSX)
import React from "react";

// Importamos los estilos globales
import "./styles/globals.css";

// Importamos los componentes de la aplicación
import Intro from "./components/intro/Intro";
import Navbar from "./components/SectionBars/Navbar";
// import About from "./components/about/About";
// import Experience from "./components/experience/Experience";
// import Services from "./components/services/Services";
// import Portfolio from "./components/portfolio/Portfolio";
// import Testimonials from "./components/testimonials/Testimonials";
// import Contact from "./components/contact/Contact";
import Footer from "./components/SectionBars/Footer";

// Componente principal de la aplicación
function App() {
  return (
    <>
      {/* Encabezado */}
      <Intro />

      {/* Barra de navegación */}
      <Navbar />

      {/* Sección Acerca de mí */}
      {/* <About /> */}

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
    </>
  );
}

// Exportamos el componente para que pueda ser usado en otros archivos
export default App;
