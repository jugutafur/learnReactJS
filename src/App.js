import React from 'react';
import { ToDoCounter } from './components/components/ToDoCounter/ToDoCounter';
import { ToDoSearch } from './components/components/ToDoSearch/ToDoSearch';
import { CreateToDoButton } from './components/components/CreateToDoButton/CreateToDoButton';
import { ToDoItem } from './components/components/ToDoItem/ToDoItem';
import { TodoList } from './components/components/TodoList/TodoList';
import { useLocalStorage } from './components/hooks/useLocalStorage';

function App (){

    const [toDo, saveItem] = useLocalStorage('MisToDos_V1',[]);
    //const [toDo, setToDo] = React.useState(parsedToDos);
    const [searchValue, setSearchValue] = React.useState('');
    const totalToDo = toDo.length
    //const toDoCompleted = toDo.filter(todo=> todo.completed == true).length;   //otra forma
    const toDoCompleted = toDo.filter(todo=> !!todo.completed).length;  //!!Doble negacion

    const searchToDos = toDo.filter((toDo) => {
        const todoText = toDo.text.toLowerCase();
        const searchText = searchValue.toLowerCase();
    return todoText.includes(searchText);});

    //marcar tarea como completada
    const completedToDo = (text) =>{
        const newToDos = [...toDo];  //Con los ... creo una copia 
        const toDoIndex = newToDos.findIndex(
            (todo) => todo.text === text
        );
        newToDos[toDoIndex].completed = true;
        saveItem(newToDos);
    };

    //Eliminar tarea
    const deleteToDo = (text) =>{
        const newToDos = [...toDo];  //Con los ... creo una copia 
        const toDoIndex = newToDos.findIndex(
            (todo) => todo.text === text
        );
        newToDos.splice(toDoIndex, 1);
        saveItem(newToDos);
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

export default App;