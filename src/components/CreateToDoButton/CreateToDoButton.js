import React from 'react';
import './CreateToDoButton.css';

function CreateToDoButton(props){
    
    const onClickBotton = ()=>{
        alert('Click en el botton')
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