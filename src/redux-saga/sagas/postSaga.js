import {call,put,takeEvery, takeLatest} from 'redux-saga/effects';
import { postSuccess,postFailure } from '../actions/actions';
import { POST } from '../actions/actionTypes';
import PostService from '../../Service/PostService';

function* postSaga(action){
    try{
        const response=yield call(PostService.post,action.payload);
        yield put(postSuccess(response));
    }
    catch(e){
        yield put(postFailure(e))
    }
   
}

export function* watchPost(){
    yield takeEvery(POST,postSaga);
}