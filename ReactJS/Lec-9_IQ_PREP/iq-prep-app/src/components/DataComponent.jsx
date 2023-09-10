const DataComponent = ({ data, error, isLoading }) => {

    if(isLoading) {
        return <div>Loading...</div>;
    }

    if(error) {
        return <div>Error:{error}</div>;
    }

    return ( 
        <>
        <h2> Data from API</h2>
        <ul>
            {
                data.map((item, index)=>{
                    return (
                        <li style={{textAlign:'left', paddingLeft: '10px'}} key={`item-${index+1}`}>
                            {item.title}
                        </li>
                    )
                })
            }
        </ul>
        </>
    )
};

export default DataComponent;