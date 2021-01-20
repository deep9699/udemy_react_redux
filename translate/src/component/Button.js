import React, { Component } from 'react'
import LanguageContext from "../context/LanguageContext";
import ColorContext from "../context/ColorContext";

class Button extends Component {

    static contextType=LanguageContext;

    renderSubmit=(value)=>{
        return value==='english'?'Submit':'प्रस्तुत'
    }


    renderButton=(color)=>{
        return (
            <button className={`ui button ${color}`}>
                <LanguageContext.Consumer>{(value)=>this.renderSubmit(value.language)}</LanguageContext.Consumer>
            </button>
        )
    }

    render() {
      
        return (
            <ColorContext.Consumer>
                {(color)=> this.renderButton(color)}
            </ColorContext.Consumer>
        )
    }
}

export default Button
