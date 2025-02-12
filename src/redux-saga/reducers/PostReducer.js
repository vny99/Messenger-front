import { POST, POST_FAILURE, POST_SUCCESS } from "../actions/actionTypes";

const intialState={
    post:null,
    error:null
};

const postReducer=(state=intialState,action)=>{
    switch(action.type){
        case POST:
            return{
                ...state,
                error:null
            };
        case POST_SUCCESS:
            return{
                ...state,
                post:action.payload
            };
        case POST_FAILURE:
            return{
                ...state,
                error:action.payload
            };
        default :
        return state;
    }
}

export default postReducer;