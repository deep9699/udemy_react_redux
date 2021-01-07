import React from "react"
import ReactDOM from "react-dom"
import SeasonDispaly from "./SeasonDisplay";
import Spinner from "./Spinner";



class App extends React.Component{

    state= { lat:null ,errorMessage:'' }

    componentDidMount()
    {    
        window.navigator.geolocation.getCurrentPosition(
            (position)=> this.setState({ lat:position.coords.latitude}),
            (err)=> this.setState({errorMessage:err.message})
        );
    }

    renderBody()
    {

        if(this.state.errorMessage && !this.state.lat)
        {
        return <div>Error : {this.state.errorMessage}</div>;
        }
        else if(this.state.lat && !this.state.errorMessage)
        {
            return <SeasonDispaly lat={this.state.lat}></SeasonDispaly>;
        }
        else
        {
           return <Spinner message="Please Accept Location Request"></Spinner>
        }


    }

    render(){

        return (
            <div>
                {this.renderBody()}
            </div>
        );
            
    }
}

ReactDOM.render(<App />,document.querySelector("#root"));