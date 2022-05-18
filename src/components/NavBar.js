import React from "react";
import { NavLink } from "./NavLink";
import logoIPN from "../images/IPN-logo.png";
import logocic from "../images/cic-logo.png";

export const NavBar = () => {
  return(
      <header className="navbar-contenedor">
        <div className="navbar-titulo">
        <div>
          <h2>Instituto Politécnico Nacional</h2>
          <p style={{ textAlign: 'center' }}>Centro de Investigación en Computación</p>
          <p style={{ textAlign: 'center' }}>Laboratorio de Robótica y Mecatrónica</p>
        </div>
          <img
            height={60}
            src={logoIPN} 
            alt='logo ipn'
          />
          <img 
            height={60}
            src={logocic} 
            alt='logo ipn'
          />
        </div>
        <nav className="navbar-link">
          <ul>
            <li><NavLink to='/' >Home</NavLink></li>
            <li><NavLink to='/search' >SearchPage</NavLink></li>
            <li><NavLink to='/aboutus' >About us</NavLink></li>
            <li><NavLink to='/contact' >Contact</NavLink></li>
          </ul>
        </nav>
      </header>
  );
}