import React from 'react';
import { useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);
    const increment = () => {
        setCount(count +1);
    }
    return (
        <div>
            <p>Prueba 1</p>
            <p>Count : {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}; 

export default Counter;