import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import FicheLogement from "./pages/FicheLogement";
import APropos from "./pages/APropos";
import Nav from "./components/Nav";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="page">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/a_propos" element={<APropos />} />
          <Route path="/Logement/:id" element={<FicheLogement />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
