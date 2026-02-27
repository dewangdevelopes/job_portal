import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import Home from "./pages/Home";
import OliveLanding from "./pages/OliveLanding";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
        <Route path={ROUTES.OLIVE_LANDING} element={<OliveLanding />} />
      </Routes>
    </Router>
  );
}

export default App;
