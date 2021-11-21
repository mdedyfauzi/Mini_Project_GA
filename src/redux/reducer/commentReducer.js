import { ADD_COMMENT } from "../typeAction";

const initialState = {
    data: [],
    isLoading: true,
    error: null,
},

const commentReducer = (state = initialState, action) => {
    const {type, payload} = action;
    switch(type) {
        case ADD_COMMENT: {
            return {
                ...state,
                data: payload,   

            }
        }
        default: {
            return {
                ...state,
            };
        }
    }
 }
 export default commentReducer