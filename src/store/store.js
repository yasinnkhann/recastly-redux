import { createStore, applyMiddleware } from 'redux';
// import thunkMiddleware from 'redux-thunk';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;