import { NavLink } from "../components/NavLink";
import logoIPN from "../images/IPN-logo.png";
import logocic from "../images/cic-logo.png";
import logoLab from "../images/logoLab.png";
import styles from "../css/HomePage.module.css";
import { ImagesLab } from "../components/ImagesLab";

export const HomePage = () => {
  return (
    <>
      <header className={styles.header}>
        <nav className={styles.navbar}>
          <ul className={styles.listLinks}>
            <li><NavLink to='/' >Inicio</NavLink></li>
            <li><a href="/">Seminario</a></li>
            <li><a href="/">Reconocimientos</a></li>
            <li><a href="/">Proyectos</a></li>
            <li><a href="/">Alumnos</a></li>
            <li><a href="/">Publicaciones</a></li>
          </ul>
        </nav>
        <div className={styles.headerContenedor}>
          <div className={styles.headerImages}>
            <img
              style={{ marginRight: 20 }}
              height={110}
              src={logoIPN}
              alt='logo ipn'
            />
            <img
              height={110}
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
        <h3 className={styles.homepageSubtitulo}>Fotos del laboratorio</h3>
        <div className={styles.homepageFotos}>
          <ImagesLab
            titulo='Sistema integral para el monitoreo remoto del estado general de salud de personas y sanitizado desde su hogar,' 
            fecha='30 de mayo 2022.'
            imagenes={[ require('../images/1.jpeg'), require('../images/2.jpeg'), require('../images/3.jpeg'), require('../images/4.jpeg'), require('../images/5.jpeg') ]}
          />
          <ImagesLab
            titulo='Presentación del Laboratorio de Robótica y Mecatrónica en el OpenLabs-CIC,' 
            fecha='8 de noviembre 2019.'
            imagenes={ [require('../images/flrm1.jpg'), require('../images/flrm2.jpg'), require('../images/flrm3.jpg')] }
          />
        </div>
        <h3 className={styles.homepageSubtitulo}>Grupo de trabajo</h3>
        <div className={ styles.homepageGrupo }>
          <ul>
            <li><p>Dr. Juan Humberto Sossa Azuela, SNI III,<span style={{ fontWeight: 'bold' }}> humbertosossa@gmail.com</span></p></li>
            <li><p>Dr. Carlos F. Aguilar Ibáñez, SNI II,<span style={{ fontWeight: 'bold' }}> carlosaguilari@cic.ipn.mx</span></p></li>
            <li><p>Dra. Elsa Rubio Espino, SNI I,<span style={{ fontWeight: 'bold' }}> erubio@cic.ipn.mx</span></p></li>
            <li><p>Dr. Erik Zamora, SNI I,<span style={{ fontWeight: 'bold' }}> ezamora1981@gmail.com</span></p></li>
            <li><p>Dr. Jesús Yaljá Montiel Pérez,<span style={{ fontWeight: 'bold' }}> yalja@ipn.mx</span></p></li>
            <li><p>Dr. Ponciano Jorge Escamilla Ambrosio,<span style={{ fontWeight: 'bold' }}> pescamillaa@ipn.mx </span></p></li>
          </ul>
        </div>
      </div>
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