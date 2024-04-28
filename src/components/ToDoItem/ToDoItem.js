import React from 'react';
import './ToDoItem.css';
import { FcCheckmark } from "react-icons/fc";
import { FcFullTrash } from "react-icons/fc";

function ToDoItem(props){

    const onCompleted = ()=>{
        alert('Haz Completado la tarea = '+ props.text)
    };

    const onDeleted = ()=>{
        alert('Haz Eliminado la tarea = '+ props.text)
    };

    return(
        <li className="ToDoItem">
            <span 
                className={`Icon Icon-check ${props.completed 
                            && 'Icon-check--active'}`}
                onClick={props.onComplete}
                >
                <FcCheckmark />
            </span>
            <p 
                className={`ToDoItem-p ${props.completed 
                            && 'ToDoItem-p--complete'}`}>
                {props.text}
            </p>
            <span 
                className="Icon Icon-delete"
                onClick={props.onDelete}>
                <FcFullTrash />
            </span>
        </li>
    );
}

export { ToDoItem };