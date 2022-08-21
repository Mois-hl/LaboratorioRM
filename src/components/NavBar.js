import React from "react";
import { NavLink } from "./NavLink";
import logo from "../images/logolabClaro.png";
import styles from "../css/NavBar.module.css";

export const NavBar = () => {
  return(
      <header className={ styles.navbar }>
        <img 
          src={logo}
          alt='logo lab'
          height='70px'
        />
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