import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Error from "./pages/Error";
import Accomodation from "./pages/Accomodation";
import About from "./pages/About";
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
          <Route path="/a_propos" element={<About />} />
          <Route path="/Logement/:id" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
