import React from "react"

class SearchBar extends React.Component{

    constructor(props){
        super(props);
      //  this.onFormSubmit=this.onFormSubmit.bind(this);
    }

    state={term:''}

    onFormSubmit=(event)=>{
        event.preventDefault();

        this.props.onSubmit(this.state.term);
    }
    
    render(){
        return (
        <div className="ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <label>Image Search</label>
                <input className="field" type="text" value={this.state.term} onChange={(e)=>this.setState({term:e.target.value})} />
            </form>
        </div>);
    }

}


export default SearchBar