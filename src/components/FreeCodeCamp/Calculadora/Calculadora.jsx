import React from 'react';
import { useState } from 'react';
import { evaluate } from 'mathjs';

function Calculadora() {

  const [input, setInput] = useState('');
  
  const agregarInput = value =>{
    setInput(input + value);
  };

  const calcularResultado = ()=> {
    if(input ){
      setInput(evaluate(input))
    }else{
      alert('Por ingrese valores validos')
    }
  }
  return (
    <div className='Calculadora'>
      <p>Desde Calculadora</p>
      <Pantalla input={input} />
      <div className='fila'>
        <Boton manejarClick={agregarInput}>1</Boton>
        <Boton manejarClick={agregarInput}>2</Boton>
        <Boton manejarClick={agregarInput}>3</Boton>
        <Boton manejarClick={agregarInput}>-</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>4</Boton>
        <Boton manejarClick={agregarInput}>5</Boton>
        <Boton manejarClick={agregarInput}>6</Boton>
        <Boton manejarClick={agregarInput}>+</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={agregarInput}>7</Boton>
        <Boton manejarClick={agregarInput}>8</Boton>
        <Boton manejarClick={agregarInput}>9</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <Boton manejarClick={calcularResultado}>=</Boton>
        <Boton manejarClick={agregarInput}>0</Boton>
        <Boton manejarClick={agregarInput}>.</Boton>
        <Boton manejarClick={agregarInput}>/</Boton>
      </div>
      <div className='fila'>
        <BotonClear manejarClear={()=>setInput('')}>Clear</BotonClear>
      </div>
    </div>
  );
}

export default Calculadora;

function Boton(props){
  //Con esta funcion determinamos si lo que esta dentro de un boton es un caracter de operador ya que si es asi va a tener un color de fondo verde o si es un numero va a tener un fondo de color blanco
  const esOperador = valor =>{
    return isNaN(valor) && (valor !== '.') && (valor !== '='); //si todo es cierto devulve un TRUE
  };
  return (
    <div
    className={`boton-calculadora ${esOperador(props.children)? 'operador' : ''}`.trimEnd()}
    onClick={() => props.manejarClick(props.children)}>
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

const BotonClear =(props) =>{
  return(
    <div 
    className='boton-clear'
    onClick={props.manejarClear}>
      {props.children}
    </div>
  )
}