import React from 'react';
import Boton from './Boton';

function Calculadora() {
  return (
    <div className='Calculadora'>
      <p>Desde Calculadora</p>
      <Pantalla input={6} />
      <div className='fila'>
        <BotonUno>1</BotonUno>
        <BotonUno>2</BotonUno>
        <BotonUno>3</BotonUno>
        <BotonUno>-</BotonUno>
      </div>
      <div className='fila'>
        <BotonUno>4</BotonUno>
        <BotonUno>5</BotonUno>
        <BotonUno>6</BotonUno>
        <BotonUno>+</BotonUno>
      </div>
      <div className='fila'>
        <BotonUno>7</BotonUno>
        <BotonUno>8</BotonUno>
        <BotonUno>9</BotonUno>
        <BotonUno>/</BotonUno>
      </div>
      <div className='fila'>
        <BotonUno>=</BotonUno>
        <BotonUno>0</BotonUno>
        <BotonUno>.</BotonUno>
        <BotonUno>/</BotonUno>
      </div>
      <div className='fila'>
        <BotonUno>clear</BotonUno>
      </div>
    </div>
  );
}

export default Calculadora;


function BotonUno(props){

  //Con esta funcion determinamos si lo que esta dentro de un boton es un caracter de operador ya que si es asi va a tener un color de fondo verde o si es un numero va a tener un fondo de color blanco
  const esOperador = valor =>{
    return isNaN(valor) && (valor != '.') && (valor != '='); //si todo es cierto devulve un TRUE
  };

  return (
    <div
    className={`boton-calculadora ${esOperador(props.children)? 'operador' : ''}`.trimEnd()}>
      {props.children}
    </div>
  );
}

const Pantalla = ({ input }) =>{
  return (
    <div className='pantalla'>
      {input}
    </div>
  );
}