import store from './store';
import * as actions from './actions';

console.log(store.getState());

let unsubscribe = store.subscribe(() =>
    console.log(store.getState())
);

store.dispatch({type: actions.LOAD_PLAYLIST_REQUEST, playlistName:'test'});
store.dispatch({type: actions.LOAD_PLAYLIST_REQUEST, playlistName:'23'});
