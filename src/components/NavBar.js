import React from "react";
import { NavLink } from "./NavLink";
import logoIPN from "../images/IPN-logo.png";
import logocic from "../images/cic-logo.png";
import styles from "../css/NavBar.module.css";

export const NavBar = () => {
  return(
      <header className={ styles.navbar }>
        <div className={ styles.titulo }>
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
        <nav>
          <ul className={ styles.listLinks }>
            <li><NavLink to='/' >Inicio</NavLink></li>
            <li><NavLink to='/Seminario' >Seminario</NavLink></li>
            <li><NavLink to='/reconocimientos' >Reconocimientos</NavLink></li>
            <li><NavLink to='/proyectos' >Proyectos</NavLink></li>
            <li><NavLink to='/alumnos' >Alumnos</NavLink></li>
            <li><NavLink to='/publicaciones' >Publicaciones</NavLink></li>
          </ul>
        </nav>
      </header>
  );
}