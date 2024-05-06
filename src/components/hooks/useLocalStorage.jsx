import React from "react";

function useLocalStorage(itemName, intialValue){

    const defaultTodos=[
        {text:'Cortar cebolla', completed:true},
        {text:'Tomar el Curso de Intro a React.js',completed:false},
        {text:'Llorar con la Llorona', completed:false},
        {text:'LALALALALA', completed:false},
        {text:'Usar estados derivados', completed:true},];
    
    //localStorage.setItem('MisToDos_V1', JSON.stringify(defaultTodos));

    //guardar elementos en el localStorage /*
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
    //parsedToDos = JSON.parse(localStorageItem);
    if(!localStorageItem){
        localStorage.setItem(itemName,JSON.stringify(intialValue));
        parsedItem = intialValue;
    }else{
        parsedItem = JSON.parse(localStorageItem);
    }
    const [item, setItem] = React.useState(parsedItem);
    //guardar los cambios ya sea completados o eliminados tanto el localStoare como en el estado 
    const saveItem = (newItem) =>{
        const stringifedToDos = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringifedToDos);      //LocalStorage
        setItem(newItem);                                      //Guardar en el estaddo 
    };

    return [
        item,
        saveItem
    ];
}

export { useLocalStorage }