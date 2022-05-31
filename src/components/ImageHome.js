import React from "react";

const ImageElement = ({ imagen }) => {
 return( <img
    src={require(`../images/flrm${imagen}.jpg`)}
    alt='Foto del laboratorio'
  />);
}

const TextElement = () => {
  return (<p style={{ textAlign: 'center', fontSize: 20, padding: 25, background: '#fff', borderRadius: 10, marginLeft: 40 }}>
  Presentación del Laboratorio de Robótica y Mecatrónica en el OpenLabs-CIC, 8 de noviembre 2019.
  </p>);
}

export const ImageHome = ({ imagen }) => {
  return (
    <div style={{ display: "flex", alignItems: 'center', marginBottom: 30 }}>
      <ImageElement imagen={imagen} />
      <TextElement />
    </div>
  );
}