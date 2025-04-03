import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ActivationPage from "./views/ActivationPage";
import LandingESIM from "./views/LandingESIM";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ActivationPage />} />
        <Route path="/esim" element={<LandingESIM />} />
      </Routes>
    </Router>
  );
}

export default App;
