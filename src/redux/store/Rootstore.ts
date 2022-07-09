import {applyMiddleware, legacy_createStore as createStore} from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from '../reducers/RootReducer';
import rootSaga from '../saga/RootSAga';

const sagaMiddleware = createSagaMiddleware();
const globalStore = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default globalStore;
