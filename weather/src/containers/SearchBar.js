import React, { Component } from 'react'
import { connect } from "react-redux";
import { fetchData } from "../actions/index";

export class SearchBar extends Component {


    constructor(props) {
        super(props)
    
        this.state = {
             term:''
        }
    }
    
    onInputChange=(e)=>{
        this.setState({
            ...this.state,
            term:e.target.value
        })
        
    }

    onSubmitHandler=(e)=>{
        e.preventDefault()
        this.props.fetchData(this.state.term);

    }

    render() {
        return (
            <form onSubmit={this.onSubmitHandler} className="input-group">
                <input 
                className="form-control" 
                placeholder="Get a five-day forcast in favourite citites"
                value={this.state.term} 
                onChange={this.onInputChange} 
                />
                <span className="input-group-btn">
                    <button type="submit" className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}



export default connect("",{fetchData})(SearchBar)
