import React from 'react';
import './Testimonio.css'

function Testimonio (props){
  const dia = "martes";
  const altImagen = `fotografia ${props.name}`;
  return (
    <div className='container-testimonio'>
      <p>hoy es2 {dia}</p>
      <img
          className='imagen-testimonio'
          src={require(`../../../assets/participante-${props.imagen}.jpg`)}
          alt= {altImagen} />
      <div className='container-text-testimonio'>
        <p className='name-testimonio'>{props.name} en {props.city}</p>
        <p className='profesion-testimonio'>{props.profession} en {props.company}</p>
        <p className='text-testimonio'>"{props.testimonio}"</p>
      </div>
    </div>
  );
};

export default Testimonio;