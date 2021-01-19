import React, { Component } from 'react'
import ColorContext from '../context/ColorContext';
import LanguageContext from '../context/LanguageContext';
import UserCreate from './UserCreate';


class App extends Component {

    state={language:"hindi"};

    onLanguageChange=(language)=>{
        this.setState({
            language:language
        })
    }

    

    render() {

        const text=this.state.language==="english"?"Select a language" : "भाषा चुनें";

        return (
            <div className="ui container">
                <div>
                    {text} :
                    <i onClick={()=>this.onLanguageChange('hindi')} className="flag in"></i>
                    <i onClick={()=>this.onLanguageChange('english')} className="flag us"></i>
                </div>
                <ColorContext.Provider value="red">
                    <LanguageContext.Provider value={this.state.language}>
                        <UserCreate></UserCreate>
                    </LanguageContext.Provider>
                </ColorContext.Provider>
            </div>
        )
    }
}

export default App
