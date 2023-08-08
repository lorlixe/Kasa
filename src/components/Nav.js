import React from "react";
import "../style/Nav.css";
import logo from "../asset/logo_Kasa.png";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="nav">
      <NavLink to="/" className="home">
        <img className="logo" src={logo} alt="Logo" />
      </NavLink>

      <ul className="menu-nav">
        <NavLink to="/" className="home">
          <li className="option">Accueil</li>
        </NavLink>
        <NavLink to="/a_propos" className="home">
          <li className="option">A Propos</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navbar;
