import axios from 'axios';
import { FETCH_USER } from './type'


 const fetchUser = () => async (dispatch) => {
    const res = await axios.get('/api/current_user');
    dispatch({ type: FETCH_USER, payload: res.data });
};

//   export const fetchUser = () => async (dispatch) => {
//         const res =  await axios.get('/api/current_user')
        
//         dispatch({type: FETCH_USER, payload: res})
//        }
   
export default fetchUser;
