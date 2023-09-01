import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUserMiddleWare } from "../redux/middleWare/userMiddleWare"

const User = ({ userId }) => {

    const dispatch = useDispatch();
    const { data, error, isLoading } = useSelector(store => store.user);

    useEffect(()=>{
        const fetchData = async() => {
        await fetchUserMiddleWare(dispatch, userId);
       }
       fetchData();
    }, []);

    const heading = <h2> User Details</h2>;

    if(isLoading) {
        return (
            <>
            {heading}
            <h3>Loading...</h3>
            </>
        )
    }

    if(error) {
        return (
            <>
                {heading}
                <h3>Error: {error}</h3>
            </>
        ) 
    }

    if(data) {
        return (
            <>
                {heading}
                <h3>Name: {data.name}</h3>
                <h3>Email: {data.email}</h3>
            </> 
        )
    }
}

export default User;