// src/routes/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";

import HomeView from "../pages/HomeView.jsx";
import FS25View from "../pages/FS25View.jsx";
import FS25ViewBuy from "../pages/FS25ViewBuy.jsx";

const AppRouter = () => {
  return (
    <Routes>

      {/* Página principal de DharryNet */}
      <Route path="/" element={<HomeView />} />

      {/* Página de Farming Simulator 25 */}
      <Route path="/fs25" element={<FS25View />} />

      {/* Página de compra de Farming Simulator 25 */}
      <Route path="/fs25buy" element={<FS25ViewBuy />} />

    </Routes>
  );
};

export default AppRouter;