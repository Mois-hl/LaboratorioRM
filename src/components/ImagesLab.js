import React from "react";
import styles from '../css/ImageLab.module.css';
import { Slider } from "./Slider";

export const ImageHome = ({ texto }) => {
  return (
    <div className={ styles.fotosLab }>
      <div className='example-container'>
          <Slider />
      </div>
      <div className={ styles.textoFotos }>
        <p>
          {texto}
        </p>
        <p style={{ alignSelf: 'flex-end' }}>
          <strong>fecha de hoy</strong>
        </p>
      </div>
    </div>
  );
}