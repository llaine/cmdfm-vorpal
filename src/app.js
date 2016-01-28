import store from './store';
import Api from './api';

Api.getSongsFromStyle('Dub');


function getResponse(state) {
  return JSON.parse(state.response);
}

function displayChanges() {
  let songs = getResponse(store.getState());

  if(songs) {
    console.log(songs);
  }
}

store.subscribe(displayChanges);

