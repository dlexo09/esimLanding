import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import ActivationPage from "./views/ActivationPage";
import LandingESIM from "./views/LandingESIM";

function App() {
  return (
    <Router basename="/pruebas/eSIM">
      <Routes>
        <Route path="/" element={<ActivationPage />} />
        <Route path="/:token" element={<ActivationPage />} /> {/* <-- Agrega esta línea */}
        <Route path="/esim/:token" element={<LandingESIM />} />
      </Routes>
    </Router>
  );
}

export default App;