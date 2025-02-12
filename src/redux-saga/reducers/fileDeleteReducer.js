import { INDEXTOREMOVE } from "../actions/actionTypes";
const initialState={
    indexToDelete:null 
};
const fileDeleteReducer=(state=initialState,action)=>{
    switch(action.type){
        case INDEXTOREMOVE:
            return{
                ...state,
                indexToDelete: action.payload
            }
        default :
        return state;
    }
}
export default fileDeleteReducer;