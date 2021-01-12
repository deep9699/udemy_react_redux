import React from 'react'
import "./VideoItem.css"

const VideoItem=(props)=>{
    return (
        <div className="video-item item" onClick={()=>props.onSelectVideo(props.video)}>
            <img alt={props.video.snippet.title} className="ui image" src={props.video.snippet.thumbnails.medium.url}></img>
            <div className="content">
                <div className="header">{props.video.snippet.title}</div>
            </div>
        </div>
    )
}

export default VideoItem
