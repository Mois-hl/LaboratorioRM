import styles from '../css/ImageLab.module.css';
import { Slider } from "./Slider";

export const ImagesLab = ({ titulo, fecha, imagenes }) => {
  return (
    <div className={ styles.fotosLab }>
      <div className='example-container'>
          <Slider 
            images={imagenes}
          />
      </div>
      <p>{titulo} <strong>{fecha}</strong></p>
    </div>
  );
}