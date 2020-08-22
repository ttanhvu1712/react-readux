import React, { Component } from 'react'
import './VideoItem.css'

export default class VideoItem extends Component {
    render() {
        const { video, onVideoSelect } = this.props;
        const { title, thumbnails } = video.snippet;
        return (
            <div className='video-item item' onClick={() => onVideoSelect(video)}>
                <img alt={title} src={thumbnails.medium.url} className='ui image'/>
                <div className="content">
                    <div className="header">{title}</div>
                </div>
            </div>
        )
    }
}
