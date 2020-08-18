import { combineReducers } from 'redux'

// Reducer
const songsReducer = () => {
  return [
    { title:'No Scrubs', duration:'1:05' },
    { title:'Macarena', duration:'2:05' },
    { title:'All star', duration:'3:05' },
    { title:'I want it that way', duration:'4:05' },
  ]
}


const selectedSongReducer = (selectedSong=null, action) => {
  if (action.type === 'SONG_SELECTED') {
    return action.payload
  }

  return selectedSong;
}

export default combineReducers({ songs: songsReducer, selectedSong: selectedSongReducer});