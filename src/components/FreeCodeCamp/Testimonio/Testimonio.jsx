import React from 'react';
import './Testimonio.css'

function Testimonio (props){
  const dia = "martes";
  return (

    <div className='App'>
      <div className='container-principal'>
        <h1>Esto es lo que dicen nuestros alumnos sobre FreeCodeCamp:</h1>
        
        <p>hoy es {dia}</p>
        <div className='container-testimonio'>
          <img
              className='imagen-testimonio'
              src={require('../../../assets/2.jpg')}
              alt='fotografia 1'
          />
          <div className='container-text-testimonio'>
            <p className='name-testimonio'>{props.name} en {props.city}</p>
            <p className='profesion-testimonio'>{props.profession} en {props.company}</p>
            <p className='text-testimonio'>{props.testimonio}</p>
          </div>
        </div>
      </div>
    </div>    
  );

};

export default Testimonio;
