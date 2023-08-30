import axios from 'axios';
import { useEffect, useState } from 'react';

const useFetchData = (url, intitalData) => {
    const[data, setData] = useState(intitalData);
    const[error, setError] = useState(null);
    const[isLoading, setIsLoading] = useState(false);

    useEffect(()=>{
        const fetchData = async()=> {
           setIsLoading(true);
           try{
                const res = await axios.get(url);
                setData(res.data);
           }catch(error) {
                setError(error);
           } finally {
                setIsLoading(false); 
           }
        }
        fetchData();
    }, [url]);

    return { data, error, isLoading };
}

export default useFetchData;