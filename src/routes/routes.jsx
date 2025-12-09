// src/routes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import FS25ViewBuy from "../pages/FS25ViewBuy.jsx";

const AppRouter = () => {
  return (
    <Routes>
      {/* Redirigir '/' y '/fs25' hacia '/fs25buy' */}
      <Route path="/" element={<Navigate to="/fs25buy" replace />} />
      <Route path="/fs25" element={<Navigate to="/fs25buy" replace />} />

      {/* Ruta de compra */}
      <Route path="/fs25buy" element={<FS25ViewBuy />} />
    </Routes>
  );
};

export default AppRouter;
