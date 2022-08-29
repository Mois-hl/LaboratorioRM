import { NavLink } from "../components/NavLink";
import logoLab from "../images/logoLab.png";
import styles from "../css/HomePage.module.css";
import { useState } from "react";
import LisImages from "../components/ListImages";
import BackToTop from "react-back-to-top-button";
import { AiOutlineArrowUp } from "react-icons/ai";

export const HomePage = () => {
  const [isMenuActive, setMenuActive] = useState(true);

  const handleMenu = () => {
    setMenuActive(isMenuActive ? false : true);
  }

  const ListLinksMenu = () => {
    return(
      <ul className={isMenuActive ? styles.listLinks : undefined }>
        <li><NavLink to='/' >Inicio</NavLink></li>
        <li><a href="/">Seminario</a></li>
        <li><a href="/">Reconocimientos</a></li>
        <li><a href="/">Proyectos</a></li>
        <li><a href="/">Alumnos</a></li>
        <li><a href="/">Publicaciones</a></li>
      </ul>
    );
  }

  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <div className={styles.barsMenu} onClick={handleMenu}>
            <span className={isMenuActive ? styles.activeline1Bars : undefined}></span>
            <span className={isMenuActive ? styles.activeline2Bars : undefined}></span>
            <span className={isMenuActive ? styles.activeline3Bars : undefined}></span>
          </div>
          { isMenuActive && <ListLinksMenu /> }
        </nav>
        <div className={styles.headerContenedor}>
          <div>
            <img
              style={{ marginRight: 20 }}
              height={150}
              src={logoLab}
              alt='logo ipn'
            />
          </div>
          <div className={styles.headerTexto}>
            <h2>Instituto Politécnico Nacional</h2>
            <p>Centro de Investigación en Computación</p>
            <p>Laboratorio de Robótica y Mecatrónica</p>
          </div>
        </div>
      </header>
      <div className={styles.contenedorHomepage}>
        <div className={styles.homepageObjetivos}>
          <h3 className={styles.homepageSubtitulo}>Objetivos del Laboratorio de Robótica y Mecatrónica</h3>
          <ul className={styles.homepageListUl}>
            <li>Generar nuevo conocimiento.</li>
            <li>Aplicar este conocimiento en la solución de problemas teóricos fundamentales.</li>
            <li>Transformar estos conocimientos en soluciones a problemas planteados por los sectores público y privado.</li>
          </ul>
        </div>
        <h3 className={styles.homepageSubtitulo}>Líneas de Investigación</h3>
        <div className={styles.homepageLineas}>
          <div>
            <h4 className={styles.lineasSubtitulo}>Líneas</h4>
            <ul className={styles.homepageListUl}>
              <li>Aprendizaje para máquinas</li>
              <li>Control clásico</li>
              <li>Control difuso</li>
              <li>Cómputo evolutivo</li>
              <li>Cómputo cuántico</li>
              <li>Modelado y control de robots</li>
              <li>Reconocimiento de patrones</li>
              <li>Redes neuronales y memorias asociativas</li>
              <li>Tratamiento y análisis digital de imágenes</li>
              <li>Sensores e instrumentación</li>
              <li>Óptica de adquisición de imagen</li>
            </ul>
          </div>
          <div>
            <h4 className={styles.lineasSubtitulo}>Aplicación</h4>
            <ul className={styles.homepageListUl}>
              <li>Robots móviles</li>
              <li>Drones</li>
              <li>Robots de servicio</li>
              <li>Drones</li>
              <li>Sensores</li>
              <li>Smart cities</li>
            </ul>
          </div>
        </div>
        <h3 className={styles.homepageSubtitulo}>Fotos y proyectos del laboratorio</h3>
        <div className={styles.homepageFotos}>
          <LisImages />
        </div>
        <h3 className={styles.homepageSubtitulo}>Grupo de trabajo</h3>
        <div className={ styles.homepageGrupo }>
          <ul>
            <li><p>Dr. Juan Humberto Sossa Azuela, SNI III,<strong> humbertosossa@gmail.com</strong></p></li>
            <li><p>Dr. Carlos F. Aguilar Ibáñez, SNI II,<strong> carlosaguilari@cic.ipn.mx</strong></p></li>
            <li><p>Dra. Elsa Rubio Espino, SNI I,<strong> erubio@cic.ipn.mx</strong></p></li>
            <li><p>Dr. Erik Zamora, SNI I,<strong> ezamora1981@gmail.com</strong></p></li>
            <li><p>Dr. Jesús Yaljá Montiel Pérez,<strong> yalja@ipn.mx</strong></p></li>
            <li><p>Dr. Ponciano Jorge Escamilla Ambrosio,<strong> pescamillaa@ipn.mx </strong></p></li>
          </ul>
        </div>
      </div>
      <BackToTop
        showOnScrollUp
        showAt={100}
        speed={100}
        easing="easeOutSine"
      >
        <span className={styles.BackToTop}><AiOutlineArrowUp style={{ color: '#fff', fontSize: 30 }} /></span>
      </BackToTop>
      <footer className={ styles.footer}>
        <div>
          <img 
            src={logoLab}
            alt='logo cic'
          />
        </div>
        <div>
          <p>Instituto Politécnico Nacional</p>
          <p>Centro de Investigación en Computación</p>
          <p>Laboratorio de Robótica y Mecatrónica</p>
        </div>
        <div>
          <p><strong>Dirección</strong></p>
          <p>Av. Juan de Dios Bátiz, esq. Miguel Othón de Mendizábal,</p>
          <p>Col.Nueva Industrial Vallejo, Alcaldía Gustavo A. Madero,<br></br> C.P. 07738, CDMX</p>
        </div>
      </footer>
    </>
  );
}