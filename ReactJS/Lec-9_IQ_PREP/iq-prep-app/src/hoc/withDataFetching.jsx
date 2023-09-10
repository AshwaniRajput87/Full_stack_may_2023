import { useEffect, useState } from 'react';

const withDataFetching = (WrappedComponent, dataSource) => {

    return function DataFetchingHOC(props) {

        // const {data, error, isLoading} = useDataFetch(dataSource);

        const [data, setData] = useState([]);
        const [error, setError]= useState(null);
        const [isLoading, setIsLoading] = useState(false);

        useEffect(()=> {  // componentDidMount
            setIsLoading(true);
            try {
                fetch(dataSource)
                .then(res=> res.json())
                .then((data)=>{
                    setData(data);
                })
            }catch(error){
                setError(error);
            } finally {
                setIsLoading(false);
            }
        }, []); // This empty array dependency [] will ensure the useEffect will invoke only once.

        return (
            <WrappedComponent 
               data={data}
               isLoading={isLoading}
               error={error}
               {...props}
            />
        );
    }
}

export default withDataFetching;