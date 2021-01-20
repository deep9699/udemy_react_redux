import React, { Component } from 'react'
import LanguageContext from "../context/LanguageContext";

export class LanguageSelector extends Component {
    
    static contextType=LanguageContext;
    render() {
      
        console.log(this.context);
      
        return (
            
                <div>
                   Select a Language :
                    <i onClick={()=>this.context.onLanguageChange('hindi')} className="flag in"></i>
                    <i onClick={()=>this.context.onLanguageChange('english')} className="flag us"></i>
                </div>
            
        )
    }
}

export default LanguageSelector
