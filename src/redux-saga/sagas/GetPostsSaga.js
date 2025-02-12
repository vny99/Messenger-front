import { call, put, takeEvery } from "redux-saga/effects";
import { GET_POSTS } from "../actions/actionTypes";
import { getPostsFailure, getPostsSuccess } from "../actions/actions";
import PostService from "../../Service/PostService";

function* getPosts(){
   try{
    const response = yield call(PostService.getPosts);
    yield put(getPostsSuccess(response));
   }
   catch(e){
     yield put(getPostsFailure(e));
   }
    
}
export function* watchGetposts(){
  yield takeEvery(GET_POSTS,getPosts)
}