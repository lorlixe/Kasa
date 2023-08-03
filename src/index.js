import React from "react";

import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/";
import Error from "./pages/error";
import Nav from "./components/Nav";
import FicheLogement from "./pages/FicheLogement";
import APropos from "./pages/A-propos/APropos";
import "../src/style/index.css";
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a_propos" element={<APropos />} />
        <Route path="/Logement/:id" element={<FicheLogement />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
