import { useState } from "react";

const CounterWithInput = () => {
    const [count, setCount] = useState(0);
    const [delta, setDelta] = useState(1);

    const handleDecrement = () => {
        setCount((count) => count - parseInt(delta));
    }

    const handleIncrement = () => {
        setCount((count) => count + parseInt(delta));
    }

    const updateDelta = (val) => {
        setDelta(val);
    }

    return (
        <div className='container'>
            <button onClick={handleDecrement}>-</button>
            <p>{count}</p>
            <button onClick={handleIncrement}>+</button>
            <input 
               type='text'
               value={delta}
               onChange={(event)=> updateDelta(event.target.value)}
            />
        </div>
    )

}

export default CounterWithInput;