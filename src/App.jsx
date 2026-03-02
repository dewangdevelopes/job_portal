import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import Home from "./pages/Home";
import OliveLanding from "./pages/OliveLanding";
import ApplicantDashboard from "./pages/ApplicantDashboard";
import Organization from "./pages/Organization";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.OLIVE_LANDING} element={<OliveLanding />} />
        <Route path={ROUTES.APPLICANT} element={<ApplicantDashboard />} />
        <Route path={ROUTES.ORGANIZATION} element={<Organization />} />
      </Routes>
    </Router>
  );
}

export default App;
