// src/routes/routes.jsx

import React from "react";
import {
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";

import HomeView from "../pages/HomeView.jsx";
import FS25View from "../pages/FS25View.jsx";
import FS25ViewBuy from "../pages/FS25ViewBuy.jsx";
import WowForeverView from "../pages/WowForeverView.jsx";
import ETS2View from "../pages/ETS2View.jsx";

import { LanguageProvider } from "../i18n/LanguageContext";

function LanguageLayout() {
  return (
    <LanguageProvider>
      <Outlet />
    </LanguageProvider>
  );
}

function AppRouter() {
  return (
    <Routes>
      {/* Idioma predeterminado: español */}
      <Route path="/" element={<Navigate to="/es" replace />} />

      <Route path="/:lang" element={<LanguageLayout />}>
        <Route index element={<HomeView />} />

        <Route path="wowforever" element={<WowForeverView />} />

        {/* Conservamos el comportamiento actual de /fs25 */}
        <Route path="fs25" element={<FS25ViewBuy />} />

        {/* Página informativa de FS25 */}
        <Route path="fs25/guia" element={<FS25View />} />

        {/* Rutas de compra según el idioma */}
        <Route path="fs25/comprar" element={<FS25ViewBuy />} />
        <Route path="fs25/buy" element={<FS25ViewBuy />} />

        <Route path="ets2" element={<ETS2View />} />

        <Route
          path="*"
          element={<Navigate to="/es" replace />}
        />
      </Route>

      {/* Idiomas no válidos */}
      <Route path="*" element={<Navigate to="/es" replace />} />
    </Routes>
  );
}

export default AppRouter;