import createSagaMiddleware from 'redux-saga';
import {createStore,applyMiddleware} from 'redux';
import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers/rootReducer';
const sagaMiddleware =createSagaMiddleware();
let middleWare =applyMiddleware(sagaMiddleware);
const store = createStore(
    rootReducer,
    middleWare
)
sagaMiddleware.run(rootSaga);
export  default store;
