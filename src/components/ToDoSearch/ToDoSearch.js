import React from 'react'
import './ToDoSearch.css';

//aplicar estilos en linea
const estilos = {
    backgroundColor: 'red',
    fontSize: '14px',
    textAlign: 'center'
}

function ToDoSearch({searchValue, setSearchValue}){
    //const [searchValue, setSearchValue] = React.useState('');
    const onSearchValueChange = (event)=>{
        console.log(event.target.value);
        setSearchValue(event.target.value);
    };

    return(
        <React.Fragment>
            <h2 style={estilos}>ToDoSearch label</h2>
            <input 
                className="ToDoSearch" 
                placeholder="Cebolla"
                onChange={onSearchValueChange}
                />
            <p>{searchValue}</p>
        </React.Fragment>        
    );
}

export {ToDoSearch};