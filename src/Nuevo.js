import React from 'react';
import {ToDoCounter} from './components/ToDoCounter/ToDoCounter';
import {ToDoSearch} from './components/ToDoSearch/ToDoSearch';
import {CreateToDoButton} from './components/CreateToDoButton/CreateToDoButton';
import {ToDoItem} from './components/ToDoItem/ToDoItem';
import {TodoList} from './components/TodoList/TodoList';

const defaultTodos=[
    {text:'Cortar cebolla', completed:true},
    {text:'Tomar el Curso de Intro a React.js',completed:false},
    {text:'Llorar con la Llorona', completed:false},
    {text:'LALALALALA', completed:false},
    {text:'Usar estados derivados', completed:true},];

//localStorage.setItem('MisToDos_V1', defaultTodos);

//const defaultTodos = [];

function Nuevo (){
    //guardar elementos en el localStorage /*
    /*
    const localStorageToDos = localStorage.getItem('MisToDos');
    let parsedToDos;
    if(!localStorageToDos){
        localStorage.setItem('MisToDos',JSON.stringify([]));
        parsedToDos = [];
    }else{
        parsedToDos = JSON.parse(localStorageToDos);
    }
    */

    const [toDo, setToDo] = React.useState(defaultTodos);
    const [searchValue, setSearchValue] = React.useState('');
    const totalToDo = toDo.length
    //const toDoCompleted = toDo.filter(todo=> todo.completed == true).length;   //otra forma
    const toDoCompleted = toDo.filter(todo=> !!todo.completed).length;  //!!Doble negacion

    const searchToDos = toDo.filter((toDo) => {
        const todoText = toDo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);});

    //Mostrar todos los toDos sin no se ha ingresado ningun caracter en el buscador
    /*
    if (!searchValue.length >= 1){
       searchToDos = defaultTodos;
    }else{
        //Comparar entre el buscador y el texto de los toDos
        searchToDos = toDo.filter(toDo => {
            const todoText = toDo.text.toLowerCase();
            const searchText = searchValue.toLowerCase();
        return todoText.includes(searchText);
        });
    }*/

    //marcar tarea como completada
    const completedToDo = (text) =>{
        const newToDos = [...toDo];  //Con los ... creo una copia 
        const toDoIndex = newToDos.findIndex((todo) => todo.text == text);
        newToDos[toDoIndex].completed = true;
        setToDo(newToDos);
    };

    //Eliminar tarea
    const deleteToDo = (text) =>{
        const newToDos = [...toDo];  //Con los ... creo una copia 
        const toDoIndex = newToDos.findIndex((todo) => todo.text == text);
        console.log("Antes");
        console.log(newToDos);
        newToDos.splice(toDoIndex, 1);
        console.log("Despues");
        console.log(newToDos);
        setToDo(newToDos);
    };

    //guardar los cambios ya sea completados o eliminados
    const saveToDos = (newToDos) =>{
        const stringifedToDos = JSON.stringify(newToDos);
        localStorage.setItem('MisToDos', stringifedToDos);
        setToDo(newToDos);
    };

    return (
        <React.Fragment>
            <ToDoCounter
                totalToDo = {totalToDo}
                toDoCompleted = {toDoCompleted}/>
            <ToDoSearch 
                searchValue = {searchValue}
                setSearchValue = {setSearchValue}/>
            <TodoList>
                {searchToDos.map(todo => (
                    <ToDoItem 
                        key = {todo.text}// Esto es necesario y lo usa como un identificador unico por cada elemento en este caso usamos la propieda text Ya que seria logico PENSAR que cada Todo es unico y que no se va a repetir 
                        text = {todo.text}
                        completed = {todo.completed}
                        onComplete = {()=>completedToDo(todo.text)}
                        onDelete = {()=>deleteToDo(todo.text)}
                    />
                ))}
            </TodoList>
            <CreateToDoButton/>
        </React.Fragment>        
    );
}

export default Nuevo;