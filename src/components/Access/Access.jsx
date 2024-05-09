import React, { useState } from 'react';

function Access (){

  const [username, setUsername] = React.useState('newUser1');
  const [password, setPassword] = React.useState('newPassword2');

  //Funcion para manejar cambios en el campo de entrada username
  const handlerUsernameChange = (event) =>{
      setUsername(event.target.value);
  };

  //Funcion para manejar cambios en el campo de entrada Password
  const handlerPasswordChange = (event) => {
      setPassword(event.target.value);
  };

  //Funcion para manejar el envio del formulario
  const hanlderSubmit = (event) => {
      event.preventDefault();
      //Aqui puedes hacer lo que necesites con los valores de username y password
      console.log('Usuario :', username);
      console.log('Password :', password);
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={hanlderSubmit}>
        <div>
        <label htmlFor="username">Usuario:</label>
            <input 
                type='text' 
                id='username'
                value={username}
                onChange={handlerUsernameChange}
                required/>
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
            <input 
                type='password' 
                id='password'
                value={password}
                onChange={handlerPasswordChange}
                required/>
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
  );
};

export default Access;