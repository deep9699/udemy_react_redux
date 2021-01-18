import React from 'react'
import {BrowserRouter,Route,Link, HashRouter, MemoryRouter,Router} from "react-router-dom";
import StreamShow from "./Streams/StreamShow";
import StreamList from "./Streams/StreamList";
import StreamCreate from "./Streams/StreamCreate";
import StreamEdit from "./Streams/StreamEdit";
import StreamDelete from "./Streams/StreamDelete";
import Header from './Header';
import history from "../history";

const App=()=>{
    return (
        <div className="ui container">
            
            <Router history={history}>
                <div>
                    <Header />        
                    <Route path="/" exact component={StreamList} />
                    <Route path="/streams/show" component={StreamShow} />
                    <Route path="/streams/new" component={StreamCreate} />
                    <Route path="/streams/edit/:id" component={StreamEdit} />
                    <Route path="/streams/delete" component={StreamDelete} />
                </div>
            </Router>

           
            </div>
        
    )
}

export default App
