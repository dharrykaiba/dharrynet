// src/App.jsx
import React from "react";
import { HashRouter as Router } from "react-router-dom";

import Routes from "./routes/routes";
import AnalyticsTracker from "./components/AnalyticsTracker";

function App() {
  return (
    <Router>
      <AnalyticsTracker />
      <Routes />
    </Router>
  );
}

export default App;
