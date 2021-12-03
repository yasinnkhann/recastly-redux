import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './../reducers/main.js';
import exampleVideoData from '../data/exampleVideoData.js';

// TODO:  Create your redux store, apply thunk as a middleware, and export it!

const initState = {
  currentVideo: exampleVideoData[0],
  videoList: exampleVideoData
}

const store = createStore(
  rootReducer,
  initState,
  applyMiddleware(thunk)
);

export default store;