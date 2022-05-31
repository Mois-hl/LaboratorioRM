import { NavLink } from "./NavLink";
import logoIPN from "../images/IPN-logo.png";
import logocic from "../images/cic-logo.png";
import styles from "../css/HomePage.module.css";

export const HomePage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.listLinks}>
            <li><NavLink to='/' >Inicio</NavLink></li>
            <li><NavLink to='/seminario' >Seminario</NavLink></li>
            <li><NavLink to='/reconocimientos' >Reconocimientos</NavLink></li>
            <li><NavLink to='/proyectos' >Proyectos</NavLink></li>
            <li><NavLink to='/alumnos' >Alumnos</NavLink></li>
            <li><NavLink to='/publicaciones' >Publicaciones</NavLink></li>
          </ul>
        </nav>
        <div className={styles.headerContenedor}>
          <div className={styles.headerImages}>
            <img
              style={{ marginRight: 20 }}
              height={90}
              src={logoIPN}
              alt='logo ipn'
            />
            <img
              height={90}
              src={logocic}
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
        <h3 className={styles.homepageSubtitulo}>Fotos del laboratorio</h3>
        <div className={styles.homepageFotos}>
          <img
            src={require('../images/flrm2.jpg')}
            alt='Foto del laboratorio'
          />
            <p style={{ textAlign: 'center', fontSize: 20 }}>
              Presentación del Laboratorio de Robótica y Mecatrónica en el OpenLabs-CIC, 8 de noviembre 2019.
            </p>
        </div>
      </div>
    </>
  );
}