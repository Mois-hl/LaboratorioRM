import React from "react";
import styles from '../css/ImageHome.module.css';
import { Example } from "./Example.tsx";

export const ImageHome = ({ imagen, texto }) => {
  return (
    <div className={ styles.fotosLab }>
      <div className='example-container'>
          <Example />
      </div>
      <p>
        {texto}
      </p>
    </div>
  );
}