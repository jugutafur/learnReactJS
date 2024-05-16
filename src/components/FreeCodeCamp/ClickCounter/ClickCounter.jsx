import React, { useState } from 'react';
import FreeCodeCampLogo from '../../../assets/FreeCodeCamp.png';
import Boton from './Boton';
import './ClickCounter.css'
import Counter from './Counter';

export function ClickCounter () {
  const [click, setClik] = useState(0);

  const manejarClick = () => {
    console.log('click desde el metodo manejar click');
    setClik(click +10);
  }
  
  const reiniciarContador = () =>{
    console.log('click desde el metodo Reinicar contador');
    setClik(0);
  }


  return (
    <div className='container-clickCounter'>
      <img
        className='freeCodeCamp-logo'
        src={FreeCodeCampLogo}
        alt='Logo FreeCodeCamp'/>
        <Counter 
          numClicks={click}
        />
        <Boton 
          text='Click'
          esBotonDeClick={true}
          manejarClick={manejarClick}/>
        <Boton 
          text='Reiniciar'
          esBotonDeClick={false}
          manejarClick={reiniciarContador}/>
        <p>Desde ClickCounter</p>
    </div>
  );
}
