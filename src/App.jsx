import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import Home from "./pages/Home";
import OliveLanding from "./pages/OliveLanding";
import ApplicantDashboard from "./pages/ApplicantDashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.OLIVE_LANDING} element={<OliveLanding />} />
        <Route path={ROUTES.APPLICANT} element={<ApplicantDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
