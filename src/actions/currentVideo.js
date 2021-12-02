import { CHANGE_VIDEO } from './actionTypes.js'

var changeVideo = (video) => ({
  //TODO:  Return some action object to change the currently playing video.
  type: CHANGE_VIDEO,
  video
});

export default changeVideo;
