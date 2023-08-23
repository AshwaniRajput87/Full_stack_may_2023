/**
 *  What are hooks in react?
 *    - Functions starting with "use" are called as hooks.
 * 
 *    - Hooks are allowed only in functional components.
 * 
 *    - Hooks are of 2 types:
 *       1. built-in hooks: provided by react itself.
 *          eg: useState(), useEffect(), useContext()
 *       2. custom hooks: Created by the developers.
 *          eg: useFetchData()
 *    - built-in hooks
 *       - useState(): Allows to add the state of the Components.
 *             const [startVariable, setSateFunction] = useState(intialValue);
 *       - useEffect(): built-in hook that allows you to synchronise a component with external system.
 *             External System: To make the APIs call, invoking third party library etc.
 *             useEffect(setup, dependencies?)
 *               setup: callback function where you can exceute your code
 *               dependencies(optional): list of all re-active values referenced inside the setup code.
 *                                       re-active values states or props
 * 
 *             useEffect(()=>{
 *               // logic to execute here/ can call function here
 *             }, [])
 * 
 *             - To understand the useEffect(), then you need to understand the lifecycle of a component.
 *                 * A componnet is divided into 3 phases:
 *                    1. mounting: when a component is created and inserted into a DOM.
 *                       
 *                       useEffect(() => {
 *                           // it will execute the code written inside this useEffect once
 *                       }, []);
 * 
 *                    2. updating: component re-renders due to changes in its state or props.
 *                        useEffect(() => {
 *                           //  useEffect will again triggered basis on states or props getting updated.
 *                       }, [stateVariables, propsname, functionsName]);
 * 
 *                    3. unmounting: a component removed from the DOM.
 *                        useEffect(() => {
 *                           // Code to run when the component gets mounted (intial render)
 *                           
 *                           return () => {
 *                                //  clean up code you can write here
 *                           }
 *                       }, []);
 */

import { useEffect, useState } from "react";

const HooksWithUseEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log('Component gets mounted');
        
    }, []);

    useEffect(() => {
        console.log('Component gets updated');

        return () => {
            console.log('Component gets removed from DOM');
        }
        
    }, [count]);

    const increment = () => {
        setCount(count + 1);
    }

    return (
        <>
            <h1>React componnet lifecycle</h1>
            <p> Count: {count}</p>
            <button onClick={increment}>Increment</button>
        
        </>
    );
}

export default HooksWithUseEffect;


