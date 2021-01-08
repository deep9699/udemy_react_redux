import React from 'react'
import VideoItem from './VideoItem'

const  VideoList = (props)=>{
    console.log(props.videos)
    const renderList= props.videos.map((video)=>{
        return <VideoItem key={video.id.videoId} video={video} onSelectVideo={props.onSelectVideo}></VideoItem>
    })
    
    return (
        <div className="ui relaxed divided list">
            {renderList}
        </div>
    )
}

export default VideoList
