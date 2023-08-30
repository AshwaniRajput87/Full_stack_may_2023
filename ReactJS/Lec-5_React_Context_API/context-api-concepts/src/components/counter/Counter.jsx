import { useCounter } from '../counterProvider/CounterProvider'

const Counter = () => {

    /***
     * Here we are consuming the context
     */
    const { increment } = useCounter();

    return (
        <>
           <button onClick={increment}>Increment</button>
        </>
    )
}

export default Counter;