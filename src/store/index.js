import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import search from './reducers/search'

const combinedReducers =  combineReducers({
    search,
});

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
