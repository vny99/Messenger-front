import {all} from 'redux-saga/effects'
import { watchPost } from './postSaga'
import { watchGetposts } from './GetPostsSaga';
function* rootSaga(){
    yield all([watchPost(),watchGetposts()]);
}
export default rootSaga;