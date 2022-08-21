import { useState } from 'react'
import { ImagesLab } from './ImagesLab'
import fotos from '../data/image-data'
import styles from '../css/ListImages.module.css'

export default function LisImages() {
  const[pagina, setPagina] = useState(2)

  const handleMoreContent = () => {
    setPagina(pagina+2)
  }

  const handleLessContent = () => {
    setPagina(pagina-2)
  }

  return (
    <>
      {
        fotos.slice(0,pagina).map((row) => 
          <ImagesLab 
            titulo= {row.titulo}
            fecha={row.fecha}
            imagenes={row.imagenes}
          />
        )
      }
      <div style={{display: 'flex', justifyContent: 'center'}}>
        <button disabled={pagina<=2} className={styles.botonVerMas} onClick={handleLessContent}>ver menos</button>
        <button disabled={pagina>=fotos.length} className={styles.botonVerMas} onClick={handleMoreContent}>ver más</button>
      </div>
    </>
  )
}