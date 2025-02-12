import { GET_POSTS, GET_POSTS_FAILURE, GET_POSTS_SUCCESS } from "../actions/actionTypes"

const intialState={
    state:null,
    error:null
}
const GetPostsReducers=(state=intialState, action)=>{
    switch(action.type){
        case GET_POSTS:
            return{
                ...state,
                error:null
            } 
        case GET_POSTS_SUCCESS:
            return{
                ...state,
                posts:action.payload
            }
        case GET_POSTS_FAILURE:
            return{
                ...state,
                error:action.payload
            }
        default:
            return state
    }
}
export default GetPostsReducers;