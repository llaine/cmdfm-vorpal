export const LOAD_PLAYLIST_REQUEST = 'LOAD_PLAYLIST_REQUEST';
export const LOAD_PLAYLIST_SUCCESS = 'load playlist success';
export const LOAD_PLAYLIST_FAILURE = 'load playlist failure';


export function loadPlaylist(playlistName) {
  return {
    type: LOAD_PLAYLIST_REQUEST,
    playlistName
  }
}

export function loadPlaylistSuccess(playlistName, response) {
  return {
    type: LOAD_PLAYLIST_SUCCESS,
    playlistName,
    response
  }
}

export function loadPlaylistFailure(playlistName, error) {
  return {
    type: LOAD_PLAYLIST_FAILURE,
    playlistName,
    error
  }
}
