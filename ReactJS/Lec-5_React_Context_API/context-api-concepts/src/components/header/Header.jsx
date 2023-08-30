import { useCounter } from '../counterProvider/CounterProvider'

const Header = () => {

    /***
     * Here we are consuming the context
     */
    const { count } = useCounter();

    return (
        <>
         <h1> { count }</h1>
        </>
    )
}

export default Header;