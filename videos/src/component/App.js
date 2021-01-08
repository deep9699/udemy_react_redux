import React from "react"
import SearchBar from "./SearchBar";
import youtube from "../apis/youtube"
import VideoList from "./VideoList";
import VideoDetail from "./VideoDetail";

class App extends React.Component{

    constructor(props){
        super(props);
        
        this.state={
            videos:[],
            selectedVideo:null
        }
    }


    componentDidMount(){
        this.onSubmit("cars");
    }

    onVideoSelect=(video)=>{
        this.setState({
            selectedVideo:video
        });

        //console.log(video);
    }

    onSubmit= async (term)=>
    {
        console.log(term);
        const response = await youtube.get("/search",{
            params:{
                q:term
            }
        });
        console.log(response);
        this.setState({
            videos:response.data.items,
            selectedVideo:response.data.items[0]
        })
    }

    render(){
    return (
        <div className="ui container">
            <SearchBar onSubmit={this.onSubmit}></SearchBar>
            <div className="ui grid">
                <div className="ui row">
                    <div className="eleven wide column">
                        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                    </div>
                    <div className="five wide column">
                        <VideoList videos={this.state.videos} onSelectVideo={this.onVideoSelect}></VideoList>
                    </div>
                </div>
            </div>
        </div>
    );
    }
}

export default App