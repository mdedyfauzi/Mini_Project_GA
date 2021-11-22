import axios from 'axios'
import { ADD_COMMENT } from '../typeAction';


// const currentToken = localStorage.getItem("token")
// const config = {
//     headers: {
//         Authorization: `Bearer ${currentToken}`,
//     }
// };

export const postComment = (data) => {
    return async (dispatch) => {
        try {
            const response = await axios.post (`https://timcevent.herokuapp.com/comments`, data)
            dispatch({type: ADD_COMMENT, payload: response.data.data})
        }            
        catch(error) {
            console.log(error)
        }
    }
}
   