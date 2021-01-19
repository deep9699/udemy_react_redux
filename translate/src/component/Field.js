import React, { Component } from 'react'
import LanguageContext from '../context/LanguageContext';

 class Field extends Component {
    static contextType=LanguageContext;
    render() {
      
        const text=this.context==="english"?"Name":"नाम";
         

        return (
            <div>
                <div className="ui field">
                    <label>{text}</label>
                    <input />
                </div>
            </div>
        )
    }
}

export default Field
