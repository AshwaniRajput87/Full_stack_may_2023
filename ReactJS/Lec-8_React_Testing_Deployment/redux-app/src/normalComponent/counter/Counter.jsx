import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    
    const handleDecrement = () => {
        setCount(count - 1);
    }

    const handleIncrement = () => {
        setCount(count + 1);
    }
     
    return (
        <>
          <h2>Counter</h2>
           <div className='container'>
                <button data-test-id="counter-decrement-btn" onClick={handleDecrement}>-</button>
                <p>{count}</p>
                <button onClick={handleIncrement}>+</button>
           </div>
           <div>
               Text
           </div>
        </>
    )
}

export default Counter;