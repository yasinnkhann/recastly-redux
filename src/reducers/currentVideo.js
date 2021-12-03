import Redux from 'redux';
import { CHANGE_VIDEO } from '../actions/actionTypes.js';
import { Adapter } from 'enzyme-adapter-react-16';
import exampleVideoData from '../data/exampleVideoData.js';

// export const initState = {
//   video: exampleVideoData[0]
// }

var currentVideoReducer = (state = null, action) => {
  //TODO: define a reducer for the currentVideo field of our state.
  switch (action.type) {
    case CHANGE_VIDEO:
      return action.video;
      default:
        return state;
  }
};

export default currentVideoReducer;
