import React from "react";
import LogoBlanc from "../asset/LogoBlanc.png";
import "../style/Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <img className="logo-blanc" src={LogoBlanc} alt="logo" />
      <p className="footer-content">© 2020 Kasa.All rights reserved</p>
    </div>
  );
};

export default Footer;
