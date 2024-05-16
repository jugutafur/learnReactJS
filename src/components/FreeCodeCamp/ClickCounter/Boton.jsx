import React from 'react';
import './ClickCounter.css';

function Boton({text, esBotonDeClick, manejarClick}){
  return (
    <button
      className={ esBotonDeClick ? 'boton-Click' : 'boton-Reiniciar' }
      onClick={manejarClick}>
      {text}
    </button>
  );
}

export default Boton ;