import React from 'react'
import { connect } from 'react-redux'

const SongDetail = ({ selectedSong }) => {
  if(!selectedSong)
    return <div> Select a song </div>
  
  const { title, duration} = selectedSong
  return (
    <div>
      <h3>Details for: </h3>
      <p>
        Title: { title }
        <br/>
        Duration: { duration }
      </p>
    </div>
  )
}

const mapStateToProps = ({selectedSong}) => ({selectedSong})
export default connect(mapStateToProps)(SongDetail)
