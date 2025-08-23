// src/App.jsx
import React from "react";
import { HashRouter as Router } from "react-router-dom";

// Estilos globales

import Routes from "./routes/routes"; // Importa el archivo de rutas
// Views

function App() {
  return (
    <Router>
      <Routes />
    </Router>
  );
}

export default App;
