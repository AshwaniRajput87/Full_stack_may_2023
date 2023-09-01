import { useSelector, useDispatch } from "react-redux"

import { counterWithInputAction } from '../redux/slices/counterWithInputSlice';

const CounterWithInputRedux = () => {

   const counterObj = useSelector((state) => state.counterWithInput);
   const count = counterObj.value;
   const delta =  parseInt(counterObj.delta);

   const dispatch = useDispatch();
   const handleDecrement = () => {
      dispatch(counterWithInputAction.decrement());
   }

   const handleIncrement = () => {
    dispatch(counterWithInputAction.increment());
   }

   const handleUpdateDelta = (val) => {
       if(val === '') {
           val = 0 ;
       } else {
           val = parseInt(val);
       }
      dispatch(counterWithInputAction.updateDelta(val));
   }

    return (
        <>
            <h2>Counter With Input Redux</h2>
            <div className='container'>
                <button onClick={handleDecrement}>-</button>
                <p>{count}</p>
                <button onClick={handleIncrement}>+</button>
                <input 
                type='text'
                value={delta.toString()}
                onChange={(event)=> handleUpdateDelta(event.target.value)}
                />
            </div>
        </>
    )
}

export default CounterWithInputRedux;