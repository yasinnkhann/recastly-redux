import Redux from 'redux';
import exampleVideoData from '../data/exampleVideoData.js';
import { CHANGE_VIDEO_LIST } from '../actions/actionTypes.js'

// export const initState = {
//   videos: exampleVideoData
// }

var videoListReducer = (state = [], action) => {
  //TODO: define a reducer for the videoList field of our state.
  switch (action.type) {
    case CHANGE_VIDEO_LIST:
      return {
        ...state,
        videos: action.videos
      };
      default:
        return state;
  }
};

export default videoListReducer;
