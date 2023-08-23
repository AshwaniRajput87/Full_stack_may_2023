import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const FetchData = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async() => {
        const res = await axios.get('https://jsonplaceholder.typicode.com/todos');
        let resData = res.data;
        console.log(resData);
        setData(resData);
    }

    return (
        <>
            {
                data.length ? (
                   data.map((item)=>{
                     return <li key={item.id} id={item.id}> { item.id }. { item.title }</li>
                   })
            
                ) : <h2> No data found</h2>
            }
        
        </>
    );
}

export default FetchData;