import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import AuthLanding from './Landing/Landing';

import Landing from './Landing/Landing';
import Dashboard from './Dashboard/Dashboard';
import AuthRedirect from './AuthRedirect/AuthRedirect';
import {Dashboard} from "./Dashboard/Dashboard";



export default class App extends React.Component {

    render(){
        return(
            <div>
                <BrowserRouter>
                    <Route path="*" component={AuthRedirect}/>
                    {/*<Route exact path="/" component={Landing}/>*/}
                    <Route exact path="/login" component={Landing}/>
                    <Route exact path="/signup" component={Landing}/>
                    <Route exact path="/Dashboard" component={Dashboard}/>
                </BrowserRouter>
            </div>
        )
    }

}