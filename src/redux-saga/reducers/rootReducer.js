import { combineReducers } from "redux";
import fileDeleteReducer from "./fileDeleteReducer";
import postReducer from "./PostReducer";
import GetPostsReducers from "./GetPostsReducer";
import GetFriendRequestReducer from "./FriendRequestReducer";
const rootReducer =combineReducers({
    delete:fileDeleteReducer,
    post:postReducer,
    getPosts:GetPostsReducers,
    getFriendRequests:GetFriendRequestReducer
})
export default rootReducer;