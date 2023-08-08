import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";
import APropos from "./pages/APropos";

import "../src/style/index.css";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/a_propos" element={<APropos />} />
      <Route path="/Logement/:id" element={<FicheLogement />} />
      <Route path="*" element={<Error />} />
    </Routes>
  );
};

export default App;
