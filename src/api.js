import request from 'request';

import store from './store';
import * as actions from './actions/playlist-actions';

const API_ENDPOINT = 'http://cmdto.com/api/v1/apps/fm/genres/';
const SOUNDCLOUD_API_KEY = '?client_id=26fb3c513c8e0e2c18a75e6174f4ca70';

const Api = {
  getSongsFromStyle(playlistName) {
    store.dispatch(actions.loadPlaylist(playlistName));
    request(API_ENDPOINT + playlistName, (error, response, body) => {
      if(!error && response.statusCode === 200) {
        store.dispatch(actions.loadPlaylistSuccess(playlistName, body));
      } else {
        store.dispatch(actions.loadPlaylistFailure(playlistName, error));
      }
    });
  },

  getStreamUrl(url) {
    const opts = {
      url: `${url}${SOUNDCLOUD_API_KEY}`,
      followAllredirects:true
    };

    request(opts,
        (error, response, body) => {
          if(!error && response.statusCode === 200) {
            resolve(response.request.uri.href);
          } else {
            reject(error);
          }
        }
    );
  }
};

export default Api;