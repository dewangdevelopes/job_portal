import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ROUTES } from "./utils/constants";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
