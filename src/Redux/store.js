import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import reducer from './redusers/rootReducer';
import mysaga from '../Redux-Saga/mysaga';

const sagaFunc = createSagaMiddleware();

const store = createStore(reducer, composeWithDevTools(applyMiddleware(sagaFunc)));

sagaFunc.run(mysaga);

export default store;
