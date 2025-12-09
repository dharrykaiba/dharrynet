//src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "../pages/HomeView";
import FS25View from "../pages/FS25View";
import FS25ViewBuy from "../pages/FS25ViewBuy.jsx";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/fs25" element={<FS25View />} />
      <Route path="/fs25buy" element={<FS25ViewBuy />} />
    </Routes>
  );
};

export default AppRouter;
