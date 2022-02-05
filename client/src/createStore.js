import { createStore, applyMiddleware } from "redux";
import reducers from './reducers';
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { watchComments } from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(reducers, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(watchComments);

export default store;