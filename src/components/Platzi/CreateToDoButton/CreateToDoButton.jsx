import React from 'react';
import './CreateToDoButton.css';

function CreateToDoButton(props){
  const onClickBotton = ()=>{
      alert('Click en el botton');
      console.log('Click en el botton Crear')
  };
  return (
    <button 
      className='CreateToDoButton'
      onClick={onClickBotton}
      >+
    </button>
  );
}

export { CreateToDoButton };