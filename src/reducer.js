import { combineReducers } from 'redux'

import * as actions from './actions';

function reducer(state = {}, action) {
  switch (action.type) {
    case actions.LOAD_PLAYLIST_REQUEST:
      return { playlistName:action.playlistName };
    default:
      return state;
  }
}

export default reducer;