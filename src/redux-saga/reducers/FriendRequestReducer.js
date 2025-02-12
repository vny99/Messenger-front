import { GET_FRIENDS_REQUESTS, GET_FRIENDS_REQUESTS_FAILURE, GET_FRIENDS_REQUESTS_SUCCESS } from "../actions/actionTypes";

const initialState = {
    state: null,
    error: null,
    requests: []
}
const GetFriendRequestReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_FRIENDS_REQUESTS:
            return state;
        case GET_FRIENDS_REQUESTS_SUCCESS:
            return {
                ...state,
                requests: action.payload
            }
        case GET_FRIENDS_REQUESTS_FAILURE:
            return {
                ...state,
                error: action.payload
            }

        default:
            return state;
    }
}
export default GetFriendRequestReducer;