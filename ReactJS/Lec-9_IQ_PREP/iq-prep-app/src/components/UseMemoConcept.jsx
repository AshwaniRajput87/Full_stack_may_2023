
/**
 *  Memoization: it's optimisation technique used in react:
 *     - useMemo():It caches the result of function or computation and returns the cached value, when the dependencies won't be changed.
 *                 useMemo(()=>{
 *                      fetchData(value);
 *                 }, [value])
 * 
 *     - useCallback(): It memoizes the callback function and returns same memoized function instance between your renders, when the dependencies won't get changed.
 * 
 *                  const fn = useCallback(()=>{
 *                      // logic here with some function
 *                  }, [value])
 * 
 *                  fn();
 * 
 *     - React.memo():  It will cache the whole functional component 
 *       that means it won't re-render until unles your state and props are getting changed.
 */

import { useMemo } from 'react';

const UseMemoConcept = ({ value }) => {
    const computeResult = () => {
        let result = 0;

        for(let i = 1; i <= value; i++) {
            result+=i;
        }
        console.log('data');
        return result;
    }

    const cacheResult = useMemo(()=> {
        return computeResult();
    }, [value]);

    // const fetchData = (cacheResult) => {
    //    console.log('calculated resulted values')
    // }

    // useEffect(()=>{
    //     fetchData();
    // }, [])

    return (
        <>
           <div>Value: {value}</div>
           <div>Memoized value: {cacheResult}</div>
        </>
    )
}

export default UseMemoConcept;