import React from "react";
import "./style/index.css";

import ReactDOM from "react-dom/client";
import App from "./App";
import Nav from "./components/Nav";

import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="page">
        <Nav />
        <App />
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);
