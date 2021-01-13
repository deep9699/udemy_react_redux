import React from 'react'
import reducer from "../reducers/index";
import { connect } from "react-redux";

const SongDetail=(props)=>{
    console.log(props.selectedSong);
    if(!props.selectedSong)
    {
        return <div>Select Song</div>
    }
    else
    {
        return (
        <div>
            <h3>Details for : </h3>
            <p>
                Title : {props.selectedSong.title}
                <br/>
                Duration : {props.selectedSong.duration}
            </p>
            
        </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state);
    return {selectedSong:state.selectedSong}
}

export default connect(mapStateToProps)(SongDetail);
