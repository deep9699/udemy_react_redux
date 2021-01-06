//import React and ReactDOM Libraries
import React from 'react'
import ReactDOM from 'react-dom'

function getButtonText()
{
    return "Click Me"
}
//Create react component
const App = ()=>{
    const buttonText="Click Me"
    return(
        <div>
            <label className="label" htmlFor="name">Enter Your Name</label>
            <input id="name" type="text"></input>
            <button style={{backgroundColor:'blue',color:'white'}}>{buttonText}</button>
        </div>
    )
}

//Take the react component and show it on the screen
ReactDOM.render(<App/>,document.querySelector("#root"))
