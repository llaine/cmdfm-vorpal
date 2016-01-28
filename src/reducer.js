import { combineReducers } from 'redux'

import * as actions from './actions/playlist-actions';

function reducer(state = {}, action) {
  switch (action.type) {
    case actions.LOAD_PLAYLIST_REQUEST:
      return { ...state, playlistName:action.playlistName };
    case actions.LOAD_PLAYLIST_SUCCESS:
      return { ...state, playlistName:action.playlistName, response:action.response };
    case actions.LOAD_PLAYLIST_FAILURE:
      return { ...state, playlistName:action.playlistName, error:action.error };
    default:
      return state;
  }
}

export default reducer;