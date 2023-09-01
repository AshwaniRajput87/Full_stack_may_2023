import { fetchDataStart, fetchDataSuccess, fetchDataFailure } from '../slices/userSlice';
import axios from 'axios';

export const fetchUserMiddleWare = async(dispatch, userId) => {
    dispatch(fetchDataStart());
    try {  
        const res = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
        dispatch(fetchDataSuccess(res.data));
    }catch(error) {
        dispatch(fetchDataFailure(error));
    }
}