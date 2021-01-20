import React, { Component } from 'react'
import ColorContext from '../context/ColorContext';
import {LanguageStore} from '../context/LanguageContext';
import LanguageSelector from './LanguageSelector';
import UserCreate from './UserCreate';


class App extends Component {

    

    render() {

        return (
            <div className="ui container">
                <LanguageStore>
                    <LanguageSelector></LanguageSelector>
                    <ColorContext.Provider value="red">
                        <UserCreate></UserCreate>
                    </ColorContext.Provider>
                </LanguageStore>
            </div>
        )
    }
}

export default App
