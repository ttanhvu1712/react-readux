import React, { Component } from 'react';
import VideoItem from './VideoItem'

export default class VideoList extends Component {

    renderList() {
        return this.props.videos.map( video => {
            return <VideoItem key={video.etag} video={video} onVideoSelect={this.props.onVideoSelect}/>
        })
    }

    render() {
        return (
            <div className='ui relaxed divided list'>
                {this.renderList()}
            </div>
        )
    }
}