import React,{useState,useEffect} from "react"
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

import useVideos from "../hooks/useVideos";

const App = ()=>{

    const [selectedVideo,setSelecetedVideo]=useState(null);
    const [videos,search]=useVideos("cars");



    useEffect(()=>{
        setSelecetedVideo(videos[0]);
    },[videos]);
   

    return (
        <div className="ui container">
            <SearchBar onSubmit={search}></SearchBar>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={selectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={videos} onSelectVideo={(video)=> setSelecetedVideo(video)}></VideoList>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default App