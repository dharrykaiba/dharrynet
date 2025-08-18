// src/App.jsx
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

// Estilos globales
import "./styles/globals.css";

// Views
import HomeView from "./views/HomeView";

function App() {
  return (
    <Router>
      <Routes>
        {/* Ruta principal */}
        <Route path="/" element={<HomeView />} />

        {/* 🚀 Aquí puedes agregar más rutas en el futuro */}
        {/* <Route path="/about" element={<AboutView />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
