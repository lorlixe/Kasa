import React from 'react';
import '../style/Nav.css';
import logo from '../asset/logo_Kasa.png';
import { NavLink } from 'react-router-dom';
const Navbar = () => {
   return (
      <div className="nav">
         <img className="logo" src={logo} alt="Logo" />
         <ul>
            <NavLink to="/" className="home">
               <li>Accueil</li>
            </NavLink>
            <NavLink to="/a_propos" className="home">
               <li>A Propos</li>
            </NavLink>
         </ul>
      </div>
   );
};

export default Navbar;
