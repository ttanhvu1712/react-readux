import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions'

export class SongList extends Component {
  rednerList(){
    return this.props.songs.map((song) => (
        <div className="item" key={song.title}>
          <div className="right floated content">
            <button className="ui button primary" onClick={() => this.props.selectSong(song)}>
              Select
            </button>
          </div>
          <div className="content">{song.title}</div>
        </div>
      )
    );
  }

  render() {
    return (
      <div className="ui divided list">
        {this.rednerList()}
      </div>
    )
  }
}

const mapStateToProps = ({songs, selectedSong }) => ({songs, selectedSong})
const mapDispatchToProps = { selectSong }
export default connect(mapStateToProps, mapDispatchToProps)(SongList)
 