/**
 *  Step-2: create a provider
 */

import { useState, useContext } from "react";
import CounterContext from "../../context/CounterContext";

const CounterProvider = ({children}) => {
    const [count, setCount] = useState(0);
    
    const increment = () => {
        setCount(count + 1);
    }

    return (
        <CounterContext.Provider value={{count, increment}}>
            {children}
        </CounterContext.Provider>
    )
}

/***
 * 
 *   Step:3 Create the consumer of the context:-> use the context via custom hook to provide 
 *          the methods and state varaibales to the nested components
 */
export const useCounter = () => {
    return useContext(CounterContext);
}

export default CounterProvider;