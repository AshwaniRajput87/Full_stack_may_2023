import { useEffect } from "react";
import { useState, useRef } from "react";

const UseRefConcept = () => {

    const inputRef = useRef(null);
    console.log(inputRef);

    useEffect(()=>{
       inputRef.current.focus();
    }, [])

    const changedData = useRef(0);
    const [count, setCount] = useState(0);

    const handleIncrement = () =>{
        changedData.current+=1;
        setCount(count + 1);
    }

    return (
        <>
           <button onClick={handleIncrement}>Increment</button>
           <div>Mutable Data via useRef: {changedData.current}</div>
           <div>Mutable Data via useState: {count}</div>

           <input ref={inputRef}/>
        </>
    )
}

export default UseRefConcept;