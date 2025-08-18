//src/routes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomeView from "../pages/HomeView";
import FS25View from "../pages/FS25View";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeView />} />
      <Route path="/fs25" element={<FS25View />} />
    </Routes>
  );
};

export default AppRouter;
