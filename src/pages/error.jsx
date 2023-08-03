import React from "react";
import { NavLink } from "react-router-dom";
import "../style/Error.css";
const error = () => {
  return (
    <div className="error">
      <h1 className="errorTitle">404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <NavLink to="/" className="home">
        Retourner sur la page d’accueil
      </NavLink>
    </div>
  );
};

export default error;
