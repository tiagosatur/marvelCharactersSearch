import { combineReducers, compose, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import search from './reducers/search'
import hero from './reducers/hero'

const combinedReducers =  combineReducers({
    search,
    hero,
});

const middlewares = [thunk]
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    combinedReducers,
    composeEnhancers(applyMiddleware(...middlewares))
);

export default store;
