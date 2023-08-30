
import { useSelector, useDispatch } from 'react-redux';
import { counterAction } from '../redux/slices/counterSlice';

const CounterWithRedux = () => {

    const count = useSelector((store)=> store.counter.value);
    const dispatch = useDispatch();
    
    const handleDecrement = () =>{
      dispatch(counterAction.decrement());
    }

    const handleIncrement = () =>{
        dispatch(counterAction.increment());
    }

     
    return (
        <>
          <h2>Counter With Redux</h2>
           <div className='container'>
                <button onClick={handleDecrement}>-</button>
                <p>{count}</p>
                <button onClick={handleIncrement}>+</button>
           </div>
        </>
    )
}

export default CounterWithRedux;