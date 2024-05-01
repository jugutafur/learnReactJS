import React from 'react';
import './ToDoCounter.css';

function ToDoCounter({totalToDo, toDoCompleted}){
    return(
        <h2 className='ToDoCounter'>
            Haz completado {toDoCompleted} de {totalToDo} ToDo
        </h2>
    );
}

export {ToDoCounter}; 